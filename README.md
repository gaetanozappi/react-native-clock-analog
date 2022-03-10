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

https://user-images.githubusercontent.com/20476002/153429759-b280998a-715c-4f39-ab2c-c62ac1d3b6ed.mov

-   [Usage](#-usage)
-   [License](#-license)

## 📖 Getting started

`$ npm install react-native-clock-analog --save`

## 💻 Usage

```javascript
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AnalogClock from 'react-native-clock-analog';

const nowDate = () => {
  const d = new Date();
  let second = d.getSeconds();
  let minute = d.getMinutes();
  let hour = d.getHours();
  return { second, minute, hour };
};

const nowTimer = () => {
  const { second, minute, hour } = nowDate();
  const [state, setState] = useState({
    second,
    minute,
    hour,
  });

  useEffect(() => {
    setInterval(() => {
      const { second, minute, hour } = nowDate();
      setState({ second, minute, hour });
    }, 1000);
  }, [useState]);
  return state;
};

export default function App() {
  const { second, minute, hour } = nowTimer();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/62/6f/84/626f84c40696c1308a77fd8331e12b3e.jpg',
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 500,
          width: 500,
        }}>
        <AnalogClock size={100} />
        <View style={{ marginBottom: 5 }} />
        <AnalogClock
          colorClock="#2196F3"
          colorNumber="#000000"
          colorCenter="#00BCD4"
          colorHour="#FF8F00"
          colorMinutes="#FFC400"
          hour={hour}
          minutes={minute}
          seconds={second}
          showSeconds
        />
      </ImageBackground>
    </View>
  );
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

## 💻 AutoStart Mode

```javascript
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AnalogClock from 'react-native-clock-analog';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/62/6f/84/626f84c40696c1308a77fd8331e12b3e.jpg',
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 500,
          width: 500,
        }}>
        <AnalogClock size={100} />
        <View style={{ marginBottom: 5 }} />
        <AnalogClock
          colorClock="#2196F3"
          colorNumber="#000000"
          colorCenter="#00BCD4"
          colorHour="#FF8F00"
          colorMinutes="#FFC400"
          autostart={true}
          showSeconds
        />
      </ImageBackground>
    </View>
  );
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
| `showSeconds`      | `bool`   | `false` | Show the seconds.
| `autostart`      | `bool`   | `false`  | Autostart, no need external timer
| `colorClock`      | `string`   | `rgba(255,255,255,0.8)` | Clock color.
| `colorNumber`      | `string`   | `#000000` | Color of the clock numbers.
| `colorCenter`      | `string`   | `#000000` | Clock center color.
| `colorHour`      | `string`   | `#000000`  | Clock hour hand color.
| `colorMinutes`      | `string`   | `rgba(255,255,255,0.7)`  | Clock minute hand color.
| `colorSeconds`      | `string`   | `red`  | Clock second hand color.
| `hour`      | `number`   |  | Hour.
| `minutes`      | `number`   |  | Minutes.
| `seconds`      | `number`   |  | Seconds.

## 📜 License
This library is provided under the Apache License.
