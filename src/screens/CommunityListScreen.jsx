import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import communityIMG from "../assets/community-img.png"
import { Colors } from '../themes/Colors'
const CommunityListScreen = () => {
  return (
    <View style={style.container}>
      <Image source={communityIMG} style={style.community_img}></Image>
      <Text style={style.title}>Introducing communities</Text>
      <Text style={style.discription}>Easily organize your related groups and send announcements. Now, your
        communities, like neighbourhood or schools, can have their own space.</Text>
        <TouchableOpacity style={style.touchBtn}>
          <Text style={style.touchTxt}>Start Your Community</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  title:{
    textAlign:"center",
    color:Colors.white,
    fontSize:24
  },
  discription:{
    textAlign:"center",
    color:Colors.textGrey,
    marginHorizontal:24,
    paddingHorizontal:25,
    lineHeight:20,
    letterSpacing:0.6,
    fontSize:16,
    marginTop:5
  },
  container:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:Colors.background,
    flex:1
  },
  community_img:{
    width:250,
    height:150
  },touchBtn:{
      backgroundColor:Colors.tertiary,
      padding:8,
      marginTop:30,
      borderRadius:50,
      width:"80%"
  },touchTxt:{
      textAlign:"center",
      fontSize:14,
      color:Colors.background
  }
});

export default CommunityListScreen