import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { verticalScale, horizontalScale } from '../../utils/ScaleSize'
import { DetailsData } from '../../data/Data'
import LinearGradient from 'react-native-linear-gradient'

const ReviewDetails = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/images/FoodPic.png')} style={styles.imageStyle} />
            </View>
            <View style = {{position: 'absolute', marginTop: verticalScale(130), gap: 5, marginLeft: horizontalScale(20)}}>
                <Text style = {{fontSize: 18, color: '#FFFFFF', fontWeight: '700'}}>ABC Pizzeria</Text>
                <Text style = {{fontSize: 10, color: '#FFFFFF', fontWeight: '400'}}>Jalan ABC no 1, Kelapa Gading, Jakarta</Text>
                <Text style = {{fontSize: 10, color: '#FFFFFF', fontWeight: '400'}}>081234567890</Text>
                
            </View>
            <ScrollView horizontal={true} style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonView}>
                    {DetailsData.map((item, index) => {
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageStyle: {
        width: '100%',
        height: verticalScale(230)
    },
    buttonView: {
        flexDirection: 'row',
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(25),
        gap: 15
    },
    buttonTouch: {
        width: verticalScale(120),
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F96B1B',
        borderRadius: 12
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 14
    },
})

export default ReviewDetails