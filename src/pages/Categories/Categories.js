import React, { useEffect } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from './actions'
import {
  Header,
  CategoryList,
  LoaderContainer,
  CategoryButton,
  CategoryButtonLabel,
  PageContainer
} from './style'

const mapStateToProps = ({ categories }) => ({ categories })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const Categories = ({
  categories,
  getCategories,
  navigation,
}) => {
  const handleError = error => {
    Alert.alert(error)
  }

  useEffect(() => {
    getCategories({ handleError })
  }, [])

  if (categories.loading) {
    return (
      <LoaderContainer>
        <ActivityIndicator
          size="large"
        />
      </LoaderContainer>
    )
  }

  return (
    <PageContainer>
      <Header>Categorias</Header>
      <CategoryList
        data={categories.data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <CategoryButton
            onPress={() => navigation.navigate('Question', { category: item })}
          >
            <CategoryButtonLabel>
              {item.name}
            </CategoryButtonLabel>
          </CategoryButton>
        )}
      />
    </PageContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
