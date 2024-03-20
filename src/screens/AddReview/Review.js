import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { verticalScale, horizontalScale } from '../../utils/ScaleSize'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const Review = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image source={require('../../assets/images/FoodPic.png')} style={styles.imageStyle} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>How was</Text>
                <Text style={styles.text2}>ABC Pizzeria?</Text>
            </View>
            <View style = {styles.ratingView}>
                <Image source={require('../../assets/images/rating.png')}/>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.labelStyle}>Your Review</Text>
                <TextInput placeholder='Give your best review' style={styles.TextInput1} />
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <LinearGradient colors={['#F9A11B', '#F96B1B']} angle={0} useAngle={true} style = {styles.btnStyle}>
                        <Text style = {styles.btnText}>Upload Review</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageView: {
        marginTop: verticalScale(83)
    },
    imageStyle: {
        width: '100%',
        height: verticalScale(230)
    },
    textView: {
        paddingTop: verticalScale(20),
        alignItems: 'center',
        gap: 8
    },
    text: {
        color: '#4B4B4B',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 0.4
    },
    text2: {
        color: '#484848',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.4
    },
    ratingView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(25),
    },
    inputView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(40),
        gap: 10
    },
    labelStyle: {
        marginLeft: horizontalScale(25),
        alignSelf: 'flex-start',
        color: '#484848',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.8
    },
    TextInput1: {
        paddingLeft: horizontalScale(20),
        paddingBottom: verticalScale(105),
        borderWidth: 1,
        borderColor: '#C9C9C9',
        height: 128,
        width: 350,
        borderRadius: 10
    },
    btnView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: verticalScale(25),
    },
    btnStyle: {
        width: horizontalScale(353),
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    },
})

export default Review