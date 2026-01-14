import { useState } from 'react';
import { View, type LayoutChangeEvent, StyleSheet } from 'react-native';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { isAndroid } from '../../config/platform';
import { BottomTabButton } from '../BottomTabButton/BottomTabButton';
import { stylesheet } from './styles';
import {
  defaultTheme,
  type StyleConfig,
  type AnimationConfig,
  type IconType,
} from '../../types';

type DimensionsProps = {
  height: number;
  width: number;
};

export const BottomTab = ({
  state,
  descriptors,
  navigation,
  tabsConfig,
  theme,
}: BottomTabBarProps & { theme?: StyleConfig } & {
  tabsConfig: Record<
    string,
    { icon: string; iconType: IconType; animationConfig?: AnimationConfig }
  >;
}) => {
  const [dimensions, setDimensions] = useState<DimensionsProps>({
    height: 20,
    width: 100,
  });

  const buttonWidth = dimensions.width / state.routes.length;
  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  const onBottomTabLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const containerStyle = StyleSheet.flatten([
    stylesheet.container,
    {
      backgroundColor: theme?.backgroundColor || defaultTheme.backgroundColor,
      marginHorizontal: theme?.marginHorizontal || 40,
    },
  ]);

  const backgroundStyle = StyleSheet.flatten([
    stylesheet.bottomTabBackground,
    {
      backgroundColor: theme?.activeButton || defaultTheme.activeButton,
    },
  ]);

  return (
    <View onLayout={onBottomTabLayout} style={containerStyle}>
      <Animated.View
        style={[
          animatedStyle,
          backgroundStyle,
          {
            height: dimensions.height - (isAndroid ? 20 : 10),
            width: buttonWidth - 25,
          },
        ]}
      />

      {state.routes.map(
        (route: { key: string; name: string; params: any }, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const config = {
              stiffness: theme?.animationConfig?.stiffness || 100,
              overshootClamping:
                theme?.animationConfig?.overshootClamping || false,
              restDisplacementThreshold:
                theme?.animationConfig?.restDisplacementThreshold || 0.001,
              restSpeedThreshold:
                theme?.animationConfig?.restSpeedThreshold || 0.001,
            };

            tabPositionX.value = withSpring(buttonWidth * index, config);

            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <BottomTabButton
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              route={{
                name: route.name,
                ...tabsConfig[route.name],
              }}
              theme={theme || defaultTheme}
              label={label}
              animationConfig={tabsConfig[route.name]?.animationConfig}
            />
          );
        }
      )}
    </View>
  );
};
