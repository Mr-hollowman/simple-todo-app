import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../pages/Signin';
import Dashboard from '../pages/Dashboard'
import { createDrawerNavigator } from '@react-navigation/drawer';
import store from '../redux/store';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()


export default function MyApp() {
   const isSignedIn = useSelector(state=>state.userInfo)
   console.log(isSignedIn, "user info");
  return (
    <NavigationContainer>
        <Drawer.Navigator>
          <>
        {!isSignedIn ? <Drawer.Screen name="Login" component={SignIn} options={{
          headerLeft:()=>null,
        }} /> 
        : <>
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{
          
        }} />
        </>
        }
          </>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}