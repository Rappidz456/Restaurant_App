import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import Home from "../../screens/Home/Home";
import RestaurantNearby from "../../screens/RestaurantNearby";
import Profile from "../../screens/Profile";
import { horizontalScale, verticalScale } from "../../utils/ScaleSize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'



const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                left: horizontalScale(41),
                width: 353,
                height: 70,
                bottom: verticalScale(20),
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                ...styles.shadow,
            },
            tabBarItemStyle: {
                marginTop: verticalScale(10)
            },
            tabBarLabel: '',
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <>
                            {focused ? (
                                <View>
                                    <MaterialCommunityIcons name={'home-variant'} size={33} color={'#F96B1B'} />
                                </View>
                            ) : <MaterialCommunityIcons name={'home-variant'} size={33} />
                            }

                        </>
                    )
                }
            }} />
            <Tab.Screen name="Restaurant" component={RestaurantNearby} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <>
                            {focused ? (
                                <View>
                                    <Ionicons name={'location-sharp'} size={33} color={'#F96B1B'} />
                                </View>
                            ) : <Ionicons name={'location-sharp'} size={33} />
                            }

                        </>
                    )
                }
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <>
                            {focused ? (
                                <View>
                                    <MaterialCommunityIcons name={'account'} size={33} color={'#F96B1B'} />
                                </View>
                            ) : <MaterialCommunityIcons name={'account'} size={33} />
                            }

                        </>
                    )
                }
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 30,
        elevation: 5
    }
})

export default TabNavigation