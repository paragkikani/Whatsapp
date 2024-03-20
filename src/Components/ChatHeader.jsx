import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../themes/Colors';
import User from '../assets/user1.jpeg';
import {useNavigation} from '@react-navigation/native';

const ChatHeader = props => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <View style={style.profile}>
        <VectorIcon
          style={style.beckArrow}
          type="MaterialIcons"
          name="arrow-back"
          size={20}
          color={Colors.white}
          onPress={goBack}
        />
        <Image style={style.profileImg} source={props.userProfile}></Image>
        <Text style={style.userName}>{props.userName}</Text>
      </View>
      <View style={style.buttonContainer}>
        <VectorIcon
          type="Ionicons"
          name="videocam"
          size={22}
          color={Colors.white}
          style={style.moreIcon}
        />
        <VectorIcon
          type="Ionicons"
          name="call"
          size={22}
          color={Colors.white}
          style={style.moreIcon}
        />
        <VectorIcon
          type="Feather"
          name="more-vertical"
          size={22}
          color={Colors.white}
          style={style.moreIcon}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  beckArrow: {
    marginLeft: 7,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  userName: {
    color: Colors.white,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreIcon: {
    marginHorizontal: 10,
  },
});

export default ChatHeader;
