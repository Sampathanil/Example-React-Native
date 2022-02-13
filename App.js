import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/Home';
import ImageScreen from './src/screens/Image';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import TabViewScreen from './src/screens/TabView';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#0096FF',
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#0096FF',
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#0096FF',
          },
        }}
      />
      <Stack.Screen
        name="TabView"
        component={TabViewScreen}
        options={{
          title: 'TabView',
          headerStyle: {
            backgroundColor: '#0096FF',
          },
        }}
      />
      <Stack.Screen
        name="Image"
        component={ImageScreen}
        options={{
          title: 'Image',
          headerStyle: {
            backgroundColor: '#0096FF',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'white',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
