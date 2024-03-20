import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import user from '../assets/user1.jpeg';
import FullModal from '../utils/FullModal';
import {Colors} from '../themes/Colors';
import VectorIcon from '../utils/VectorIcon';

const CallItem = props => {
  return (
    <View style={style.container}>
      <View>
        <Image style={style.profileImg} source={props.profileImg}></Image>
      </View>
      <View style={style.textContainer}>
        <Text style={style.userName}>{props.name}</Text>
        <View style={style.hostoryContainer}>
          {props.incoming ? (
            <VectorIcon
              type="MaterialCommunityIcons"
              name="arrow-bottom-left"
              size={20}
              color={Colors.red}
            />
          ) : (
            <VectorIcon
              type="MaterialCommunityIcons"
              name="arrow-top-right"
              size={20}
              color={Colors.tertiary}
            />
          )}

          <Text style={style.updateStatus}>{props.time}</Text>
        </View>
      </View>
      <View style={style.callContainer}>
        {props.audio ? (
          <VectorIcon
            type="Ionicons"
            name="call"
            size={25}
            color={Colors.tertiary}
          />
        ) : (
          <VectorIcon
            type="Ionicons"
            name="videocam"
            size={25}
            color={Colors.tertiary}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  imgContainer: {
    position: 'relative',
    flexDirection: 'row',
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  hostoryContainer: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    marginVertical: 10,
  },
  callContainer: {
    marginRight: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  textContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginStart: 10,
    flex: 1,
  },
  userName: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  updateStatus: {
    marginTop: 2,
    color: Colors.textGrey,
    fontSize: 14,
    marginLeft: 5,
  },
});

export default CallItem;
