import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../src/pages/Splash';
import Technology from '../src/pages/Technology';
import Science from '../src/pages/Science';
import Description from '../src/pages/Description';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      Init: createSwitchNavigator({
        Splash,
      }),

      Pages: createStackNavigator(
        {
          Tabs: {
            screen: createBottomTabNavigator(
              {
                Technology,
                Science,
              },
              {
                tabBarOptions: {
                  keyboardHidesTabBar: true,
                  activeTintColor: '#FFF',
                  inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                  style: {
                    backgroundColor: '#4a148c',
                    paddingTop: 5,
                    paddingBottom: 10,
                  },
                },
              },
            ),
          },
          Description,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerBackTitleStyle: {
              color: '#FFF',
            },
            headerStyle: {
              backgroundColor: '#4a148c',
            },
          },
        },
      ),
    }),
  );
