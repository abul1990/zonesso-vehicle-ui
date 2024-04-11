import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import HomeSvg from './src/components/svg/HomeSvg';
import BellSvg from './src/components/svg/BellSvg';
import PostSvg from './src/components/svg/PostSvg';
import ChatSvg from './src/components/svg/ChatSvg';
import UserSvg from './src/components/svg/UserSvg';
import ChatScreen from './src/screens/ChatScreen';
import PostScreen from './src/screens/PostScreen';
import UserScreen from './src/screens/UserScreen';
import MotorsListingScreen from './src/screens/MotorListingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FilterScreen from './src/screens/FilterScreen';
import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeStack">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MotorListing"
        component={MotorsListingScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <HomeStack.Screen name="Login" component={LoginScreen} /> */}
    </HomeStack.Navigator>
  );
};

const MotorStack = createStackNavigator();

const MotorsStackNavigator = () => {
  return (
    <MotorStack.Navigator initialRouteName="MotorStack">
      <MotorStack.Screen
        name="MotorsListing"
        component={MotorsListingScreen}
        options={{
          headerShown: false,
        }}
      />
      <MotorStack.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          headerShown: false,
        }}
      />
    </MotorStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home' || route.name === 'MotorsListing') {
            iconName = 'home';
          } else if (route.name === 'Activity') {
            iconName = 'activity';
          } else if (route.name === 'Post') {
            iconName = 'post';
          } else if (route.name === 'Chat') {
            iconName = 'chat';
          } else if (route.name === 'User') {
            iconName = 'user';
          }

          switch (route.name) {
            case 'Home':
            case 'MotorsListing':
              return <HomeSvg color={color} />;
            case 'Activity':
              return <BellSvg color={color} />;
            case 'Post':
              return <PostSvg color={color} />;
            case 'Chat':
              return <ChatSvg color={color} />;
            case 'User':
              return <UserSvg color={color} />;
            default:
              return;
          }
        },
        tabBarActiveTintColor: '#F04438',
        tabBarInactiveTintColor: '#33363F',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Activity" component={CategoryScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
