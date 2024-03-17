import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from '../../utils/ScaleSize';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerStyle: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginHorizontal: horizontalScale(25), 
        top: verticalScale(20)
    },
    headerText: {
        marginHorizontal: horizontalScale(17), 
        color: '#484848', 
        fontSize: 20, 
        fontWeight: '700' 
    },
    headerIcon: {
        flexDirection: 'row-reverse', 
        flexGrow: 1, 
    },
    inputView: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: verticalScale(40),
    },
    inputText: {
        width: 380,
        borderWidth: 0.5,
        borderColor: '#F1F1F1',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        paddingLeft: horizontalScale(75),
        fontSize: 15,
        fontWeight: '400',
        letterSpacing: 0.7,
    },
    eatView: {
        marginTop: verticalScale(20), 
        marginHorizontal: horizontalScale(25)
    },
    eatText: {
        color: '#4B4B4B', 
        fontWeight: '700', 
        fontSize: 22,
        letterSpacing: 0.2
    },
    buttonView: {
        flexDirection: 'row', 
        marginHorizontal: horizontalScale(25), 
        marginTop: verticalScale(25), 
        gap: 20
    },
    buttonTouch: {
        width: 98, 
        height: 33,
        borderWidth: 0.5, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#F96B1B', 
        borderColor: '#F96B1B', 
        borderRadius: 12
    },
    buttonText: {
        color: '#FFFFFF', 
        fontWeight: '700',
        fontSize: 14
    },
    imageView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: verticalScale(30)
    },
    imageSize: {
        width: 375, 
        borderRadius: 10
    },
    foodNameView: {
        marginLeft: horizontalScale(25), 
        marginTop: verticalScale(20), 
        gap: 8
    },
    foodText: {
        color: '#484848', 
        fontWeight: '600',
        fontSize: 20, 
        letterSpacing: 0.5,
    },
    ratingView : {
        flexDirection: 'row-reverse', 
        bottom: verticalScale(55), 
        right: horizontalScale(25), 
        gap: 10
    },
    ratingText: {
        color: '#484848', 
        fontWeight: '700', 
        fontSize: 20, 
        lineHeight: 32
    },
    imageView2: {
        alignItems: 'center', 
        justifyContent: 'center', 
        bottom: verticalScale(8)
    },
    imageSize2: {
        width: 375, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    }
});