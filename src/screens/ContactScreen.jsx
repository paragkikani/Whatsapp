import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ContactHeader from '../Components/ContactHeader';
import {Colors} from '../themes/Colors';
import ContactItem from '../Components/ContactItem';
import firestore from '@react-native-firebase/firestore';
import {getImage} from '../utils/Helper';
const ContactScreen = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUserData()
      .then(data => {
        setUser(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getUserData = async () => {
    const allUsers = await firestore().collection('users').get();
    const userData = Promise.all(
      allUsers.docs.map(async x => {
        return {
          id: x.id,
          name: x.data().name,
          userImg: await getImage(x.data().profile),
        };
      }),
    );
    return userData;
  };

  return (
    <View style={style.container}>
      <ContactHeader />
      <ScrollView>
        <Text style={style.descText}>Contacts on Whatsapp</Text>
        {users.map(x => (
          <ContactItem
            key={x.id}
            userId={x.id}
            userName={x.name}
            userProfile={{uri: x.userImg}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  descText: {
    color: Colors.textGrey,
    fontSize: 13,
    margin: 10,
    fontWeight: '500',
  },
});

export default ContactScreen;
