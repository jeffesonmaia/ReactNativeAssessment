import React, { useEffect } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from './actions'
import PageContainer from '~/components/PageContainer/PageContainer'
import {
  Header, CategoryList, LoaderContainer, CategoryButton, CategoryButtonLabel
} from './style'

const mapStateToProps = ({ categories }) => ({ categories })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const Categories = ({
  categories,
  getCategories,
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
        keyExtractor={index => String(index)}
        renderItem={({ item }) => (
          <CategoryButton>
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
