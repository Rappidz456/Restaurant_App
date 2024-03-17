//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/ScaleSize';
import Settings from '../../data/ProfileSettings';

const Profile = () => {
  const Separator = () => <View style={styles.itemSeparator} />;
  const render = ({item}) => {
    return (
      <View style = {styles.itemContainer}>
        <View style = {{flexDirection: 'row', alignItems: 'center',}}>
        <Image source={item.image}/>
        <Text style = {styles.itemText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
        <Text style={styles.profileText}>Profile</Text>
      </View>
      <View style={styles.imageView}>
        <Image source={require('../../assets/images/Image.png')} />
        <Text style={styles.imageText}>John Doe</Text>
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
      <View style = {{marginTop: verticalScale(10)}}>
        <FlatList
          data={Settings}
          renderItem={render}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileView: {
    marginTop: verticalScale(50),
    marginLeft: horizontalScale(20),
  },
  profileText: {
    color: '#4B4B4B',
    fontWeight: '700',
    fontSize: 32,
    letterSpacing: 0.3,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
    gap: 20,
  },
  imageText: {
    color: '#484848',
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 0.3,
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: horizontalScale(10),
  },
  userText: {
    color: '#F96B1B',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.3,
  },
  details: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
    gap: 5,
  },
  detailsText: {
    color: '#484848',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0.3,
  },
  itemSeparator: {
    height: 1,
    marginTop: verticalScale(12),
    width: '100%',
    backgroundColor: '#C9C9C9',
  },
  itemContainer:{
    marginTop: verticalScale(20),
    padding: horizontalScale(20),
    backgroundColor: '#FFFFFF',
    borderColor: '#C9C9C9',
    borderWidth: 1,
    width: '80%',
    height: 65,
    alignSelf: 'center',
    borderRadius: 10
},
itemText: {
    paddingLeft: horizontalScale(20),
    color: '#484848',
    fontSize: 16,
    fontWeight: '600',
}
});

export default Profile;
