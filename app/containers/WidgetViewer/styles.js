import styled from 'styled-components';

export const WidgetViewerWrapper = styled.div`
  width: 285px;
  height: 225px;
  background-color: #FFFFFF;
  border-radius: 5px;
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0);
`;

export const ViewerTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 35px 30px 0px;
  color: #252525;
`;

export const ViewerDetailsWrapper = styled.div`
  margin: 13px 16px 0px;
  display: flex;
`;

export const ViewerWeatherIcon = styled.img`
  margin-top: 10px;
  width: 140px;
  height: 130px;
`;

export const ViewerWeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 5px;
`;

export const City = styled.span`
  color: #515151;
`;

export const Temp = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #515151;
  line-height: 1.4;
`;

export const Wind = styled.span`
  font-size: 12px;
  color: #515151;
`;
