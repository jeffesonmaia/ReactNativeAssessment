import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SamplePage from '~/pages/SamplePage/SamplePage'

const Routes = createAppContainer(
  createStackNavigator(
    {
      SamplePage,
    },
    {
      initialRouteName: 'SamplePage',
    }
  )
)

export default Routes
