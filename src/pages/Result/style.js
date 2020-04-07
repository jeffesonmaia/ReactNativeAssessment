import styled from 'styled-components/native'

export const PageContainer = styled.View`
  align-items: center;
  background: #FFFFFF;
  flex: 1;
`

export const Header = styled.View`
  flex: 4;
  width: 100%;
`

export const CongratulationContainer = styled.View`
  position: absolute;
  right: 15%;
  top: 35%;
`

export const Congratulation = styled.Text`
  font-weight: bold;
  font-size: 35px;
  line-height: 33px;
`

export const SubCongratulation = styled.Text`
  font-size: 20px;
  line-height: 19px;
  letter-spacing: 0.2px;
`

export const CongratulationBackground = styled.ImageBackground`
  width: 100%;
  height: 220px;
`

export const ResultContainer = styled.View`
  flex: 4;
  width: 100%;
  top: -150px;
  justify-content: space-evenly;
`

export const ResultHeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export const ResultHeader = styled.View`
  align-items: center;
  border: 1px solid #343C58;
  border-radius: 5px;
  background: #FFFFFF;
  justify-content: center;
  height: 40px;
  position: absolute;
  width: 80%;
`

export const ResultHeaderText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

export const ResultHeaderDotedLine = styled.View`
  width: 100%;
  border: 2px dashed #343C58;
`

export const ResultCount = styled.View`
  flex-direction: row;
  align-self: center;
  border-radius: 10px;
  height: 65px;
  width: 60%;
  background: #E5E5E5;
`

export const ResultCountItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ResultCountItemText = styled.Text`
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
`

export const ResultCountItemSubText = styled.Text`
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.44px;
`

export const ResultByDifficulty = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const ResultByDifficultyItem = styled.View`
  flex: 1;
  align-items: center;
`

export const BottonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
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
