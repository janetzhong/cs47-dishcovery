import React from "react";
import {
    View, 
    TouchableOpacity, 
    Image,
    Text, 
    ImageBackground,
    Platform, 
    StyleSheet
} from 'react-native';
// import { BlurView } from "@react-native-community/blur";
import { SIZES, COLORS, FONTS, icons } from "../constants";
import { Ionicons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";


const DishCard = ({containerStyle, recipeItem, onPress}) => {
    return (
        <TouchableOpacity
        style={{
            height: 320,
            width: 250,
            marginTop: SIZES.paddingsmall,
            marginRight: 20,
            borderRadius: SIZES.radius,
            ...containerStyle
        }}
        onPress={onPress}
        >
        <View style={{flexDirection:'column',        
        justifyContent: 'center',
        alignItems: 'center',}}>
             {/* Background Image   */}
            <ImageBackground source={recipeItem.image} resizeMode="cover" style={{flex:1,width: 250, height: 220}}
                imageStyle={{ borderTopRightRadius: SIZES.radius,
                    borderTopLeftRadius: SIZES.radius}}>
            {/* Like icon */}
            <View style = {{flex:1,flexDirection: 'row-reverse',justifyContent: 'space-between'}}>
                {/* <Image source={recipeItem.isBookmarked ? icons.bookmarkFilled : icons.bookmark}
                style={{width: 20,height: 20,marginRight: SIZES.base,tintColor: COLORS.darkGreen}}/> */}
                <View style = {styles.heartButton}><Ionicons name="heart" size={20} color= {COLORS.dishcoveryOrange} /></View>
            </View>
            {/* Country */}
            <View
                style={{
                    position: 'absolute',
                    margin:15,
                    paddingHorizontal: SIZES.radiussmall,
                    paddingVertical: 5,
                    backgroundColor: "white",
                    borderRadius: SIZES.radius,
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                <CountryFlag isoCode={recipeItem.countryicon} size={10} />
                <Text style={{ color: "black", ...FONTS.h4 }}>  {recipeItem.country}</Text>
            </View>
            </ImageBackground>
            <View
                style={{
                    marginTop:220,
                    marginBottom:20,
                    paddingHorizontal:22,
                    height:80,
                    width:250,
                    backgroundColor: "white",
                    borderBottomRightRadius: SIZES.radius,
                    borderBottomLeftRadius: SIZES.radius,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                }}>
                    <Text style={styles.title}>{recipeItem.name}</Text>
                    <View style={{ flex:1, flexDirection:'row',justifyContent:'center'}}>
                        <Ionicons name="cellular" size={13} color= {COLORS.dishcoveryOrange} />
                        <Text style={styles.info}> {recipeItem.difficulty} </Text>
                        <Ionicons name="time" size={13} color= {COLORS.dishcoveryOrange} />
                        <Text style={styles.info}> {recipeItem.duration} </Text>
                        {/* <Ionicons name="location" size={13} color= {COLORS.dishcoveryOrange} />
                        <Text style={styles.info}> {recipeItem.country}</Text> */}
                    </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    recipeCardContainer:{
        position: 'absolute',
        bottom: 10,
        left: 10, 
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    },
    heartButton:{
        fles:1,
        borderRadius:99,
        height:40,
        width:40,
        margin:10,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
},
title: {
    fontSize: 15,
    textTransform:'uppercase',
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
    color:COLORS.dishcoveryNearBlack,
        marginRight: 5,
    marginLeft: 5,
    marginVertical:10,
  },
  info: {
    fontSize: 13,
    color:COLORS.dishcoveryNearBlack,
    marginBottom: 5
  }})

export default DishCard;