![🎨 react-native-motion-tabs](https://github.com/user-attachments/assets/34281713-08f3-4b82-ad10-9dcef10c9890)

A lightweight, highly customizable bottom tabs navigator for React Native that brings life to your navigation with smooth, fluid animations. Built on top of React Navigation, it combines elegant transitions, rich icon support, and an intuitive API to create beautiful tab bars that enhance user experience.

Perfect for apps that want to:

- Create engaging navigation experiences
- Stand out with unique tab bar designs
- Maintain native performance while adding rich animations
- Implement custom navigation patterns quickly

Powered by React Native Reanimated, it provides butter-smooth animations while maintaining 60 FPS. The library seamlessly integrates with React Navigation's ecosystem while adding a layer of motion and interactivity that makes your app feel more dynamic and responsive.

## Features

- Pre-configured smooth animations
- Customizable styles and colors
- Built-in icon support
- TypeScript support
- Works with React Navigation

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
  return <View style={{flex: 1}} />;
}

const Tabs = createMotionTabs({
  tabs: [
    {
      name: 'Home',
      component: ExampleScreen,
      icon: 'home',
      iconType: 'Ionicons',
    },
    {
      name: 'Search',
      component: ExampleScreen,
      icon: 'search',
      iconType: 'Ionicons',
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
