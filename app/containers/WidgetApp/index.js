import React from 'react';
import { compose } from 'redux';
import styled from 'styled-components';
import injectSaga from '../../utils/injectSaga';

import WidgetShell from '../WidgetShell';
import rootSaga from '../../sagas';

const WidgetAppWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class WidgetApp extends React.Component {
  render() {
    return (
      <WidgetAppWrapper>
        <WidgetShell />
      </WidgetAppWrapper>
    );
  }
}

const withRootSaga = injectSaga({ key: 'rootSaga', saga: rootSaga });

export default compose(withRootSaga)(WidgetApp);
