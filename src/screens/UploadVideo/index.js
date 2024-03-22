import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { UploadVideo } from '../../data/Data';
import { style } from './Style';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Upload = () => {
  const Separator = () => <View style={style.itemSeparator} />;
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View>
        <Separator />
      </View>
      <View style={style.imageView}>
        <Image source={require('../../assets/images/video.png')} />
      </View>
      <KeyboardAwareScrollView>
        <View style={style.inputView}>
          <View style={{ gap: 20 }}>
            {UploadVideo.map((item, index) => {
              return (
                <View key={index} style={{ gap: 10 }}>
                  <Text style={style.labelStyle}>{item.label}</Text>
                  {item.id <= 2 && (
                    <TextInput placeholder={item.placeholder} style={style.TextInput} />
                  )}
                  {item.id === 3 && (
                    <TextInput placeholder={item.placeholder} style={style.TextInput1} />
                  )}
                </View>
              )
            })}
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={style.btnView}>
        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
          <LinearGradient colors={['#F9A11B', '#F96B1B']} angle={180} useAngle={true} style={style.btnStyle}>
            <Text style={style.btnText}>Upload Data</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Upload