import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const NotAuthenticated = () => {
    console.log("jdhdhdh");
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.Login} component={Login} />
        </Stack.Navigator>
    );
};

export default NotAuthenticated;