import React from 'react';
import SplashScreen from './Src/Page/SplashScreen';
import SignIn from './Src/Page/SignIn';
import SignUp from './Src/Page/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './Src/Page/HomePage';
import AddTransaction from './Src/Page/AddTransaction';
import './Src/Config/Firebase';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddTransaction"
            component={AddTransaction}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
