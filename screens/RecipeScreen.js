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


const RecipeScreen = ({ navigation, route }) => {

    const [selectedRecipe, setSelectedRecipe] = React.useState(null)
    const [showIngredients, setShowIngredients] = useState(false);
    const [showRecipe, setShowRecipe] = useState(true);
    const [showContext, setShowContext] = useState(false);

    React.useEffect(() => {
        let { recipe } = route.params
        console.log(recipe)
        setSelectedRecipe(recipe)
    }, [])

    return (
    <ScrollView style={styles.container}>
        {/* Recipe Image Background */}
        <ImageBackground style={styles.recipeImage} resizeMode={'cover'} source={selectedRecipe?.image}>
            {/* Back button */}
            <TouchableOpacity style={styles.backbuttoncircle} onPress={() => navigation.goBack()}>
            <Image source={icons.back} style={styles.backbuttonarrow}/>
            </TouchableOpacity>
        </ImageBackground>

        {/* Toggle Recipe Info - 3 buttons :-) */}
        <View style={styles.buttonContainer}>
            {/* INGREDIENT BUTTON */}
            <TouchableOpacity style={showIngredients? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(true) & setShowRecipe(false) & setShowContext(false)}} >
            <Text style={styles.recipeInfoButtonText}>Ingredients</Text>
            </TouchableOpacity>
            {/*Here we will return the view when state is true and will return false if state is false*/}

            {/* RECIPE BUTTON */}
            <TouchableOpacity style={showRecipe? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(false) & setShowRecipe(true) & setShowContext(false)}} >
            <Text style={styles.recipeInfoButtonText}>Cook!</Text>
            </TouchableOpacity>
            {/*Here we will return the view when state is true and will return false if state is false*/}

            {/* CONTEXT BUTTON */}
            <TouchableOpacity style={showContext? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(false) & setShowRecipe(false) & setShowContext(true)}} >
            <Text style={styles.recipeInfoButtonText}>Context</Text>
            </TouchableOpacity>
            {/*Here we will return the view when state is true and will return false if state is false*/}
        </View>

        <View style={{margin:5}}>
            <Text style={{fontSize:15, textAlign:'center', fontFamily:'Inter-Bold',textTransform: 'uppercase'}}> {selectedRecipe?.name} </Text>
        </View>

        <View style={{margin:5}}>
            <Text style={{fontSize:15, textAlign:'center', fontFamily:'Inter-Regular'}}> {selectedRecipe?.difficulty} {selectedRecipe?.duration}  {selectedRecipe?.country} </Text>
        </View>

        {showIngredients ? (<Text>yes to ingredient</Text>): null}
        {showRecipe ? (<Text>yes to recipe</Text>): null}
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
    

