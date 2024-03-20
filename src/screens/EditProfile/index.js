import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { formData } from '../../data/Data'
import { useNavigation } from '@react-navigation/native';
import { Style } from './Styles';
import LinearGradient from 'react-native-linear-gradient';

const EditProfile = () => {
    const navigation = useNavigation();
    const Separator = () => <View style={Style.itemSeparator} />;
    return (
        <View style={Style.container}>
            <View>
                <Separator />
            </View>
            <View style={Style.imageView}>
                <Image source={require('../../assets/images/Image.png')} />
            </View>
            <View style={Style.inputView}>
                <View style={{ gap: 20 }}>
                    {formData.map((item, index) => {
                        return (
                            <View key={index} style={{ gap: 10 }}>
                                {item.id <= 3 && (
                                    <>
                                        <Text style={Style.labelStyle}>{item.label}</Text>
                                        <TextInput placeholder={item.placeholder} style={Style.TextInput} />
                                    </>
                                )}
                                {item.id === 4 && (
                                    <>
                                        <Text style={Style.labelStyle}>{item.label}</Text>
                                        <TextInput placeholder={item.placeholder} style={Style.TextInput1} />
                                    </>
                                )}
                            </View>
                        )
                    })}
                </View>
            </View>
            <View style={Style.updateButton}>
                <TouchableOpacity onPress={() => navigation.navigate('SuccessPopup')}>
                    <LinearGradient colors={['#F9A11B', '#F96B1B']} angle={0} useAngle={true} style={Style.buttonStyle} >
                        <Text style={Style.buttonText}>Update Data</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default EditProfile