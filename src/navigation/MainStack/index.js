import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import Boarding from '../../screens/OnBoarding/BoardingScreen';

const AppWrapper = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown : false,
            }}>
                <Stack.Screen name='Splash' component={Splash}/>
                <Stack.Screen name='OnBoarding' component={Boarding}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppWrapper;
