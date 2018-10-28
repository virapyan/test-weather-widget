import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  updateTitle,
  updateShowCelsius,
  updateShowWind,
} from '../store/actions';

import {
  selectTitle,
  selectShowCelsius,
  selectShowWind,
} from '../store/selectors';

import {
  WidgetEditorWrapper,
  TitleSectionWrapper,
  SectionWrapper,
  Title,
  Input,
  SectionTitle,
  Options,
  OptionInput,
  TempOption,
  OptionInputLabel,
} from './styles';

class WidgetEditor extends React.Component {

  inputChangeHandler(evt) {
    this.props.updateTitle(evt.target.value);
  }

  tempRadioChangeHandler(evt) {
    this.props.updateShowCelsius(evt.target.value == 'celsius');
  }

  windRadioChangeHandler(evt) {
    this.props.updateShowWind(evt.target.value == 'on');
  }

  render() {
    const { title, showCelsius, showWind } = this.props;

    return (
      <WidgetEditorWrapper>
        <TitleSectionWrapper>
          <Title>Title</Title>
          <Input
            type="text"
            value={title}
            onChange={this.inputChangeHandler.bind(this)}
            maxLength="22"
          />
        </TitleSectionWrapper>
        <SectionWrapper>
          <SectionTitle>Temperature</SectionTitle>
          <Options>
            <span>
              <OptionInput
                type="radio"
                value="celsius"
                name="tempChooser"
                checked={showCelsius}
                onChange={this.tempRadioChangeHandler.bind(this)}
              />
              <OptionInputLabel>&#8451;</OptionInputLabel>
            </span>
            <span>
              <OptionInput
                type="radio"
                value="fahrenheit"
                name="tempChooser"
                checked={!showCelsius}
                onChange={this.tempRadioChangeHandler.bind(this)}
              />
              <OptionInputLabel>&#8457;</OptionInputLabel>
            </span>
          </Options>
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>Wind</SectionTitle>
          <Options>
            <span>
              <OptionInput
                type="radio"
                value="on"
                name="windChooser"
                checked={showWind}
                onChange={this.windRadioChangeHandler.bind(this)}
              />
              <OptionInputLabel>On</OptionInputLabel>
            </span>
            <span>
              <OptionInput
                type="radio"
                value="off"
                name="windChooser"
                checked={!showWind}
                onChange={this.windRadioChangeHandler.bind(this)}
              />
              <OptionInputLabel>Off</OptionInputLabel>
            </span>
          </Options>
        </SectionWrapper>
      </WidgetEditorWrapper>
    );
  }
}

WidgetEditor.propTypes = {
  updateTitle: PropTypes.func,
  updateShowCelsius: PropTypes.func,
  title: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (title) => dispatch(updateTitle(title)),
  updateShowCelsius: (showCelsius) => dispatch(updateShowCelsius(showCelsius)),
  updateShowWind: (showWind) => dispatch(updateShowWind(showWind)),
});

const mapStateToProps = (state, ownProps) => ({
  title: selectTitle(state),
  showCelsius: selectShowCelsius(state),
  showWind: selectShowWind(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetEditor);
