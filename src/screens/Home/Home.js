//import liraries
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import food from '../../data/FoodItems';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Image source={require('../../assets/images/Icon.png')} />
                <Text style={styles.headerText}>Hello! John Doe</Text>
                <View style={styles.headerIcon}>
                    <Image source={require('../../assets/images/Bell.png')} />
                </View>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder='Search here' style={styles.inputText} placeholderTextColor={'#9C9C9C'} />
            </View>
            <View style={styles.eatView}>
                <Text style={styles.eatText}>What do you want to eat?</Text>
            </View>
            <View style={styles.buttonView}>
                {food.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.buttonTouch}>
                            <Text style={styles.buttonText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={styles.imageView}>
                <Image source={require('../../assets/images/FoodPic.png')} style={styles.imageSize} />
            </View>
            <View style={styles.foodNameView}>
                <Text style={styles.foodText}>ABC Pizzeria</Text>
                <Text style={{ color: '#484848', fontSize: 12, fontWeight: '400' }}>Jalan ABC no 1, Kelapa Gading, Jakarta</Text>
                <Text style={{ color: '#484848', fontSize: 12, fontWeight: '400' }}>081234567890</Text>
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
