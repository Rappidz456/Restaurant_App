import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { style } from './Styles';
import { horizontalScale, verticalScale } from '../../utils/ScaleSize';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Influencer = () => {
    const Separator = () => <View style={style.itemSeparator} />;
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View>
                <Separator />
            </View>
            <View style={style.inputView}>
                <TextInput placeholder='Search here' style={style.inputText} placeholderTextColor={'#9C9C9C'} />
            </View>
            <View style={style.btnView}>
                <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
                    <LinearGradient colors={['#F9A11B', '#F96B1B']} angle={180} useAngle={true} style={style.btnStyle}>
                        <Text style={style.btnText}>Upload new video</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={style.viewText}>
                <Text style={style.text}>Your Videos</Text>
            </View>
            <View style={style.imageView}>
                <Image source={require('../../assets/images/video.png')} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: verticalScale(30) }}>
                <Image source={require('../../assets/images/Account.png')} style={style.account} />
                <View style={{ flexDirection: 'column', marginLeft: horizontalScale(18), gap: 5 }}>
                    <Text style={style.texts}>Tempat Nongkrong Paling Hits!</Text>
                    <Text style={style.reviewTexts}>Reviewer A</Text>
                </View>
            </View>
        </View>
    )
}


export default Influencer
