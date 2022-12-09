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
    SafeAreaView,
    TouchableHighlight,
    TextInput
} from "react-native"
import { FONTS, COLORS, icons, images, SIZES, dummyData ,recipeData} from "../constants"
import  * as asynchelper from '../helpers/asynchelpers';

//later dummyData will be changed to a varable likeData dictionary or something
import { Ionicons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";
import commonStyles from "../assets/styles/CommonStyles.styles";
import GalleryPage from '../components/DishCard.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


// saveAndUpdate();

const allRecipedata = recipeData.allRecipes

// const likedids = bitteryids+christmassyids
const newrecipedata = asynchelper.updateIsLiked(allRecipedata,1002)


const likedData = newrecipedata.filter(item => item.isLiked);
const likedids = likedData.map(item => item.id);
console.log(likedids)


const myObject = {
  id: 'foo',
  data: {
    name: 'John Doe',
    age: 35
  }
};

const saveObject = async object => {
  try {
    await AsyncStorage.setItem('myObject', JSON.stringify(object));
  } catch (error) {
    console.error(error);
  }
};

const getObject = async () => {
  try {
    const data = await AsyncStorage.getItem('myObject');
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.error(error);
  }
};


saveObject(allRecipedata)
// console.log(getObject())

// getObject().then(newrecipe => {
//   const this.state.newobj = newrecipe;
// });

// const likedData = getObject()

const LikedScreen = async ({ navigation }) => {
  console.log("starting getObject");
  // getObject().then(newRecipe => {
  //   let retData = await newRecipe;
  //   console.log(retData)
  // })

  //let retData = await getObject(); --> hopefully


  //console.log("print to make sure scope is accessible");
  //console.log(retData);
  
  
  const countriesvisited = [...new Set(likedData.map(recipe => recipe.countryicon))];
  // asynchelper.saveObject(allRecipedata);
  // const objectFromStorage = asynchelper.getObject();
  // console.log(objectFromStorage);

  
  return (
    //       <GalleryPage recipeItem={dummyData.likedRecipes} onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}/>

        <SafeAreaView style={commonStyles.whiteBackground}>
          <View style={commonStyles.outerView}>
            <Text style={styles.subheading}>
              Countries Dishcovered:
            </Text>
            <View style ={{flexDirection:'row', marginBottom:10 ,justifyContent:'center'}}>
            {countriesvisited.map(isocode => <CountryFlag isoCode={isocode} size={13} style={{margin:3,borderWidth:0.5,borderColor: "light-grey"}}/>)}
            </View>
            
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={likedData} 
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}>
                    <View style={styles.container}>
                      <ImageBackground style={styles.photo} imageStyle={styles.imagephoto} resizeMode="cover" source={item.image} >
                        <View style={{flexDirection: 'row'}}>
                            <View
                              style={{
                                //position: 'absolute',
                                margin:7,
                                paddingHorizontal: SIZES.radiussmall,
                                paddingVertical: 5,
                                backgroundColor: "white",
                                borderRadius: SIZES.radius,
                                flexDirection:'row',
                                alignItems:'center',
                              }}>
                              <CountryFlag isoCode={item.countryicon} size={8} />
                              <Text style={{ color: COLORS.dishcoveryNearBlack, fontFamily:'Inter-SemiBold', fontSize:11 }}>  {item.country}</Text>
                            </View>

                          <View style = {{position:'absolute', right:0}}>
                              <View style = {styles.heartButton}><Ionicons name="heart" size={17} color= {COLORS.dishcoveryOrange} /></View>
                          </View>
                        </View>
                      </ImageBackground>

                      
                      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                          <Text style={{        
                              fontSize: 11,
                              textTransform:'uppercase',
                              fontFamily: 'Inter-SemiBold',
                              textAlign: 'center',
                              color: '#444444',
                              // marginTop: 3,
                              marginHorizontal: 5,marginVertical:2}}>{item.name}</Text>
                          <View style={{ flexDirection:'row'}}>
                              <Ionicons name="cellular" size={10} color= {COLORS.dishcoveryOrange} />
                              <Text style={styles.category}> {item.difficulty} </Text>
                              <Ionicons name="time" size={10} color= {COLORS.dishcoveryOrange} />
                              <Text style={styles.category}> {item.duration} </Text>
                              {/* <Ionicons name="location" size={10} color= {COLORS.dishcoveryOrange} />
                              <Text style={styles.category}> {item.country}</Text> */}
                          </View>
                        </View>
                    </View>
                  </TouchableHighlight>
                )
              }}

              keyExtractor={item => `${item.id}` } />

          </View>
        </SafeAreaView>
    )
}


export default LikedScreen

const SCREEN_WIDTH = 330
const recipeNumColums = 2
const RECIPE_ITEM_MARGIN = 0
const RECIPE_ITEM_HEIGHT = 130

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 55,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: SIZES.padding,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  subheading:{
    textAlign:'center',
    marginBottom:10,
    color: COLORS.dishcoveryOrange,
    fontFamily:'Inter-SemiBold',
    textTransform:'uppercase',
    fontSize:13
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    resizeMode:'cover'
  },
  imagephoto:{
    borderRadius: SIZES.padding,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
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
  category: {
    fontSize: 11,
    color:COLORS.dishcoveryNearBlack,
    marginBottom: 3
  }
})
