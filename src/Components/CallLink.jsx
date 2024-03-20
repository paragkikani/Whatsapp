import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../themes/Colors';
import VectorIcon from '../utils/VectorIcon';

const CallLink = () => {
  return (
    <View style={style.container}>
      <View style={style.imgContainer}>
        <VectorIcon
          type="Fontisto"
          name="link"
          color={Colors.white}
          size={20}
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.updateStatus}>Create Call Link</Text>
        <Text style={style.link}>Share a link for your Whatsapp call</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  imgContainer: {
    backgroundColor: Colors.tertiary,
    borderRadius: 50,
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  link: {
    marginTop: 2,
    color: Colors.textGrey,
    fontSize: 13,
  },
  container: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
  },

  textContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginStart: 5,
  },

  updateStatus: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default CallLink;
