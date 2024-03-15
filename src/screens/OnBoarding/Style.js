import { StyleSheet } from "react-native";

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
        top: 50
    },
    activeDotStyle: {
        width: 30.77,
        height: 8,
        backgroundColor: '#F96B1B',
        borderRadius: 20
    },
    skipButton: {
        left: 182,
        bottom: 20
    },
    skipButtonText: {
        color: '#F96B1B',
        fontWeight: '800',
        fontSize: 16,
    },
    doneButton: {
        paddingRight: 113,
        bottom: 100
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
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 18,
    }
});

export default styles