import PropTypes from 'prop-types';

export const coordShape = PropTypes.shape({
  lon: PropTypes.number,
  lat: PropTypes.number,
});

export const sysShape = PropTypes.shape({
  country: PropTypes.string,
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
});

export const weatherShape = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  main: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
}));

export const mainShape = PropTypes.shape({
  temp: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  temp_min: PropTypes.number,
  temp_max: PropTypes.number,
});

export const windShape = PropTypes.shape({
  speed: PropTypes.number,
  deg: PropTypes.number,
});

export const cloudsShape = PropTypes.shape({
  all: PropTypes.number,
});
