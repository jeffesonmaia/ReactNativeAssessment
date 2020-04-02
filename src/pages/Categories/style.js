import styled from 'styled-components/native'

export const CategoryButton = styled.TouchableOpacity`
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  justify-content: space-between;
`

export const CategoryButtonLabel = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`

export const CategoryList = styled.FlatList`
  flex: 1;
  padding: 10px;
  width: 100%;
`

export const Header = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
  width: 100%;
`

export const LoaderContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const PageContainer = styled.View`
  align-items: center;
  background: #E5E5E5;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`
