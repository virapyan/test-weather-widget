import PropTypes from 'prop-types';

const locationShape = PropTypes.shape({
  lat: PropTypes.number,
  lon: PropTypes.number,
});

export default locationShape;
