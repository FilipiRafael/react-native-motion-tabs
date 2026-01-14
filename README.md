![🎨 react-native-motion-tabs](https://github.com/user-attachments/assets/34281713-08f3-4b82-ad10-9dcef10c9890)

A lightweight, highly customizable bottom tabs navigator for React Native that brings life to your navigation with smooth, fluid animations. Built on top of React Navigation, it combines elegant transitions, rich icon support, and an intuitive API to create beautiful tab bars that enhance user experience.

Perfect for apps that want to:

- Create engaging navigation experiences
- Stand out with unique tab bar designs
- Maintain native performance while adding rich animations
- Implement custom navigation patterns quickly

Powered by React Native Reanimated, it provides butter-smooth animations while maintaining 60 FPS. The library seamlessly integrates with React Navigation's ecosystem while adding a layer of motion and interactivity that makes your app feel more dynamic and responsive.

## 📸 How it looks

https://github.com/user-attachments/assets/3b37176b-0ba3-43f7-b1e0-513fb514e825

## Features

- Pre-configured smooth animations
- Customizable styles and colors
- Built-in icon support
- TypeScript support
- Works with React Navigation
- Advanced animation configurations
- Custom animation styles per tab

## Installation

### 1. Install the library and its dependencies

```bash
# Core library
yarn add react-native-motion-tabs

# React Navigation
yarn add @react-navigation/native @react-navigation/bottom-tabs

# React Native dependencies
yarn add react-native-reanimated react-native-vector-icons react-native-screens react-native-safe-area-context react-native-gesture-handler
```

### 2. Babel Configuration

Update your `babel.config.js`:

```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
```

### 3. Index File Setup

In your `index.js` or `index.ts`:

```javascript
import 'react-native-gesture-handler';
```

### 4. Font Configuration

Create `react-native.config.js` in your project root:

```javascript
module.exports = {
  assets: ['./node_modules/react-native-vector-icons/Fonts'],
};
```

### 5. iOS Configuration

Add the following line just before the final `end` clause in your `Podfile`:

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

> Placing it before the final end ensures it's part of the target configuration, integrating the vector icons with your project's build process.

Add the following block of code just before the final closing `</dict>` tag in your `Info.plist` file:

```xml
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```

> This ensures the font configurations are part of your app's main configuration dictionary, allowing iOS to properly load the vector icon fonts.

### 6. Android Configuration

Add these lines at the top of your `android/app/build.gradle` file, outside of any existing configuration blocks:

```gradle
apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle");
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

project.ext.react = [
    enableHermes: true
]
```

> Placing these at the top ensures they are processed early in the build configuration, before other build settings are applied. This guarantees that the native modules and font configurations are properly integrated into your Android build process.

### 7. Finalize Setup

```bash
# For iOS
cd ios
pod install
cd ..
```

## Usage

```typescript
import { View } from 'react-native';
import { createMotionTabs } from 'react-native-motion-tabs';
import { NavigationContainer } from '@react-navigation/native';

function ExampleScreen() {
  return <View style={{ flex: 1, backgroundColor: 'white' }} />;
}

const Tabs = createMotionTabs({
  tabs: [
    {
      name: 'Home',
      component: ExampleScreen,
      icon: 'home',
      iconType: 'Ionicons',
      animationConfig: {
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.001,
        restSpeedThreshold: 0.001,
      },
      animationStyle: {
        scale: 1.2,
        rotate: 360,
        opacity: 0.8,
      },
    },
    {
      name: 'Search',
      component: ExampleScreen,
      icon: 'search',
      iconType: 'Ionicons',
      animationConfig: {
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.001,
        restSpeedThreshold: 0.001,
      },
      animationStyle: {
        scale: 1.1,
        rotate: 180,
      },
    },
    {
      name: 'Favorites',
      component: ExampleScreen,
      icon: 'heart',
      iconType: 'Ionicons',
    },
    {
      name: 'Profile',
      component: ExampleScreen,
      icon: 'person',
      iconType: 'Ionicons',
    },
  ],
  style: {
    activeButton: '#EF7E06',
    activeText: '#FFFFFF',
    inactiveText: '#000000',
    backgroundColor: '#FFFFFF',
    animationConfig: {
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
    },
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
```

## Icon Support

We support a wide variety of icon libraries:

- Ionicons
- MaterialIcons
- MaterialCommunityIcons
- Entypo
- FontAwesome
- AntDesign
- Feather
- And many more!

📱 Explore all available icons at: [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)

## Meowtive

To see MotionTabs in action, check out [Meowtive](https://github.com/meowtive/meowtive)!

## Contributing

See our [Contributing Guide](CONTRIBUTING.md)

## Support

If this library helped you, consider:

- ⭐️ Star on GitHub
- 💖 [Sponsor Development](https://github.com/sponsors/filipirafael)
- 🐛 Report issues
- 🤝 Submit PRs

## License

MIT © [Filipi Rafael](https://github.com/filipirafael)

---

Made with ❤️ by [@filipiRafael3](https://x.com/filipiRafael3)

## Animation Configuration

The library uses React Native Reanimated's `withSpring` for animations. Here are the available configuration options:

### Animation Config

- `stiffness`: Controls how "springy" the animation is (default: 100)
- `overshootClamping`: Prevents the animation from overshooting its target (default: false)
- `restDisplacementThreshold`: The minimum displacement from the target to consider the animation complete (default: 0.001)
- `restSpeedThreshold`: The minimum speed to consider the animation complete (default: 0.001)

### Animation Style

- `scale`: Scale factor for the icon when active (default: 1.2)
- `rotate`: Rotation in degrees for the icon when active (default: 0)
- `opacity`: Opacity value for the icon when active (default: 1)

Example:

```typescript
animationConfig: {
  stiffness: 100,
  overshootClamping: false,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001,
},
animationStyle: {
  scale: 1.2,
  rotate: 360,
  opacity: 0.8,
}
```
