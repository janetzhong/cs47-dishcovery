import React ,{useState} from "react"
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
import commonStyles from '../assets/styles/CommonStyles.styles';

console.log(dummyData.trendingRecipes)

const ExploreScreen = ({ navigation }) => {

    function renderSearchBar() {
        const [text, setText] = useState('');
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 45,
                    alignItems: 'center',
                    //marginTop:15,
                    //marginHorizontal: SIZES.paddingsmall,
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
                        flex:1,
                        fontFamily:'Inter-Regular',
                        fontSize:14,paddingVertical:10
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search for an ingredient, dish or cuisine"
                    clearButtonMode='while-editing'
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                    onSubmitEditing= {() => {setText('') ; navigation.navigate("Search Results")}}
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
                                    marginLeft: 6 // line dif than code, 54:20 
                                    //marginLeft: index == 0 ? SIZES.padding : 0
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
                            marginLeft: index == 0 ? 6 : 0
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
            style={commonStyles.whiteBackground}
        >
            <View style={commonStyles.outerView}>
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
            </View>
        </SafeAreaView>
    )
}

export default ExploreScreen;

const styles2 = StyleSheet.create({
    searchbar:{
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        marginTop:15,
        marginHorizontal: SIZES.paddingsmall,
        paddingHorizontal: SIZES.paddingsmall,
        borderRadius: 10,
        backgroundColor: "white",
        borderColor: COLORS.dishcoveryMedGrey,
        borderWidth:1,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5},
    subheading:{
        fontFamily: 'Inter-Medium',
        //marginHorizontal: SIZES.paddingsmall,
        fontSize:20,
        color:COLORS.dishcoveryNearBlack
}})