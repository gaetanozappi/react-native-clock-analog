# React Native: react-native-clock-analog

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-native-clock-analog.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-native-clock-analog)
[![github home](http://img.shields.io/npm/v/react-native-clock-analog.svg?style=flat)](https://www.npmjs.com/package/react-native-clock-analog)
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--clock--analog-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-clock-analog)
[![npm](https://img.shields.io/npm/dm/react-native-clock-analog.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-clock-analog)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-clock-analog.svg?style=flat)](https://github.com/gaetanozappi/react-native-clock-analog/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-clock-analog.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-clock-analog/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-clock-analog.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-clock-analog/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-clock-analog.svg)]()

<img src="https://github.com/gaetanozappi/react-native-clock-analog/raw/master/screenshot/react-native-clock-analog.png" />

-   [Usage](#-usage)
-   [License](#-license)

## 📖 Getting started

`$ npm install react-native-clock-analog --save`

## 💻 Usage

```javascript
import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import AnalogClock from 'react-native-clock-analog';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'https://i.pinimg.com/originals/62/6f/84/626f84c40696c1308a77fd8331e12b3e.jpg',
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 500,
            width: 500,
          }}>
          <AnalogClock
            size={100}
          />
          <View style={{ marginBottom: 5 }} />
          <AnalogClock
            colorClock="#2196F3"
            colorNumber="#000000"
            colorCenter="#00BCD4"
            colorHour="#FF8F00"
            colorMinutes="#FFC400"
            hour="2"
            minutes={55}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
```

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `size`       | `number`   |  `180`  | Clock size.
| `colorClock`      | `string`   | `rgba(255,255,255,0.8)` | Clock color.
| `colorNumber`      | `string`   | ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` | Color of the clock numbers.
| `colorCenter`      | `string`   | ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` | Clock center color.
| `colorHour`      | `string`   | ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff`  | Clock hour hand color.
| `colorMinutes`      | `string`   | `rgba(255,255,255,0.7)`  | Clock minute hand color.
| `hour`      | `number`   |  | Hour.
| `minutes`      | `number`   |  | Minutes.

## 📜 License
This library is provided under the Apache License.
