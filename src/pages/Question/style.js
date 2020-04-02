import styled from 'styled-components/native'

export const PageContainer = styled.View`
  align-items: center;
  background: #E5E5E5;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const AnswerList = styled.FlatList`
  flex: 1;
  overflow: visible;
  padding: 10px;
  width: 100%;
`

export const AnswerButton = styled.TouchableOpacity`
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E4E4E6;
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  font-size: 14px;
  margin: 10px;
  padding: 20px;
`

export const AnswerButtonSelected = styled(AnswerButton)`
  border: 2px solid #4D8AF0;
`

export const BottonContainer = styled.View`
  z-index: 1000;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #FFFFFF;
`
export const ButtonIcon = styled.Image`
  height: 30px;
  width: 30px;
`

export const ButtonSubmit = styled.TouchableOpacity`
  align-items: center;
  background: #4D8AF0;
  border-radius: 14px;
  height: 50px;
  justify-content: center;
  width: 240px;
`
export const ButtonLabel = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
`

export const Header = styled.Text`
  align-items: flex-start;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  padding: 20px;
  width: 100%;
`

export const QuestionText = styled.Text`
  width: 100%;
  font-size: 16px;
  padding: 20px;
`

export const LoaderContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const ModalContent = styled.View`
  align-items: center;
  background: #FFFFFF;
  border: 3px solid #32CB82;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
  height: 164px;
  justify-content: center;
  width: 210px;
`

export const ModalContentError = styled(ModalContent)`
  border: 3px solid #FF4F4F;
`

export const ModalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`
export const ModalIcon = styled.Image`
  height: 50px;
  width: 50px;
`
