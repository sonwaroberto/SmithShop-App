import React, {FC} from 'react';
import LoginScreen from '../../screens/auth/login.screen';
import RegisterScreen from '../../screens/auth/register.screen';
import SplashScreen from '../../screens/splash/splashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../../screens/onboardingscreen/onboardingScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import TabNavigator from './TabNavigator';
// import DashboardScreen from '../screens/dashboard/DashboardScreen';
// import {ProductScreen} from '../screens/product/product.screen';

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Product" component={ProductScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
