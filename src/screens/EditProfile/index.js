import {View, Text, Image, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {Style} from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import action from '../../Redux/Action/action';

const EditProfile = () => {
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [name, setName] = useState('');

  const dateChange = () => {
    let data = {
      first_Name: name
    }
    if (isDataChanged) {
      props.onSetUserToken(data);
      setIsDataChanged(true)
    }
    console.log(data);
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
            <View style={{gap: 10}}>
              <Text style={Style.labelStyle}>Name</Text>
              <TextInput
                placeholder="Name"
                style={Style.TextInput}
                onChangeText={text => setName(text)}
                value={name}
              />
            </View>
          </View>
        </View>
        <View style={Style.updateButton}>
          <TouchableOpacity onPress={dateChange}>
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

const mapStateToProps = state => {
  console.log('state', state);
  return {
    userData: state.authData.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserToken: data => {
      dispatch(action(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
