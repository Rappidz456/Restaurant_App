import { StyleSheet } from "react-native"
import { verticalScale, horizontalScale } from "../../utils/ScaleSize"

export const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    itemSeparator: {
      height: 1,
      top: verticalScale(80),
      width: '100%',
      borderWidth: 0.1,
      backgroundColor: '#C9C9C9',
    },
    imageView: {
      marginTop: verticalScale(103)
    },
    inputView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(30),
      gap: 20
    },
    TextInput1: {
      paddingLeft: horizontalScale(25),
      borderWidth: 1,
      borderColor: '#C9C9C9',
      height: 130,
      width: horizontalScale(353),
      borderRadius: 10
    },
    TextInput: {
      paddingLeft: horizontalScale(25),
      borderWidth: 1,
      borderColor: '#C9C9C9',
      height: 40,
      width: horizontalScale(353),
      borderRadius: 10
    },
    labelStyle: {
      marginLeft: verticalScale(4),
      color: '#484848',
      fontSize: 15,
      fontWeight: '600',
      letterSpacing: 0.3
    },
    btnView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      bottom: verticalScale(20),
    },
    btnStyle: {
      width: horizontalScale(353),
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    btnText: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 16,
      letterSpacing: 0.5
    }
  })