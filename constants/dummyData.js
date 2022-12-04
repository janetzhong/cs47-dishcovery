import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "30 mins",
        difficulty: "Easy",
        country: "Italy",
        culturalContext: "This pasta shape seems to have first appeared in 1700s. Giulio Giacchero, author of a book on the economy of Genoa in the 1700’s, writes about trenette (another name for linguini) served with pesto, green beans and potatoes. \n\n He says it was the typical festive dish of Ligurian families of the time. In those days of course, the pasta would have been made mostly by hand and most probably with eggs. But it’s interesting that linguini with pesto, beans and potatoes is still a popular dish in Liguria today. This pasta shape seems to have first appeared in 1700s. Giulio Giacchero, author of a book on the economy of Genoa in the 1700’s, writes about trenette (another name for linguini) served with pesto, green beans and potatoes. \n\n He says it was the typical festive dish of Ligurian families of the time. In those days of course, the pasta would have been made mostly by hand and most probably with eggs. But it’s interesting that linguini with pesto, beans and potatoes is still a popular dish in Liguria today.",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        duration: "50 mins",
        difficulty: "Medium",
        country: "Malaysia",
        culturalContext: "Chicken satay (middle), called satay ayam in Malaysia, comes from the northeast coast of that country and is marinated in a spice market's worth of seasonings, from ginger to fennel to coriander. Satay is the quintessence of fast food in southeast Asia. \n\nYou'll find it sizzling over hot coals practically 24 hours a day—at night markets, in busy hawker stalls, or offered by mobile vendors who prepare it to order. These cooks carry bamboo rods across their shoulders, balancing a basketful of the marinated meat and condiments on one side and a small grill filled with hot coals on the other.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "30 mins",
        difficulty: "Hard",
        country: "Malaysia",
        culturalContext: "There are many styles of laksa; it is most commonly differentiated into 3 categories: Curry, Asam, and Sarawak. Sarawak Laksa is a comforting Malaysian noodle soup that is spicy, bright, warming, and full of flavour.\n\nIts origins began as Chinese men would set out onto the spice trade route and settle in their new villages, marrying the local Malay women. The result was a blending together of Chinese and Malay heritage. It is common to find traditional Chinese dishes that have been reformed using local spices and ingredients, thus creating a hybrid cuisine.",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        duration: "1 hour",
        difficulty: "Easy",
        country: "Malaysia",
        culturalContext: "Nasi Lemak's historical origins are humble—a cheap and easy meal for farmers to fill up on for a long day on the soil. It involves rice cooked in coconut milk (santan), served on a banana leaf and flavoured with local galangal roots and pandan leaves.\n\nWhat’s made it such an iconic and popular dish today, however, is its sheer diversity. Nasi Lemak can be typically served with boiled eggs, cucumber, onions and anchovies, but also with an array of delicious side-dishes to bring it to life.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
        viewers: [

        ]
    },

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}