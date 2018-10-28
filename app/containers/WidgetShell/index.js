import React from 'react';
import PropTypes from 'prop-types';
import spinner from '../../assets/loading-spinner.gif'
import { connect } from 'react-redux';

import WidgetCard from '../WidgetCard';
import {
  selectLocation,
  selectIsDataLoading,
} from '../store/selectors';

import {
  WidgetShellWrapper,
  WidgetShellDivider,
  WidgetDataLoader,
 } from './styles';

import { locationFetchCommand } from '../../sagas/actions';
import locationShape from '../../types/location';

class WidgetShell extends React.Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    const { location, isDataLoading } = this.props;

    return (
      <WidgetShellWrapper>
        { location && <WidgetCard location={location} /> }
        { isDataLoading && <WidgetDataLoader src={spinner} /> }
      </WidgetShellWrapper>
    );
  }
}

WidgetShell.propTypes = {
  location: locationShape,
  isDataLoading: PropTypes.bool,
  fetchLocation: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocation: () => dispatch(locationFetchCommand()),
});

const mapStateToProps = (state, ownProps) => ({
  location: selectLocation(state),
  isDataLoading: selectIsDataLoading(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetShell);
