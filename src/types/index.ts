import type { ComponentType, ReactNode } from 'react';

import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export type IconType =
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Entypo'
  | 'FontAwesome'
  | 'AntDesign'
  | 'Feather'
  | 'SimpleLineIcons'
  | 'Octicons'
  | 'Zocial';

export type AnimationConfig = {
  duration?: number;
  damping?: number;
  stiffness?: number;
  mass?: number;
  overshootClamping?: boolean;
  restDisplacementThreshold?: number;
  restSpeedThreshold?: number;
};

export type AnimationStyleConfig = {
  scale?: number;
  rotate?: number;
  opacity?: number;
};

export type TabConfig = {
  name: string;
  component: ComponentType<{ children?: ReactNode }>;
  icon: string;
  iconType: IconType;
  animationConfig?: AnimationConfig;
  animationStyle?: AnimationStyleConfig;
};

export type StyleConfig = {
  activeText?: string;
  inactiveText?: string;
  activeButton?: string;
  backgroundColor?: string;
  shadowColor?: string;
  tabBarHeight?: number;
  marginHorizontal?: number;
  animationConfig?: AnimationConfig;
};

export const defaultTheme: StyleConfig = {
  activeText: '#FFFFFF',
  inactiveText: '#000000',
  activeButton: '#FFFFFF',
  backgroundColor: '#FFFFFF',
  shadowColor: '#000000',
  tabBarHeight: 60,
  marginHorizontal: 40,
  animationConfig: {
    stiffness: 100,
    overshootClamping: false,
    restDisplacementThreshold: 0.001,
    restSpeedThreshold: 0.001,
  },
};

export type MotionTabsConfig = {
  tabs: TabConfig[];
  style?: StyleConfig;
  options?: BottomTabNavigationOptions;
};

export type TabRoute = {
  name: string;
  icon?: string;
  iconType?: IconType;
  animationConfig?: AnimationConfig;
  animationStyle?: AnimationStyleConfig;
};

export type BottomTabButtonProps = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  route: TabRoute;
  theme: StyleConfig;
  label: string;
  animationConfig?: AnimationConfig;
  animationStyle?: AnimationStyleConfig;
};
