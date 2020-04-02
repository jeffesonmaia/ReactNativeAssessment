import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Categories from '~/pages/Categories/Categories'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Categories: {
        screen: Categories,
        navigationOptions: () => ({
          title: 'Dev Mobile',
        }),
      },
    },
    {
      initialRouteName: 'Categories',
    }
  )
)

export default Routes
