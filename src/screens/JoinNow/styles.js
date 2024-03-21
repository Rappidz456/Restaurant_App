import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale } from '../../utils/ScaleSize'

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    textView: {
        marginTop: verticalScale(150),
        alignItems: 'center',
    },
    text: {
        color: '#4B4B4B',
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 0.3
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(30)
    },
    mainList: {
        marginVertical: verticalScale(10)
    },
    listView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: horizontalScale(25),
        padding: verticalScale(18),
    },
    listText: {
        color: '#484848',
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.4,
        marginLeft: verticalScale(17)
    },
    btnView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: verticalScale(20)
    },
    btnStyle: {
        width: verticalScale(353),
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F96B1B',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F96B1B'
    },
    btnText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF'
    }
})