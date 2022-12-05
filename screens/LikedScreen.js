import React ,{useState} from "react"
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Button,
    Text,
    FlatList,

    TouchableHighlight
} from "react-native"
import Dimensions from "react-native"
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
//later dummyData will be changed to a varable likeData dictionary or something
import { Ionicons } from '@expo/vector-icons';

// TODO back button from recipe does not come back here because it is in a different stack navigator. need to fix

const LikedScreen = ({ navigation, route }) => {

    
    return (
        <View style={{margin:SIZES.padding/2}}>
                {/* <Text style={{marginHorizontal: SIZES.padding, ...FONTS.h2}}>
                    Countries visited through recipes:
                </Text> */}

            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={dummyData.trendingRecipes} 
            renderItem={({ item }) => {
                return (
                    <TouchableHighlight onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}>

                    <View style={styles.container}>
                      <ImageBackground style={styles.photo} imageStyle={styles.imagephoto}  source={item.image} >
                      <View style = {{flexDirection:'row-reverse'}}>
                      <View style = {styles.heartButton}><Ionicons name="heart" size={17} color= {COLORS.dishcoveryOrange} /></View>
                      </View>
                      </ImageBackground>
              
                      <Text style={styles.title}>{item.name}</Text>
                      <View style={{flexDirection:'row'}}>
                      <Ionicons name="cellular" size={10} color= {COLORS.dishcoveryOrange} />
                      <Text style={styles.category}> {item.difficulty} </Text>
                      <Ionicons name="time" size={10} color= {COLORS.dishcoveryOrange} />
                      <Text style={styles.category}> {item.duration} </Text>
                      <Ionicons name="location" size={10} color= {COLORS.dishcoveryOrange} />
                      <Text style={styles.category}> {item.country}</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                )
            }}
            keyExtractor={item => `${item.id}` } />
        </View>
    )
}

export default LikedScreen;

const SCREEN_WIDTH = 330
const recipeNumColums = 2
const RECIPE_ITEM_MARGIN = 0
const RECIPE_ITEM_HEIGHT = 130

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6,
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT + 55,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      buttonContainer:{
        flexDirection:'row-reverse',
      },
      heartButton:{
        fles:1,
        borderRadius:99,
        height:30,
        width:30,
        margin:5,
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
      photo: {
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT,
      },
      imagephoto:{
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      title: {
        flex: 1,
        fontSize: 11,
        textTransform:'uppercase',
        fontFamily: 'Inter-SemiBold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
      },
      category: {
        fontSize: 11,
        marginBottom: 5
      }
  });
  