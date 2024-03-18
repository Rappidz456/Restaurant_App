import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import Boarding from '../../screens/OnBoarding/BoardingScreen';
import TabNavigation from '../BottomStack';
import Notfication from '../../screens/Notification';
import EditProfile from '../../screens/EditProfile';

const AppWrapper = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown : false,
            }}>
                <Stack.Screen name='Splash' component={Splash}/>
                <Stack.Screen name='OnBoarding' component={Boarding}/>
                <Stack.Screen name='BottomStack' component={TabNavigation}/>
                <Stack.Screen name='Notification' component={Notfication} options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                }}/>
                <Stack.Screen name= 'EditProfile' component={EditProfile} 
                options={{
                    headerTitle: 'Edit Profile',
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppWrapper;
