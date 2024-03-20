import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale } from '../../utils/ScaleSize';

export const style = StyleSheet.create({
    container: {
      flex: 1
    },
    itemSeparator: {
      height: 1,
      top: verticalScale(80),
      width: '100%',
      borderWidth: 0.1,
      backgroundColor: '#C9C9C9',
    },
    imageContainer: {
      width: verticalScale(400),
      height: horizontalScale(200),
      borderWidth: 1,
      alignSelf: 'center',
      borderRadius: 12,
      alignItems: 'center',
      paddingBottom: verticalScale(30),
      justifyContent: 'center',
      borderColor: '#F9A11B'
    },
    containerText: {
      top: verticalScale(30),
      color: '#484848',
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 0.3
    },
    btnView: {
      alignItems: 'center',
      marginTop: verticalScale(230),
    },
    btnStyle: {
      width: verticalScale(353),
      borderRadius: 10,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F96B1B'
    },
    btnText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600'
    }
  })