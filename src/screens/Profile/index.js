//import liraries
import React, { useState } from 'react';
import {View, Text, Image, FlatList, Pressable, ScrollView} from 'react-native';
import {verticalScale} from '../../utils/ScaleSize';
import {Settings} from '../../data/Data';
import {useNavigation} from '@react-navigation/native';
import styles from './Style';
import { useIsFocused } from '@react-navigation/native';

const Profile = props => {
  const [userData, setUserData] = useState(props?.userData)
  const Separator = () => <View style={styles.itemSeparator} />
  const navigation = useNavigation();
  const isFocus = useIsFocused();

  useEffect(() => {
    if(isFocus){
      setUserData(props.userData)
    }
  }, [isFocus])

  const render = ({item}) => {
    return (
      <Pressable
        onPress={() => {
          item.id === 1 ? navigation.navigate('EditProfile') : null;
        }}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={item.image} />
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
        <Text style={styles.profileText}>Profile</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/Image.png')}
          style={{width: 120, height: 120}}
        />
        <Text style={styles.imageText}>{userData?.first_Name}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.userText}>Normal User</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsText}>081234567890</Text>
        <Text style={styles.detailsText}>johndoe@mail.com</Text>
      </View>
      <View>
        <Separator />
      </View>
      <View style={{marginTop: verticalScale(10)}}>
        <FlatList
          data={Settings}
          renderItem={render}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.authData.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserToken: data => {
      dispatch(setAuthToken(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);