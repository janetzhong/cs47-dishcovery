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
import { Ionicons } from '@expo/vector-icons';
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
import DishCard from '../components/DishCard.js';
import { TrendingCard } from "../components"
import { styles } from "react-native-expandable-listview/src/styles";


console.log(dummyData.trendingRecipes)

const ExploreScreen = ({ navigation }) => {

    function renderSearchBar() {
        return (
            <SafeAreaView style={{
                flexDirection: 'row', height: 60,
                width: 420}}>

                <View style={{
                flexDirection: 'row',
                flex:1,
                height: 45,
                //width: 360,
                alignItems: 'center',
                marginTop:15,
                marginLeft: SIZES.paddingsmall,
                paddingLeft: SIZES.paddingsmall,
                borderRadius: 10,
                //justifyContent: 'space-between',
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
                            fontSize:13,
                            paddingVertical:10
                        }}
                        placeholderTextColor={COLORS.gray}
                        placeholder="Search for an ingredient, dish or cuisine"
                    />
                </View>

                <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                paddingTop: 10,
                }}>
                    <Ionicons name="options" size={30} color= {COLORS.dishcoveryOrange} justifyContent={'center'} alignItems={'center'} marginLeft= {30}/>
                </View>
                    {/* <TouchableOpacity style = {styles.filterButton}><Ionicons name="options" size={25} color= {COLORS.black} /></TouchableOpacity> */}

            </SafeAreaView>
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
}, filterButton:{
    flex:1,
    borderRadius:99,
    height:50,
    width:50,
    // margin:10,
    // alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 40,
    backgroundColor: COLORS.dishcoveryOrange,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.dishcoveryOrange,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
}
})