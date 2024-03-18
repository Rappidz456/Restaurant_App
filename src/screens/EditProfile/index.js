import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../utils/ScaleSize'
import { formData } from '../../data/Data'

const EditProfile = () => {
    return (
        <View style={Style.container}>
            <View style={Style.imageView}>
                <Image source={require('../../assets/images/Image.png')} />
            </View>
            <View style={Style.inputView}>
                <View style = {{gap: 20}}>
                    {formData.map((item, index) => {
                        return (
                            <View key={index} style = {{gap: 10}}>
                                <Text style = {Style.labelStyle}>{item.label}</Text>
                                <TextInput placeholder={item.placeholder} style = {Style.TextInput}/>
                            </View>
                        )
                    })}
                </View>
            </View>
            <View style = {Style.updateButton}>
                <TouchableOpacity style = {Style.buttonStyle}>
                    <Text style = {Style.buttonText}>Update Data</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    imageView: {
        marginTop: verticalScale(100),
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(30),
        gap: 20
    },
    TextInput: {
        paddingLeft: horizontalScale(25),
        borderWidth: 1,
        borderColor: '#C9C9C9',
        height: 40,
        width: 350,
        borderRadius: 10
    },
    labelStyle: {
        color: '#484848',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.3
    },
    updateButton: {
        alignItems: 'center',
        marginTop: verticalScale(140)
    },
    buttonStyle: {
        width: horizontalScale(350),
        height: verticalScale(45),
        borderRadius: 10,
        backgroundColor: '#F96B1B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default EditProfile