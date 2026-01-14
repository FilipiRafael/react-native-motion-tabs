import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { BottomTab } from '../components/BottomTab/BottomTab';
import type {
  MotionTabsConfig,
  IconType,
  AnimationConfig,
  AnimationStyleConfig,
} from '../types';

const Tab = createBottomTabNavigator();

export function MotionTabs({ tabs, style, options }: MotionTabsConfig) {
  const tabsConfig = tabs.reduce(
    (acc, tab) => {
      acc[tab.name] = {
        icon: tab.icon || 'home',
        iconType: tab.iconType || 'Ionicons',
        animationConfig: tab.animationConfig,
        animationStyle: tab.animationStyle,
      };
      return acc;
    },
    {} as Record<
      string,
      {
        icon: string;
        iconType: IconType;
        animationConfig?: AnimationConfig;
        animationStyle?: AnimationStyleConfig;
      }
    >
  );

  const renderTabBar = (props: BottomTabBarProps) => (
    <BottomTab {...props} theme={style} tabsConfig={tabsConfig} />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        ...options,
      }}
      tabBar={renderTabBar}
    >
      {tabs.map(({ name, component }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
}

export function createMotionTabs(config: MotionTabsConfig) {
  return () => <MotionTabs {...config} />;
}
