const selectIsDataLoading = (state) => state.getIn(['widget', 'isDataLoading']);
const selectLocation = (state) => state.getIn(['widget', 'locationData']);
const selectWeatherData = (state) => state.getIn(['widget', 'weatherData']);
const selectShowCelsius = (state) => state.getIn(['widget', 'showCelsius']);
const selectShowWind = (state) => state.getIn(['widget', 'showWind']);
const selectTitle = (state) => state.getIn(['widget', 'title']);

export {
  selectLocation,
  selectWeatherData,
  selectIsDataLoading,
  selectShowCelsius,
  selectShowWind,
  selectTitle,
};
