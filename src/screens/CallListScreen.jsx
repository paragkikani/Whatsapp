import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CallLink from '../Components/CallLink';
import CallItem from '../Components/CallItem';
import {Colors} from '../themes/Colors';
import {RecentCallsData} from '../data/RecentCallsData';

const CallListScreen = () => {
  return (
    <View style={style.container}>
      <ScrollView>
        <CallLink />
        <Text style={style.recentTitle}>Recent</Text>
        {RecentCallsData.map(x => (
          <CallItem
            name={x.name}
            profileImg={x.profileImg}
            time={x.time}
            incoming={x.incoming}
            audio={x.audio}
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
  recentTitle: {
    color: Colors.textGrey,
    fontSize: 15,
    margin: 10,
    fontWeight: '500',
  },
});

export default CallListScreen;
