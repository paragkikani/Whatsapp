import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../themes/Colors';
import VectorIcon from '../utils/VectorIcon';
import firestore from '@react-native-firebase/firestore';
import {DeviceId} from '../utils/Helper';

const ChatBottom = props => {
  const [message, setMessage] = useState('');

  const handleChange = msg => {
    setMessage(msg);
  };

  const SendMessage = async () => {
    try {
      await props.userRef.collection(props.userId).add({
        sender: DeviceId,
        message: message,
        timestamp: firestore.FieldValue.serverTimestamp(),
      }),
        setMessage('');
    } catch (Execption) {
      console.log('Error in SendMessage : ', Execption);
      setMessage('');
    }
    //handleChange('');
  };

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <VectorIcon
          type="MaterialIcons"
          name="emoji-emotions"
          color={Colors.white}
          size={24}
          style={style.icons}
        />
        <TextInput
          onChangeText={message => handleChange(message)}
          placeholder="Message"
          placeholderTextColor={Colors.textColor}
          value={message}
          style={style.inputText}></TextInput>
        <View style={style.iconHolder}>
          <VectorIcon
            type="Entypo"
            name="attachment"
            color={Colors.white}
            size={18}
            style={style.icons}
          />
          {message.trim().length <= 0 && (
            <>
              <VectorIcon
                type="FontAwesome"
                name="rupee"
                color={Colors.white}
                size={20}
                style={style.icons}
              />
              <VectorIcon
                type="Entypo"
                name="camera"
                color={Colors.white}
                size={20}
                style={style.icons}
              />
            </>
          )}
        </View>
      </View>
      <View style={style.sendBTN}>
        {message.trim().length > 0 ? (
          <VectorIcon
            type="Ionicons"
            name="send"
            color={Colors.white}
            size={20}
            style={style.btnIcon}
            onPress={SendMessage}
          />
        ) : (
          <VectorIcon
            type="FontAwesome"
            name="microphone"
            color={Colors.white}
            size={20}
            style={style.btnIcon}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: Colors.primaryColor,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  inputText: {
    color: Colors.textColor,
    flex: 1,
  },
  icons: {
    marginHorizontal: 10,
  },
  iconHolder: {
    marginRight: 10,
    flexDirection: 'row',
  },
  sendBTN: {
    height: 50,
    width: 50,
    backgroundColor: Colors.tertiary,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderRadius: 50,
  },
  btnIcon: {
    alignSelf: 'center',
  },
});
export default ChatBottom;
