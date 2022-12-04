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

const SCREEN_WIDTH = 380
const recipeNumColums = 2
const RECIPE_ITEM_MARGIN = 0
const RECIPE_ITEM_HEIGHT = 200

const renderRecipes = ({ item, index }) => (
    <TouchableHighlight onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}>
      <View style={styles.container}>
        <Image style={styles.photo} source={item.image} /> 
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.category}>{item.duration}</Text>
      </View>
    </TouchableHighlight>
  );

const LikedScreen = ({ navigation, route }) => {

    
    return (
        <View>
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={dummyData.trendingRecipes} renderItem={renderRecipes} keyExtractor={item => `${item.id}` } />
        </View>
    )
}

export default LikedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SIZES.padding,
        marginTop: SIZES.padding,
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT + 75,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15
      },
      photo: {
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT,
        width:'50%',
        height: '50%',
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
      },
      category: {
        marginTop: 5,
        marginBottom: 5
      }
  });
  