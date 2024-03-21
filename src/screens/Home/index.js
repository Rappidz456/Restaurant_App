//import liraries
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { food } from '../../data/Data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Image source={require('../../assets/images/Icon.png')} />
                <Text style={styles.headerText}>Hello! John Doe</Text>
                <View style={styles.headerIcon}>
                    <Pressable onPress={() => navigation.navigate('Notification')}>
                        <Image source={require('../../assets/images/Bell.png')} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder='Search here' style={styles.inputText} placeholderTextColor={'#9C9C9C'} />
            </View>
            <View style={styles.eatView}>
                <Text style={styles.eatText}>What do you want to eat?</Text>
            </View>
            <ScrollView horizontal={true} style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonView}>
                    {food.map((item, index) => {
                        return (

                            <TouchableOpacity key={index} >
                                <LinearGradient colors={['#F9A11B', '#F96B1B']} angle={180} useAngle={true} style={styles.buttonTouch}>
                                    <Text style={styles.buttonText}>{item.name}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
            <View style={styles.imageView}>
                <Image source={require('../../assets/images/FoodPic.png')} style={styles.imageSize} />
            </View>
            <View style={styles.foodNameView}>
                <Text style={styles.foodText}>ABC Pizzeria</Text>
                <Text style={styles.foodDetails}>Jalan ABC no 1, Kelapa Gading, Jakarta</Text>
                <Text style={styles.foodDetails}>081234567890</Text>
            </View>
            <View style={styles.ratingView}>
                <Text style={styles.ratingText}>5.0</Text>
                <Ionicons name={'star'} size={30} color={'#F96B1B'} />
            </View>
            <View style={styles.imageView2}>
                <Image source={require('../../assets/images/FoodPic2.png')} style={styles.imageSize2} />
            </View>
        </View>
    );
};



export default Home;
