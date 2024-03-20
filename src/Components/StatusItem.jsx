import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import user from '../assets/user1.jpeg';
import {Colors} from '../themes/Colors';
import FullModal from '../utils/FullModal';

const StatusItem = props => {
  const [modelState, setModelState] = useState(false);

  const openModal = () => {
    setModelState(true);
  };

  return (
    <TouchableOpacity style={style.container} onPress={openModal}>
      <View style={[{backgroundColor: props.color}, style.imgContainer]}>
        <Image style={style.profileImg} source={props.userImg}></Image>
      </View>
      <View style={style.textContainer}>
        <Text style={style.userName}>{props.name}</Text>
        <Text style={style.updateStatus}>{props.time} </Text>
      </View>
      <FullModal
        modelState={modelState}
        setModelState={setModelState}
        profile={props}
      />
    </TouchableOpacity>
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
  container: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
  },
  profileImg: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  textContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginStart: 10,
  },
  userName: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  updateStatus: {
    marginTop: 2,
    color: Colors.textGrey,
    fontSize: 13,
  },
});
export default StatusItem;
