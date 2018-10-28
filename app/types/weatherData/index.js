import PropTypes from 'prop-types';
import * as shapes from './shapes';

const weatherDataShape = PropTypes.shape({
  coord: shapes.coordShape,
  sys: shapes.sysShape,
  weather: shapes.weatherShape,
  main: shapes.mainShape,
  wind: shapes.windShape,
  clouds: shapes.cloudsShape,
  dt: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  cod: PropTypes.number,
});

export default weatherDataShape;
