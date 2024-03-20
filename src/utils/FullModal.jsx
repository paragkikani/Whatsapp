import {View, Text, Modal, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../themes/Colors';
import VectorIcon from './VectorIcon';
import ProgressBar from './ProgressBar';

const FullModal = props => {
  const {modelState, setModelState, profile} = props;

  const closeModal = () => {
    setModelState(false);
  };

  return (
    <Modal
      animationType="fade"
      visible={modelState}
      onRequestClose={closeModal}>
      <View style={style.container}>
        <ProgressBar closeModal={closeModal} />
        <View style={style.topContainer}>
          <VectorIcon
            type="MaterialIcons"
            name="arrow-back"
            size={20}
            color={Colors.white}
            onPress={closeModal}
          />
          <Image style={style.profileImg} source={profile.userImg}></Image>
          <Text style={style.userName}>{profile.name}</Text>
          <VectorIcon
            type="Feather"
            name="more-vertical"
            size={22}
            color={Colors.white}
            style={style.moreIcon}
          />
        </View>
        <View style={style.midContainer}>
          <Image style={style.statusIMG} source={profile.storyImg}></Image>
          <Text style={style.statusText}>{profile.storyMsg}</Text>
        </View>
        <View style={style.bottomContainer}>
          <VectorIcon
            type="Entypo"
            name="chevron-thin-up"
            size={20}
            color={Colors.white}
            onPress={closeModal}
          />
          <Text style={style.replyTXT}>Reply</Text>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  profileImg: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginHorizontal: 10,
    marginTop: 5,
  },
  userName: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  statusIMG: {
    width: '100%',
    height: '80%',
  },
  statusText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white,
    marginTop: 5,
  },
  replyTXT: {
    color: Colors.white,
    fontSize: 15,
    marginBottom: 10,
  },
  midContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullModal;
