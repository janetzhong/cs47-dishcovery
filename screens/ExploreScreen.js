import React from 'react';
import {StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
//import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import DishCard from '../components/DishCard.js';
// import images from "./constants/images"

import {SIZES} from "../constants/theme.js" // colors, fonts, icons
const loginBackground = require("../assets/images/system/login-background.png")


// RECIPE PICS 

const recipe = require("../assets/images/recipes/recipe.png")
const spagetti = require("../assets/images/recipes/spagetti.png")
const satay = require("../assets/images/recipes/satay.png")
const laksa = require("../assets/images/recipes/laksa.png")
const nasiLemak = require("../assets/images/recipes/nasi-lemak.webp")

const profile = require("../assets/images/dummy_profiles/profile.png")
const UserProfile1 = require("../assets/images/dummy_profiles/profile-pic-1.png")
const UserProfile2 = require("../assets/images/dummy_profiles/profile-pic-2.png")
const UserProfile3 = require("../assets/images/dummy_profiles/profile-pic-3.png")
const UserProfile4 = require("../assets/images/dummy_profiles/profile-pic-4.png")
const UserProfile5 = require("../assets/images/dummy_profiles/profile-pic-5.png")
const UserProfile6 = require("../assets/images/dummy_profiles/profile-pic-6.png")
const UserProfile7 = require("../assets/images/dummy_profiles/profile-pic-7.png")
const UserProfile8 = require("../assets/images/dummy_profiles/profile-pic-8.png")
const UserProfile9 = require("../assets/images/dummy_profiles/profile-pic-9.png")
const UserProfile10 = require("../assets/images/dummy_profiles/profile-pic-10.png")

//ICONS

const bookmark = require("../assets/icons/bookmark.png")
const bookmarkFilled = require("../assets/icons/bookmark-filled.png")
const home = require("../assets/icons/home.png")
const search = require("../assets/icons/search.png")
const settings = require("../assets/icons/settings.png")
const back = require("../assets/icons/back.png")
const rightArrow = require("../assets/icons/right-arrow.png")

const anchovy = require("../assets/icons/anchovy.png")
const cheese = require("../assets/icons/cheese.png")
const chicken = require("../assets/icons/chicken.png")
const chilli = require("../assets/icons/chilli.png")
const coriander = require("../assets/icons/coriander.png")
const egg = require("../assets/icons/egg.png")
const garlic = require("../assets/icons/garlic.png")
const lemongrass = require("../assets/icons/lemongrass.png")
const oil = require("../assets/icons/oil.png")
const onion = require("../assets/icons/onion.png")
const pasta = require("../assets/icons/pasta.png")
const pepper = require("../assets/icons/pepper.png")
const potato = require("../assets/icons/potato.png")
const rice = require("../assets/icons/rice.png")
const shallot = require("../assets/icons/shallot.png")
const salt = require("../assets/icons/salt.png")
const sugar = require("../assets/icons/sugar.png")
const shrimp = require("../assets/icons/shrimp.png")
const tomato = require("../assets/icons/tomato.png")

const trendingRecipes = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: spagetti,
        duration: "30 mins",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        author: {
            profilePic: UserProfile5,
            name: "Maria",
        },
        ingredients: [
            {
                id: 1,
                icon: pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: UserProfile1
            },
            {
                id: 2,
                profilePic: UserProfile2
            },
            {
                id: 3,
                profilePic: UserProfile3
            },
            {
                id: 4,
                profilePic: UserProfile3
            }
        ]
    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image: satay,
        duration: "50 mins",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: UserProfile8,
            name: "Mandy",
        },
        ingredients: [
            {
                id: 1,
                icon: chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: UserProfile5
            },
            {
                id: 2,
                profilePic: UserProfile4
            },
            {
                id: 3,
                profilePic: UserProfile1
            },
            {
                id: 4,
                profilePic: UserProfile2
            },
            {
                id: 5,
                profilePic: UserProfile3
            }
        ]
    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: laksa,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: UserProfile9,
            name: "Jessie",
        },
        ingredients: [
            {
                id: 1,
                icon: garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: nasiLemak,
        duration: "1 hour",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: UserProfile7,
            name: "Ali Baba",
        },
        ingredients: [
            {
                id: 1,
                icon: chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
        viewers: [

        ]
    },

]

console.log("SPAGHETTITEST")
console.log(spagetti)


//React Native
const ExploreScreen = ({ navigation }) => {
    function renderCardSection() {
        return (
            <View
            style={{
                marginTop : SIZES.padding
            }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        fontFamily: 'Inter',
                        fontSize: 30
                    }}>
                    Based On Your Scans
                </Text>
                <FlatList 
                data={trendingRecipes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item, index}) => {
                    return (
                        <DishCard
                        containerStyle = {{
                            marginLeft: 0 // line dif than code, 54:20 
                        }}
                        recipeItem={item}
                        onPress={() => navigation.navigate
                        ("Recipe", { recipe: item})}
                        />
                    )
                }}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderCardSection()}
            <Text style={styles.red}>Welcome to Dishcovery!</Text>
            <Text>This is the Explore Ingredients Screen {"\n"}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Scan")}
            >
                <Text>Navigate to Scan Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Saved")}
            >
                <Text>Navigate to Saved Screen</Text>
            </TouchableOpacity>
        </View>
    )
    //}
}

//CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    blue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
      fontFamily: "Inter",
      fontSize: 30
    },
  });

export default ExploreScreen;