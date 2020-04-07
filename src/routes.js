import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Categories from '~/pages/Categories/Categories'
import Question from '~/pages/Question/Question'
import Result from '~/pages/Result/Result'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Categories: {
        screen: Categories,
        navigationOptions: () => ({
          title: 'Dev Mobile',
        }),
      },
      Question: {
        screen: Question,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.category.name}`,
          headerLeft: () => null,
          gestureEnabled: false,
        }),
      },
      Result: {
        screen: Result,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.category.name}`,
          headerLeft: () => null,
          gestureEnabled: false,
        }),
      },
    },
    {
      initialRouteName: 'Categories',
    }
  )
)

export default Routes
