import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { style } from './Styles';

const Influencer = () => {
    const Separator = () => <View style={style.itemSeparator} />;

    return (
        <View style={style.container}>
            <View>
                <Separator/>
            </View>
            <View style={style.inputView}>
                <TextInput placeholder='Search here' style={style.inputText} placeholderTextColor={'#9C9C9C'} />
            </View>
            <View style={style.btnView}>
                <TouchableOpacity style={style.btnStyle}>
                    <Text style={style.btnText}>Upload new video</Text>
                </TouchableOpacity>
            </View>
            <View style = {style.viewText}>
                <Text style = {style.text}>Your Videos</Text>
            </View>
            <View style = {style.imageView}>
                <Image source={require('../../assets/images/video.png')}/>
            </View>
        </View>
    )
}


export default Influencer
