import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from '../themes/Colors';
import VectorIcon from '../utils/VectorIcon';

const ChatBody = props => {
  const userID = props.userId;
  //console.log('props : ', userID);
  const [messages, setMessages] = useState([]);

  const allMessage = async () => {
    await props.userRef
      .collection(userID)
      .orderBy('timestamp')
      .onSnapshot(snapshot =>
        setMessages(snapshot.docs.map(snap => snap.data())),
      );

    //setMessages(messages);
  };

  allMessage();

  const scrollRef = useRef();
  const [scrolling, setScrolling] = useState(false);

  const UserMsg = props => {
    return (
      <View style={{flexDirection: 'row', margin: 5}}>
        <View style={style.emptyView}></View>
        <View style={style.userMsgContainer}>
          <Text style={style.messege}>{props.message}</Text>
          <Text style={style.time}>{props.time}</Text>
          <VectorIcon
            style={style.tickIcon}
            type="Ionicons"
            name="checkmark-done"
            size={15}
            color={Colors.blue}
          />
        </View>
      </View>
    );
  };

  const OtherMsg = props => {
    return (
      <View style={{flexDirection: 'row', margin: 5}}>
        <View style={style.otherMsgContainer}>
          <Text style={style.messege}>{props.message}</Text>
          <Text style={style.time}>{props.time}</Text>
        </View>
      </View>
    );
  };
  const handleScroll = () => {
    scrollRef.current.scrollToEnd({animated: true});
  };

  var contentHeight = 0;
  var frameHeight = 0;
  const whileScroll = event => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (contentHeight === 0 || frameHeight === 0) {
      contentHeight = event.nativeEvent.contentSize.height;
      frameHeight = event.nativeEvent.layoutMeasurement.height;
    }
    const maxOffset = contentHeight - frameHeight;
    if (maxOffset < yOffset) {
      setScrolling(false);
    }
    setScrolling(maxOffset - yOffset > 8);
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        onContentSizeChange={handleScroll}
        onScroll={whileScroll}
        showsVerticalScrollIndicator={false}>
        {messages.map(x =>
          x.sender === userID ? (
            <OtherMsg
              key={x.timestamp}
              message={x.message}
              time={x.timestamp?.toDate().toLocaleTimeString()}
            />
          ) : (
            <UserMsg
              key={x.timestamp}
              message={x.message}
              time={x.timestamp?.toDate().toLocaleTimeString()}
            />
          ),
        )}
      </ScrollView>

      {scrolling && (
        <View style={style.scrollArrow}>
          <TouchableHighlight style={style.scrollArrowC} onPress={handleScroll}>
            <VectorIcon
              type="Fontisto"
              name="angle-dobule-down"
              size={10}
              color={Colors.white}
            />
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  scrollArrow: {
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
  },
  scrollArrowC: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 5,
  },

  tickIcon: {
    alignSelf: 'flex-end',
  },
  emptyView: {
    flex: 1,
  },
  userMsgContainer: {
    padding: 5,
    paddingLeft: 10,
    backgroundColor: Colors.teal,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
  },
  messege: {
    fontSize: 15,
    color: Colors.white,
  },
  time: {
    fontSize: 10,
    color: Colors.white,
    alignSelf: 'flex-end',
    marginHorizontal: 5,
  },
  otherMsgContainer: {
    padding: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: Colors.primaryColor,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default ChatBody;
