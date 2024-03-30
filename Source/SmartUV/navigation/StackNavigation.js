import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import SettingScreen from '../screens/SettingScreen';
import { Image } from 'react-native';
import {COLORS} from '../assets';
import { ICONS } from '../assets';
import { SCREENS } from '../assets';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME}>
      <Stack.Screen
        name={SCREENS.HOME}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.LOCATION}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.SETTING}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={HomeScreen}>      
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarItemStyle: {
            marginBottom: 5,
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.HOME}
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.ORANGE : COLORS.BLACK,
              }}
            />
          ),
          tabBarStyle: {
            height: 50,
          },
          tabBarActiveTintColor: COLORS.ORANGE,
          tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
      <Tab.Screen
        name={SCREENS.LOCATION}
        component={LocationScreen}
        options={{
          title: 'Location',
          tabBarItemStyle: {
            marginBottom: 5,
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.LOCATION}
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.ORANGE : COLORS.BLACK,
              }}
            />
          ),
          tabBarStyle: {
            height: 50,
          },
          tabBarActiveTintColor: COLORS.ORANGE,
          tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
      <Tab.Screen
        name={SCREENS.SETTING}
        component={SettingScreen}
        options={{
          title: 'Setting',
          tabBarItemStyle: {
            marginBottom: 5,
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.PROFILE}
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.ORANGE : COLORS.BLACK,
              }}
            />
          ),
          tabBarStyle: {
            height: 50,
          },
          tabBarActiveTintColor: COLORS.ORANGE,
          tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigation;