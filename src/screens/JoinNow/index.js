import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { JoinData } from '../../data/Data'
import { useNavigation } from '@react-navigation/native'
import { style } from './styles'

const Join = () => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.textView}>
                <Text style={style.text}>Join KulinerKu Influencer today!</Text>
            </View>
            <View style={style.imageView}>
                <Image source={require('../../assets/images/JoinPic.png')} />
            </View>
            <View style={style.mainList}>
                {JoinData.map((item, index) => {
                    return (
                        <View style={style.listView} key={index}>
                            <Image source={item.image} />
                            <Text style={style.listText}>{item.text}</Text>
                        </View>
                    )
                })}
            </View>
            <View style = {style.btnView}>
                <TouchableOpacity style = {style.btnStyle} onPress={() => navigation.navigate('Verification')}>
                    <Text style = {style.btnText}>Join Now!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Join