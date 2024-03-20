import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import ChatHeader from '../Components/ChatHeader';
import ChatBody from '../Components/ChatBody';
import ChatBottom from '../Components/ChatBottom';
import Wallpaper from '../assets/wallpaper.jpeg';
import {DeviceId} from '../utils/Helper';
import firestore from '@react-native-firebase/firestore';

const ChatScreen = props => {
  const userProfile = props.route.params.userProfile;
  const userName = props.route.params.userName;

  const userRef = firestore().collection('users').doc(DeviceId);

  return (
    <>
      <ChatHeader userProfile={userProfile} userName={userName} />
      <ImageBackground source={Wallpaper} style={style.wallpaper}>
        <ChatBody userId={props.route.params.userId} userRef={userRef} />
      </ImageBackground>
      <ChatBottom userId={props.route.params.userId} userRef={userRef} />
    </>
  );
};

const style = StyleSheet.create({
  wallpaper: {
    flex: 1,
  },
});

export default ChatScreen;
