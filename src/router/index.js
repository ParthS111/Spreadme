import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authenticated from './authenticated';
import NotAuthenticated from './nonAuthentication';
import Routes from './routes';
import SplashScreen from '../screens/SplashScreen'


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    console.log("hdfjhdsbfhsdbfhksdk");
    return (
        <NavigationContainer>
            <Stack.Navigator >
            <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name={Routes.NotAuthenticated} component={NotAuthenticated} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name={Routes.Authenticated} component={Authenticated} options={{
                    headerShown: false,
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;