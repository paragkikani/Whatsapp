import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';
const ContactHeader = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <VectorIcon
        type="MaterialIcons"
        name="arrow-back"
        size={20}
        color={Colors.white}
        onPress={goBack}
      />
      <View style={style.textContainer}>
        <Text style={style.title}>Select Contact</Text>
        <Text style={style.allContactTxt}>23 Contacts</Text>
      </View>
      <VectorIcon
        size={20}
        type="Feather"
        name="search"
        color={Colors.white}
        style={style.iconSerch}
      />
      <VectorIcon
        size={20}
        type="Feather"
        name="more-vertical"
        color={Colors.white}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconSerch: {marginHorizontal: 10},
  backArrow: {
    marginRight: 10,
  },
  textContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
    flex: 1,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
  },
  allContactTxt: {
    color: Colors.white,
    fontSize: 12,
  },
});

export default ContactHeader;
