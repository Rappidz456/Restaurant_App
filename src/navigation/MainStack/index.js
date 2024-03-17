import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import Boarding from '../../screens/OnBoarding/BoardingScreen';
import TabNavigation from '../BottomStack';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppWrapper;
