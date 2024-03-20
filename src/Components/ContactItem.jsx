import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';

const ContactItem = props => {
  const navigation = useNavigation();

  const openChat = () => {
    navigation.navigate('ChatScreen', {
      userName: props.userName,
      userProfile: props.userProfile,
      userId: props.userId,
    });
  };

  return (
    <View>
      <TouchableOpacity style={style.container} onPress={openChat}>
        <Image style={style.profileImg} source={props.userProfile}></Image>
        <Text style={style.userName}>{props.userName}</Text>
        <Text>{props.userId}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  userName: {
    color: Colors.white,
    fontSize: 16,
  },
});
export default ContactItem;
