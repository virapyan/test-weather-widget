import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectShowCelsius,
  selectShowWind,
  selectTitle,
} from '../store/selectors';

import {
  WidgetViewerWrapper,
  ViewerTitle,
  ViewerDetailsWrapper,
  ViewerWeatherIcon,
  ViewerWeatherDetails,
  City,
  Temp,
  Wind,
 } from './styles';

import weatherDataShape from '../../types/weatherData';

class WidgetViewer extends React.Component {

  getTempUnit(tempCel) {
    const { showCelsius } = this.props;
    const tempF = tempCel * 1.8 + 32;
    return showCelsius ? tempCel.toFixed(1) : tempF.toFixed(1);
  }

  getWindDirection(windDeg) {
    let val = Math.floor((windDeg / 22.5) + 0.5);
    let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

  getWindSpeedInKmPerHour(metresPerSecond) {
    return  Math.round(metresPerSecond * (60*60)/1000);
  }

  render() {
    const {
      weatherData,
      title,
      showCelsius,
      showWind
    } = this.props;

    const icon = weatherData.weather[0].icon;
    const src = `http://openweathermap.org/img/w/${icon}.png`;
    const tempStr = `${this.getTempUnit(weatherData.main.temp)}${String.fromCharCode(176)}`;
    const windDirection = this.getWindDirection(weatherData.wind.deg);
    const windSpeed = this.getWindSpeedInKmPerHour(weatherData.wind.speed);
    const windStr = `${windDirection} ${windSpeed}km/h`;

    return (
      <WidgetViewerWrapper>
        <ViewerTitle>{title}</ViewerTitle>
        <ViewerDetailsWrapper>
          <ViewerWeatherIcon src ={src} />
          <ViewerWeatherDetails>
            <City>{weatherData.name}</City>
            <Temp>{tempStr}</Temp>
            {showWind && <Wind><b>Wind</b> {windStr}</Wind>}
          </ViewerWeatherDetails>
        </ViewerDetailsWrapper>
      </WidgetViewerWrapper>
    );
  }
}

WidgetViewer.propTypes = {
  weatherData: weatherDataShape,
  title: PropTypes.string,
  showCelsius: PropTypes.bool,
  showWind: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  showCelsius: selectShowCelsius(state),
  showWind: selectShowWind(state),
  title: selectTitle(state),
});

export default connect(mapStateToProps, null)(WidgetViewer);
