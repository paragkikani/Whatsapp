import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import logo from "../assets/WhatsApp_logo.png"
import {Colors} from "../themes/Colors"
import VectorIcon from '../utils/VectorIcon'
const Header = () => {
  return (
    <View style={style.container}>
        <Image source={logo} style={style.logoImage}></Image>
        <View style={style.iconParent}>
        <VectorIcon size={22} type="Feather" name="camera" color={Colors.secondaryColor} style={style.headerIcon}/>
        <VectorIcon size={22} type="Feather" name="search" color={Colors.secondaryColor} style={style.headerIcon}/>
        <VectorIcon size={22} type="Feather" name="more-vertical" color={Colors.secondaryColor} style={style.headerIcon}/>
        </View>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        backgroundColor:Colors.primaryColor,
        padding:16,
        flexDirection:"row",
        justifyContent:"space-between"
    },  

    logoImage:{
        width:110,
        height:25,
    },

    headerIcon:{
        marginRight:0,
        marginLeft:20

    },
    iconParent:{
        flexDirection:"row",
        alignContent:'center'
    }

});

export default Header