import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { formData } from '../../data/Data'
import { useNavigation } from '@react-navigation/native';
import { Style } from './Styles';

const EditProfile = () => {
    const navigation = useNavigation();
    const Separator = () => <View style={Style.itemSeparator} />;
    return (
        <View style={Style.container}>
            <View>
                <Separator/>
            </View>
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
                <TouchableOpacity style = {Style.buttonStyle} onPress={() => navigation.navigate('SuccessPopup')}>
                    <Text style = {Style.buttonText}>Update Data</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default EditProfile