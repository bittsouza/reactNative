import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';

const Routes = createAppContainer(
                createStackNavigator({
                  Main,
                }, {
                    navigationOptions: {
                      headerStyle: {
                        backgroundColor: "#DA552F"
                      },
                      headerTintColor: "#000"
                    }
                }),
              )
export default Routes;