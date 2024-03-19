import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { imageData } from '../../data/Data';
import { useNavigation } from '@react-navigation/native';
import { style } from './Styles';

const Verification = () => {
  const Separator = () => <View style={style.itemSeparator} />;
  const navigation  = useNavigation();

  return (
    <View style={style.container}>
      <View>
        <Separator />
      </View>
      <View style={{ marginTop: verticalScale(120), gap: 20 }}>
        {imageData.map((item, index) => {
          return (
              <View style={style.imageContainer} key={index}>
                <Image source={item.image} />
                <Text style={style.containerText}>{item.figure}</Text>
              </View>
          )
        })}
      </View>
      <View style={style.btnView}>
        <TouchableOpacity style = {style.btnStyle} onPress={() => navigation.navigate('Influencer')}>
          <Text style = {style.btnText}>Upload Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



export default Verification