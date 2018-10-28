import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectWeatherData } from '../store/selectors';
import locationShape from '../../types/location';
import { WidgetCardWrapper, WidgetCardDivider } from './styles';
import { weatherDataFetchCommand } from '../../sagas/actions';
import weatherDataShape from '../../types/weatherData';
import WidgetViewer from '../WidgetViewer';
import WidgetEditor from '../WidgetEditor';

class WidgetCard extends React.Component {
  componentDidMount() {
    this.props.fetchWeatherData(this.props.location);
  }

  render() {
    const { weatherData } = this.props;

    return (
      <WidgetCardWrapper>
        {weatherData &&
          <React.Fragment>
            <WidgetEditor />
            <WidgetCardDivider />
            <WidgetViewer weatherData={weatherData}/>
          </React.Fragment>
        }
      </WidgetCardWrapper>
    );
  }
}

WidgetCard.propTypes = {
  weatherData: weatherDataShape,
  getWeatherData: PropTypes.func,
  location: locationShape,
};

const mapDispatchToProps = (dispatch) => ({
  fetchWeatherData: (location) => dispatch(weatherDataFetchCommand(location)),
});

const mapStateToProps = (state, ownProps) => ({
  weatherData: selectWeatherData(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetCard);
