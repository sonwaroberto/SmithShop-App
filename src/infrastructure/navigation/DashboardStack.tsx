import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="HomeScreen"
        options={{gestureEnabled: false, headerShown: false}}
        component={HomeScreen}
      />
      {/* <Stack.Screen
        name="Notification"
        options={{headerShown: false}}
        component={NotificationScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default DashboardStack;
