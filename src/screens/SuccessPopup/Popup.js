import { View, Text, Modal, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { style } from './styles';

const Popup = () => {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
        setVisible(true);
    })
    return (
        <View>
            {visible ? (
                <View style={style.fadingContainer}>
                </View>
            ) : null}
            <Modal animationType='fade' visible={visible} transparent={true}>
                <View style={style.modalcenterView}>
                    <View style={style.modalView}>
                        <View style={style.modalInner}>
                            <Image source={require('../../assets/images/checkmark.png')} />
                            <Text style={style.successText}>Success!</Text>
                            <Text style={style.dataText}>Your Data has been saved</Text>
                            <Text style={style.reviewText}>(Your data is being reviewed)</Text>
                            <View style={style.buttonView}>
                                <TouchableOpacity style={style.buttonStyle}
                                    onPress={() => navigation.navigate('Join')}>
                                    <Text style={style.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}



export default Popup