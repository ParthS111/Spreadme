import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Color } from '../utils/Color'
import Home from '../screens/Home';
import Routes from './routes';
import Profile from '../screens/Profile';
import Login from '../screens/Login'
import Lead from '../screens/Lead'
import Filter from '../screens/Filter'

//Bottom Tab Navagator
// const Tab = createBottomTabNavigator();
// const BottomTab = () => {
//     return (
//         <Tab.Navigator >

//             <Tab.Screen name={Routes.Home} component={Home} options={{ />
//             <Tab.Screen name={Routes.Profile} component={Profile} options={{ headerShown: false }} />
//         </Tab.Navigator>
//     );
// }


// If you want to use Material tab Navigation




const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();


const MaterialBottomTab = () => {
    console.log("jdhdhdhdsd");
    return (
        <Tab.Navigator
            initialRouteName={Routes.Home}
            activeColor={Color.WHITE}
            inactiveColor={Color.DARK_GRAY}
            barStyle={{ backgroundColor: Color.BLACK }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    // tabBarIcon: ({ color }) => (
                    //     <Ionicon name="home" color={color} size={26} />
                    // ),
                }}
            />

            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{

                    tabBarLabel: 'Profile',
                    // tabBarIcon: ({ color }) => (
                    //     <Ionicon name="ios-person-add-sharp" color={color} size={26} />
                    // ),
                }}
            />

        </Tab.Navigator>
    );
}


const Authenticated = () => {
    console.log("jdhdhdhdsdasdasdsa");
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name={Routes.Profile} component={Profile} options={{
                headerShown: false
            }} />
            
             <Stack.Screen name={Routes.Login} component={Login} options={{
                headerShown: false
            }} />
             <Stack.Screen name={Routes.Lead} component={Lead} options={{
                headerShown: false
            }} />
             <Stack.Screen name={Routes.Filter} component={Filter} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
};


//Authenticated Screen Navigation

// const Authenticated = () => {
//     console.log("jdhdhdhdsadsdasdad");
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='MaterialBottomTab' component={ProfileStack} options={{
//                 headerShown: false
//             }} />
//         </Stack.Navigator>
//     );
// };


export default Authenticated;