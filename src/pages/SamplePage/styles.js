import styled from 'styled-components/native'

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`
export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  }
})``

export const Welcome = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
`

export const WelcomeIntro = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: #222
`
