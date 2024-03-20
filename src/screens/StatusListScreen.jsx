import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MyStatusItem from '../Components/MyStatusItem';
import StatusItem from '../Components/StatusItem';
import {Colors} from '../themes/Colors';
import {StatusData} from '../data/StatusData';

const StatusListScreen = () => {
  var recent = [];
  var viewed = [];

  StatusData.forEach(element => {
    element.showConter > 0 ? viewed.push(element) : recent.push(element);
  });

  return (
    <View style={style.container}>
      <ScrollView>
        <MyStatusItem />
        <Text style={style.textIntro}>Recent updates</Text>
        {recent.map(item => {
          return (
            <StatusItem
              color={Colors.tertiary}
              key={item.id}
              userImg={item.userImg}
              name={item.name}
              time={item.time}
              storyImg={item.storyImg}
              storyMsg={item.storyMsg}
            />
          );
        })}
        <Text style={style.textIntro}>Vieved Updates</Text>
        {viewed.map(item => {
          return (
            <StatusItem
              color={Colors.secondaryColor}
              key={item.id}
              userImg={item.userImg}
              name={item.name}
              time={item.time}
              storyImg={item.storyImg}
              storyMsg={item.storyMsg}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  textIntro: {
    color: Colors.textGrey,
    fontSize: 15,
    margin: 10,
    fontWeight: '500',
  },
});
export default StatusListScreen;
