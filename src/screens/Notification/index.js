import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Notify } from '../../data/Data'
import { horizontalScale, verticalScale } from '../../utils/ScaleSize'

const Notfication = () => {
  const Line = () => <View style = {style.itemSeparator}/>
  return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Line/>
      </View>
    <View style = {{marginVertical: verticalScale(100), marginLeft: horizontalScale(15)}}>
      {Notify.map((item, index) => {
        return(
          <View key={index} style = {{flexDirection: 'row', alignItems: 'center', padding: verticalScale(15)}}>
            <Image source={item.image} style = {{width: 40, height: 40}}/>
             <Text style = {{
              color: '#828282', fontWeight: '400', fontSize: 14, 
              marginLeft: horizontalScale(20)}}>{item.text}</Text>
          </View>
        )
      })}
      <Text></Text>
    </View>
    </View>
  )
}

const style = StyleSheet.create({
  itemSeparator: {
    height: 1,
    top: verticalScale(80),
    width: '100%',
    backgroundColor: '#C9C9C9',
  },
})

export default Notfication