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


const RecipeCardDetails = ({recipeItem}) => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Name & Bookmark */}
            <View
                style = {{
                    flex:1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Text 
                    style = {{
                        width: "70%",
                        color: COLORS.black,
                        ...FONTS.h3,
                        fontSize: 18,
                    }}>
                    {recipeItem.name}
                </Text>
                <Image 
                source={recipeItem.isBookmarked ? icons.bookmarkFilled : icons.bookmark}
                style={{
                    width: 20,
                    height: 20,
                    marginRight: SIZES.base,
                    tintColor: COLORS.darkGreen
                }}
                />
            </View>

            {/* Duration, Mins, and Origin */}
            <Text style={{
                color: COLORS.lightGray,
                ...FONTS.body4
            }}>
                {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>

        </View>
    )
}

const RecipeCardInfo = ({recipeItem}) => {
    if(Platform.OS === 'ios'){
        return(
            <RecipeCardDetails
            recipeItem={recipeItem}
            />
            // <BlurView
            //     blurType="dark"
            //     style={styles.recipeCardContainer}
            // >
            //     <RecipeCardDetails
            //         recipeItem={recipeItem}
            //     />
            // </BlurView>
        )
    } else {
        return(
            <View style={{
                ...styles.recipeCardContainer, 
                backgroundColor: COLORS.transparentDarkGray
            }}
            >
                <RecipeCardDetails
                    recipeItem={recipeItem}
                />
            </View>
        )
    }
    console.log("making blur - attempt")
}

const DishCard = ({containerStyle, recipeItem, onPress}) => {
    return (
        <TouchableOpacity
        style={{
            height: 350,
            width: 250,
            marginTop: SIZES.radius,
            marginRight: 20,
            borderRadius: SIZES.radius,
            ...containerStyle
        }}
        onPress={onPress}
        >
             {/* Background Image   */}
            <ImageBackground source={recipeItem.image}
                resizeMode="cover"
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: SIZES.radius
                }}>

                {/*Card Info*/}  
                <RecipeCardInfo
                    recipeItem={recipeItem}
                />
            </ImageBackground>
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
    }
})

export default DishCard;