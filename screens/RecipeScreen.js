import React ,{useState} from "react"
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Button,
    ScrollView,
    Text
} from "react-native"

import {icons, COLORS, SIZES } from "../constants"
import { Ionicons } from '@expo/vector-icons';


const RecipeScreen = ({ navigation, route }) => {

    const [selectedRecipe, setSelectedRecipe] = React.useState(null)
    const [showContext, setShowContext] = useState(true);
    const [showRecipe, setShowRecipe] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);


    React.useEffect(() => {
        let { recipe } = route.params
        console.log(recipe)
        setSelectedRecipe(recipe)
    }, [])

    return (
    <ScrollView style={styles.container}>
        {/* Recipe Image Background */}
        <ImageBackground style={styles.recipeImage} resizeMode={'cover'} source={selectedRecipe?.image}>
            {/* Back button TODO - doesn't go to right page if from Liked or Scan screen*/}
            <TouchableOpacity style={styles.backbuttoncircle} onPress={() => navigation.goBack()}>
            <Image source={icons.back} style={styles.backbuttonarrow}/>
            </TouchableOpacity>
        </ImageBackground>

        {/* Toggle Recipe Info - 3 buttons :-) */}
        <View style={styles.buttonContainer}>
            {/* CONTEXT BUTTON */}
            <TouchableOpacity style={showContext? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(false) & setShowRecipe(false) & setShowContext(true)}} >
            <Text style={styles.recipeInfoButtonText}>Context</Text>
            </TouchableOpacity>

            {/* INGREDIENT BUTTON */}
            <TouchableOpacity style={showIngredients? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(true) & setShowRecipe(false) & setShowContext(false)}} >
            <Text style={styles.recipeInfoButtonText}>Ingredients</Text>
            </TouchableOpacity>

            {/* RECIPE BUTTON */}
            <TouchableOpacity style={showRecipe? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(false) & setShowRecipe(true) & setShowContext(false)}} >
            <Text style={styles.recipeInfoButtonText}>Cook!</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginVertical:5,marginHorizontal:20}}>
            <Text style={styles.title}> {selectedRecipe?.name} </Text>
        </View>

        <View style={{margin:5,flexDirection:'row', justifyContent:'center'}}>
            <Ionicons name="cellular" size={15} color= {COLORS.dishcoveryOrange} />
            <Text style={{fontSize:15, textAlign:'center', fontFamily:'Inter-Regular'}}> {selectedRecipe?.difficulty} </Text>
            <Ionicons name="time" size={15} color= {COLORS.dishcoveryOrange} />
            <Text style={{fontSize:15, textAlign:'center', fontFamily:'Inter-Regular'}}> {selectedRecipe?.duration} </Text>
            <Ionicons name="location" size={15} color= {COLORS.dishcoveryOrange} />
            <Text style={{fontSize:15, textAlign:'center', fontFamily:'Inter-Regular'}}> {selectedRecipe?.country} </Text>
        </View>

        {showIngredients ? (<Text style={{marginRight:33, marginTop: SIZES.padding, marginLeft:33}}>yes to ingredient</Text>): null}
        {showRecipe ? (<Text style={{marginRight:33, marginTop: SIZES.padding, marginLeft:33}}>yes to recipe</Text>): null}
        {showContext ? (<Text style={{marginRight:33, marginTop: SIZES.padding, marginLeft:33}}>{selectedRecipe?.culturalContext}</Text>) : null}

    </ScrollView>
    )
}
export default RecipeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
    },
    title: {
        fontSize: 15,
        letterSpacing: 1,
        textTransform:'uppercase',
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
        color:COLORS.dishcoveryNearBlack,
        marginRight: 5,
        marginLeft: 5,
        marginVertical:13,
      },
    backbuttoncircle :{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        backgroundColor: "white",
        color:"black",
        margin: 20
    },
    backbuttonarrow: {
        position: 'absolute',
        width: 15,
        height: 15,
        tintColor: "black",
        color:"black"
        },
    recipeImage:{
        width: "100%", 
        height: 250
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: COLORS.dishcoveryLightGrey,
        borderRadius:30,
        margin:20,
        height:45,
        marginRight:33,
        marginLeft:33
    },
    recipeInfoButtonOn:{
        width:100,
        height:30,
        backgroundColor:  "white",
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        height:40
        
    },
    recipeInfoButtonOff:{
        width:100,
        height:30,
        backgroundColor:  COLORS.dishcoveryLightGrey,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    recipeInfoButtonText:{
        textTransform:'uppercase',
        fontSize:10,
        fontFamily:'Inter-SemiBold'
    }
})
    

