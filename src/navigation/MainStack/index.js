import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import Boarding from '../../screens/OnBoarding';
import TabNavigation from '../BottomStack';
import Notfication from '../../screens/Notification';
import EditProfile from '../../screens/EditProfile';
import Popup from '../../screens/SuccessPopup/Popup';
import Join from '../../screens/JoinNow';
import { Image, Pressable, View } from 'react-native';
import Verification from '../../screens/KTP Verification';
import Influencer from '../../screens/Influencer';

const AppWrapper = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} initialRouteName='Influencer'>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='OnBoarding' component={Boarding} />
                <Stack.Screen name='BottomStack' component={TabNavigation} />
                <Stack.Screen name='Notification' component={Notfication} options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#484848'
                    },
                }} />
                <Stack.Screen name='EditProfile' component={EditProfile}
                    options={{
                        headerTitle: 'Edit Profile',
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }} />
                <Stack.Screen name='SuccessPopup' component={Popup} />
                <Stack.Screen name='Join' component={Join} options={({ navigation }) => ({
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => {
                        return (
                            <View>
                                <Pressable onPress={() => navigation.navigate('EditProfile')}>
                                    <Image source={require('../../assets/images/arrow.png')} />
                                </Pressable>
                            </View>
                        )
                    }
                })} />
                <Stack.Screen name='Verification' component={Verification} options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: 'KTP Verification',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#484848',
                        fontSize: 20,
                        fontWeight: '700'
                    },
                }}/>
                <Stack.Screen name='Influencer' component={Influencer} options={{
                    headerTitle: 'KulinerKu Influencer',
                    headerShown: true,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#484848',
                        fontSize: 20,
                        fontWeight: '700',
                    },
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default AppWrapper;
