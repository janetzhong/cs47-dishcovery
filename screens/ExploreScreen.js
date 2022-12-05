import React from "react"
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet
} from "react-native"


import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
import DishCard from '../components/DishCard.js';
import { TrendingCard } from "../components"
import { styles } from "react-native-expandable-listview/src/styles";


console.log(dummyData.trendingRecipes)

const ExploreScreen = ({ navigation }) => {

    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 45,
                    alignItems: 'center',
                    marginTop:15,
                    marginHorizontal: SIZES.paddingsmall,
                    paddingHorizontal: SIZES.paddingsmall,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray,
                }}>
                <Image
                    style={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.gray,
                        marginRight:15
                    }}
                    source={icons.search}
                />
                <TextInput
                    style={{
                        fontFamily:'Inter-Regular',
                        fontSize:14,paddingVertical:10
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search for an ingredient, dish or cuisine"
                />
                
            </View>
        )
    }
    function renderCardSection() {
                return (
                    <View
                    style={{
                        marginTop : SIZES.paddingsmall
                    }}
                    >
                    <Text style={styles2.subheading}>
                            Based On Your Scans
                        </Text>
                        <FlatList 
                        data={dummyData.bitterMelonRecipes}
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
                                onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}
                                />
                            )
                        }}
                        />
                    </View>
                )
            }

   function renderTrendingSection() {
        return (
            <View style={{marginTop : 0}}>
                <Text style={styles2.subheading}>
                    Traditional Christmas food from around the world
                </Text>
                <FlatList 
                data={dummyData.christmasRecipes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item, index}) => {
                    return (
                        <DishCard
                        containerStyle = {{
                            marginLeft: index == 0 ? SIZES.padding : 0
                        }}
                        recipeItem={item}
                        onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}
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

const styles2 = StyleSheet.create({
    subheading:{
        fontFamily: 'Inter-Medium',
        marginHorizontal: SIZES.paddingsmall,
        fontSize:20,
        color:COLORS.dishcoveryNearBlack
}})