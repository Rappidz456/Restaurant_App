import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {formData} from '../../data/Data';
import {Style} from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import action from '../../Redux/Action/action';
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux';

const EditProfile = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setdata = () => {
    const userData = {
      name: name,
    };
  };

  const Separator = () => <View style={Style.itemSeparator} />;
  return (
    <View style={Style.container}>
      <KeyboardAwareScrollView>
        <View>
          <Separator />
        </View>
        <View style={Style.imageView}>
          <Image source={require('../../assets/images/Image.png')} />
        </View>
        <View style={Style.inputView}>
          <View style={{gap: 20}}>
            {formData.map((item, index) => {
              return (
                <View key={index} style={{gap: 10}}>
                  {item.id <= 3 && (
                    <>
                      <Text style={Style.labelStyle}>{item.label}</Text>
                      <TextInput
                        placeholder={item.placeholder}
                        style={Style.TextInput}
                        onChangeText={text => setName(text)}
                        value={name}
                      />
                    </>
                  )}
                  {item.id === 4 && (
                    <>
                      <Text style={Style.labelStyle}>{item.label}</Text>
                      <TextInput
                        placeholder={item.placeholder}
                        style={Style.TextInput1}
                      />
                    </>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={Style.updateButton}>
          <TouchableOpacity onPress={setdata}>
            <LinearGradient
              colors={['#F9A11B', '#F96B1B']}
              angle={180}
              useAngle={true}
              style={Style.buttonStyle}>
              <Text style={Style.buttonText}>Update Data</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(EditProfile);
