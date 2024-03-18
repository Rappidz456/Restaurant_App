import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale } from "../../utils/ScaleSize";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    profileView: {
      marginTop: verticalScale(20),
      marginLeft: horizontalScale(20),
    },
    profileText: {
      color: '#4B4B4B',
      fontWeight: '700',
      fontSize: 32,
      letterSpacing: 0.3,
    },
    imageView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(5),
      gap: 15,
    },
    imageText: {
      color: '#484848',
      fontWeight: '600',
      fontSize: 20,
      letterSpacing: 0.3,
    },
    textView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: horizontalScale(10),
    },
    userText: {
      color: '#F96B1B',
      fontWeight: '700',
      fontSize: 12,
      letterSpacing: 0.3,
    },
    details: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: verticalScale(10),
      gap: 5,
    },
    detailsText: {
      color: '#484848',
      fontWeight: '400',
      fontSize: 12,
      letterSpacing: 0.3,
    },
    itemSeparator: {
      height: 1,
      marginTop: verticalScale(12),
      width: '100%',
      backgroundColor: '#C9C9C9',
    },
    itemContainer:{
      marginTop: verticalScale(20),
      padding: horizontalScale(20),
      backgroundColor: '#FFFFFF',
      borderColor: '#C9C9C9',
      borderWidth: 1,
      width: '80%',
      height: 65,
      alignSelf: 'center',
      borderRadius: 10
  },
  itemText: {
      paddingLeft: horizontalScale(20),
      color: '#484848',
      fontSize: 16,
      fontWeight: '600',
  }
  });

  export default styles