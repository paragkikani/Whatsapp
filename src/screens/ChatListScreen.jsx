import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import ChatList from '../Components/ChatList';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';
import {DeviceId} from '../utils/Helper';

const ChatListScreen = () => {
  const navigation = useNavigation();

  const navigateToContact = () => {
    navigation.navigate('ContactScreen');
  };

  const addDevice = async () => {
    try {
      const id = await firestore().collection('users').get();
      console.log('already have Device get : ', DeviceId);
    } catch (Execption) {
      console.log('Error in addDevice', Execption);
      firestore().collection('users').add(DeviceId).add({
        name: 'Parag',
        profile: 'profilePic/user5.jpeg',
      });
    }
  };
  addDevice();

  return (
    <View style={style.container}>
      <ScrollView>
        <ChatList />
      </ScrollView>
      <TouchableOpacity style={style.iconContainer} onPress={navigateToContact}>
        <VectorIcon
          name="message-reply-text"
          type="MaterialCommunityIcons"
          size={25}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  iconContainer: {
    backgroundColor: Colors.tertiary,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.background,
  },
});
export default ChatListScreen;
