import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
      const logo = setTimeout(() => {
        navigation.navigate('OnBoarding')
      }, 3000)
    
      return () => {
        clearInterval(logo)
      }
    }, [navigation])
    
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/FoodLogo.png')}/>
        </View>
    );
};

export default Splash;
