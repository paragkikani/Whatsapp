import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import User1 from '../assets/user1.jpeg';
import {Colors} from '../themes/Colors';
import VectorIcon from '../utils/VectorIcon';
import {ChatListData} from '../data/ChatListData';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {
  const navigation = useNavigation();

  const onNavigate = ()=>{
    navigation.navigate("ChatScreen");
  };

  return (
    <>
      {ChatListData.map(x => (
        <View key={x.id}>
        <TouchableOpacity onPress={onNavigate} style={style.container}>
          <View style={style.profile}>
            <Image style={style.profileImg} source={x.profile}></Image>
            <View style={style.profileContainer}>
              <Text style={style.profileName}>{x.name}</Text>
              <Text style={style.profileMsg}>{x.message}</Text>
            </View>
          </View>
          <View style={style.timeContainer}>
            <Text style={style.timeStamp}>{x.time}</Text>
            { !x.mute &&
            <VectorIcon
              type="MaterialCommunityIcons"
              name="volume-variant-off"
              color={Colors.textGrey}
              size={22}
              style={style.muteIcon}
            />}
          </View>
        </TouchableOpacity>
        </View>
      ))}
    </>
  );
};
const style = StyleSheet.create({
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
    margin: 10,
    marginRight: 20,
  },
  container: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  profileName: {
    color: Colors.textColor,
    fontSize:16,
  },
  profileMsg: {
    color: Colors.textGrey,
    fontSize:14,
  },
  profileContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  timeStamp: {
    color: Colors.textGrey,
    fontSize:12,
  },
  profile: {
    flexDirection: 'row',
  },
  muteIcon: {
    alignItems: 'flex-end',
  },
  timeContainer: {
    marginRight:5,
    marginTop:10,
    justifyContent: "flex-start",
  },
});

export default ChatList;
