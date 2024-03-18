import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale } from "../../utils/ScaleSize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 300,
        height: 250
    },
    textStyle: {
        color: '#4B4B4B',
        fontSize: 24,
        fontWeight: '700',
        letterSpacing: 1,
        top: verticalScale(60)
    },
    activeDotStyle: {
        width: 30.77,
        height: 8,
        backgroundColor: '#F96B1B',
        borderRadius: 20
    },
    skipButton: {
        left: horizontalScale(180),
        bottom: verticalScale(30)
    },
    skipButtonText: {
        color: '#F96B1B',
        fontWeight: '800',
        fontSize: 16,
    },
    doneButton: {
        paddingRight: horizontalScale(106),
        bottom: verticalScale(100)
    },
    buttonStart: {
        width: 170,
        borderColor: '#F96B1B',
        borderRadius: 10,
        backgroundColor: '#F96B1B',
        borderWidth: 0,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStartText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 18,
    }
});

export default styles