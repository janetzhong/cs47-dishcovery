import React from "react"
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from "react-native"


import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
import DishCard from '../components/DishCard.js';
import { TrendingCard } from "../components"


console.log(dummyData.trendingRecipes)

const ExploreScreen = ({ navigation }) => {

    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray,
                    }}
                    source={icons.search}
                />
                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search Recipes"
                />
            </View>
        )
    }
    function renderCardSection() {
                return (
                    <View
                    style={{
                        marginTop : SIZES.padding
                    }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Inter-Bold',
                                marginHorizontal: SIZES.padding,
                                ...FONTS.h2
                            }}>
                            Based On Your Scans
                        </Text>
                        <FlatList 
                        data={dummyData.trendingRecipes}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item, index}) => {
                            return (
                                <DishCard
                                containerStyle = {{
                                    //marginLeft: 0 // line dif than code, 54:20 
                                    marginLeft: index == 0 ? SIZES.padding : 0
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

    function renderTrendingSection() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    For Chinese New Year
                </Text>

                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard
                                containerStyle={{
                                    marginLeft: index == 0 ? SIZES.padding : 0
                                }}
                                recipeItem={item}
                                onPress={() => navigation.navigate("Recipe", { recipe: item })}
                            />
                        )
                    }}
                />
            </View>
        )
    }
    
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderSearchBar()}
                        {renderCardSection()}
                        {renderTrendingSection()}
                    </View>
                }
                ListFooterComponent={
                    <View style={{ marginBottom: 100 }}></View>
                }
            />
        </SafeAreaView>
    )
}

export default ExploreScreen;