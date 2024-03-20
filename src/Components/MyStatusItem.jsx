import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import user from '../assets/user1.jpeg';
import {Colors} from '../themes/Colors';
import VectorIcon from '../utils/VectorIcon';

const MyStatusItem = () => {
  return (
    <View style={style.container}>
      <View style={style.imgContainer}>
        <Image source={user} style={style.profileImg}></Image>
        <VectorIcon
          type="Entypo"
          name="circle-with-plus"
          size={22}
          color={Colors.tertiary}
          style={style.plusIcon}
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.userName}>My Status</Text>
        <Text style={style.updateStatus}>Tap to add status update</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
  },
  imgContainer:{
    position: 'relative',
    flexDirection: 'row',
    width: 65,
    height: 65,
    marginLeft:5
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10,
    marginRight: 20,
  },
  userName: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  updateStatus: {
    color: Colors.textGrey,
    fontSize: 13,
  },
  plusIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderRadius: 50,

  },textContainer:{
    justifyContent: 'center',
    marginLeft:10,

  }
});

export default MyStatusItem;
