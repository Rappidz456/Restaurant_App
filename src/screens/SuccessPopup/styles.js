import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale } from '../../utils/ScaleSize'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    fadingContainer: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalcenterView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        borderWidth: 0.7,
        borderColor: 'white',
        height: 300,
        width: horizontalScale(300),
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    modalInner: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    successText: {
        color: '#484848',
        fontSize: 35,
        fontWeight: '700',
    },
    dataText: {
        color: '#484848',
        fontSize: 12,
        fontWeight: '400',
        padding: 10
    },
    reviewText: {
        color: '#484848',
        fontSize: 12,
        fontWeight: '400'
    },
    buttonView: {
        marginTop: verticalScale(35),
    },
    buttonStyle: {
        backgroundColor: '#F96B1B',
        width: horizontalScale(70),
        height: verticalScale(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700'
    }
})