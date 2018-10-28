import styled from 'styled-components';

export const WidgetEditorWrapper = styled.div`
  width: 285px;
  height: 225px;
`;

export const TitleSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #515151;
`;

export const Input = styled.input`
  font-size: 18px;
  color: #999999;
  margin-top: 5px;
  border: 1px solid #CCCCCC;
  padding: 8px;
  border-radius: 5px;
  background-color: #FFFFFF;

  &:focus {
    outline: none;
  }
`;

export const SectionTitle = styled.span`
  color: #515151;
`;

export const SectionWrapper = styled.div`
  margin-top: 15px;
  padding-right: 60px;
`;

export const Options = styled.div`
  margin-top: 10px;
  display: flex;
  padding-right: 80px;
  justify-content: space-between;
`;

export const OptionInput = styled.input`
  padding-right: 100px;
`;

export const OptionInputLabel = styled.span`
  position: absolute;
  padding-left: 10px;
  margin-top:2px;
  color: #515151;
`;
