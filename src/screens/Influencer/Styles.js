import { StyleSheet, Dimensions } from "react-native"

import { verticalScale, horizontalScale } from '../../utils/ScaleSize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    itemSeparator: {
        height: 1,
        top: verticalScale(80),
        width: '100%',
        borderWidth: 0.1,
        backgroundColor: '#C9C9C9',
      },
    inputText: {
        width: width / 1.15,
        borderWidth: 0.5,
        borderColor: '#F1F1F1',
        height: height / 18,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        paddingLeft: horizontalScale(20),
        fontSize: 15,
        color: '#9C9C9C',
        fontWeight: '400',
        letterSpacing: 0.7,
    },
    inputView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(100),
    },
    btnView: {
        alignItems: 'center',
        marginTop: verticalScale(35)
    },
    btnStyle: {
        height: 40,
        width: verticalScale(353),
        backgroundColor: '#F96B1B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: '700',
        letterSpacing: 0.3,
        fontSize: 15,
    },
    viewText: {
        marginTop: verticalScale(40),
        marginLeft: horizontalScale(20)
    },
    text: {
        color: '#4B4B4B',
        fontSize: 23,
        fontWeight: 'bold',
        letterSpacing: 0.4
    },
    imageView: {
        marginTop: verticalScale(25)
    },
    account: {
        marginTop: verticalScale(5),
        marginLeft: horizontalScale(20)
    },
    texts: {
        color: '#484848',
        fontSize: 18,
        fontWeight: '700'
    },
    reviewTexts: {
        color: '#484848',
        fontSize: 12,
        fontWeight: '400'
    }
})
