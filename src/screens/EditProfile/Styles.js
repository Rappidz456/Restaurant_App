import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale } from '../../utils/ScaleSize'

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    itemSeparator: {
        height: 1,
        top: verticalScale(75),
        width: '100%',
        borderWidth: 0.2,
        backgroundColor: '#C9C9C9',
      },
    imageView: {
        marginTop: verticalScale(100),
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(30),
        gap: 20
    },
    TextInput: {
        paddingLeft: horizontalScale(25),
        borderWidth: 1,
        borderColor: '#C9C9C9',
        height: 40,
        width: 350,
        borderRadius: 10
    },
    labelStyle: {
        marginLeft: verticalScale(4),
        color: '#484848',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.3
    },
    updateButton: {
        alignItems: 'center',
        marginTop: verticalScale(140)
    },
    buttonStyle: {
        width: horizontalScale(350),
        height: verticalScale(45),
        borderRadius: 10,
        backgroundColor: '#F96B1B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    }
})