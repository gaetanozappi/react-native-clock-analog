import * as React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class AnalogClock extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hour: props.hour,
      minutes: props.minutes,
      seconds: props.seconds,
      autostart: props.autostart,
      size: props.size,
      colorClock: props.colorClock,
      colorNumber: props.colorNumber,
      colorCenter: props.colorCenter,
      colorHour: props.colorHour,
      colorMinutes: props.colorMinutes,
      colorSeconds: props.colorSeconds,
      showSeconds: props.showSeconds,
      ping: false //Used for rendering
    }

    INTERVAL_CLOCK = null
  }

  componentDidMount() {
    if(this.state.autostart && INTERVAL_CLOCK === null) {

      INTERVAL_CLOCK = setInterval(() => {
        this.setState({
          ping: true
        });
      }, 500);
    }
  }

  componentWillUnmount() {
    if(INTERVAL_CLOCK != null) {
      clearInterval(INTERVAL_CLOCK);
    }
  }

  render() {
    let {
      size,
      colorClock,
      colorNumber,
      colorCenter,
      colorHour,
      colorMinutes,
      colorSeconds,
      hour,
      minutes,
      seconds,
      showSeconds,
    } = this.state;
    var date = new Date();
    if (!hour && hour !== 0) hour = date.getHours();
    hour = hour > 12 ? hour - 12 : hour;

    if (!minutes && minutes !== 0) minutes = date.getMinutes();
    minutes = minutes / 5;

    if (!seconds && seconds !== 0) seconds = date.getSeconds();
    seconds = seconds > 60 ? seconds - 60 : seconds;

    var lanHour = size / 6;
    var lanMinutes = size / 3.75;
    var lanSeconds = size / 3.75;

    return (
      <View
        style={{
          backgroundColor: colorClock,
          borderRadius: size / 2,
          justifyContent: 'center',
          alignItems: 'center',
          height: size,
          width: size,
        }}>
        {[...Array(12).keys()].map((i) => {
          let a = -60 + 30 * i;
          let b = 60 - 30 * i;
          return (
            <View
              style={{
                position: 'absolute',
                transform: [
                  { rotate: a + 'deg' },
                  { translateX: size / 2 - 15 },
                ],
              }}>
              <Text
                style={{
                  color: colorNumber,
                  fontSize: size / 9,
                  fontWeight: 'bold',
                  transform: [{ rotate: b + 'deg' }],
                }}>
                {i + 1}
              </Text>
            </View>
          );
        })}
        <View
          style={{
            zIndex: 1,
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: colorCenter,
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: lanHour,
            height: 4,
            borderRadius: 4,
            backgroundColor: colorHour,
            transform: [
              { rotate: -90 + ( hour + (minutes / 12)) * 30 + 'deg' },
              { translateX: lanHour / 2 },
            ],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: lanMinutes,
            height: 4,
            borderRadius: 4,
            backgroundColor: colorMinutes,
            transform: [
              { rotate: -90 + minutes * 30 + 'deg' },
              { translateX: lanMinutes / 2 },
            ],
          }}
        />
        {showSeconds && (
          <View
            style={{
              position: 'absolute',
              width: lanSeconds,
              height: 2,
              borderRadius: 4,
              backgroundColor: colorSeconds,
              transform: [
                { rotate: -90 + seconds * 6 + 'deg' },
                { translateX: lanSeconds / 2 },
              ],
            }}
          />
        )}
      </View>
    );
  }
}

AnalogClock.propTypes = {
  size: PropTypes.number,
  colorClock: PropTypes.string,
  colorNumber: PropTypes.string,
  colorCenter: PropTypes.string,
  colorHour: PropTypes.string,
  colorMinutes: PropTypes.string,
  colorSeconds: PropTypes.string,
  showSeconds: PropTypes.bool,
  autostart: PropTypes.bool
};

AnalogClock.defaultProps = {
  size: 180,
  showSeconds: false,
  colorClock: 'rgba(255,255,255,0.8)',
  colorNumber: '#000',
  colorCenter: '#000',
  colorHour: '#000',
  colorMinutes: 'rgba(255,255,255,0.7)',
  colorSeconds: 'red',
  autostart: false
};
