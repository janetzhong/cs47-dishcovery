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
import { Ionicons } from '@expo/vector-icons';
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
import DishCard from '../components/DishCard.js';

import commonStyles from '../assets/styles/CommonStyles.styles';

console.log(dummyData.trendingRecipes)

const ExploreScreen = ({ navigation }) => {

    function renderSearchBar() {
        const [text, setText] = useState('');

        return (
            <SafeAreaView style={{
                flexDirection: 'row', height: 60,
                width: '100%'}}>

                <View style={{
                flexDirection: 'row',
                flex:1,
                height: 45,
                //width: 360,
                alignItems: 'center',
                marginTop:15,
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
                            flex:1,
                            fontFamily:'Inter-Regular',
                            fontSize:14,paddingVertical:10
                        }}
                        placeholderTextColor={COLORS.gray}
                        placeholder="Search ingredient, dish or cuisine"
                        clearButtonMode='while-editing'
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                        onSubmitEditing= {() => {setText('') ; navigation.navigate("Search Results")}}
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
                return (<View style={{marginTop : SIZES.paddingsmall}}>
                    <Text style={[styles2.subheading, {marginLeft: '5%', paddingLeft: '1%'}]}>
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
                                containerStyle = {{marginLeft: index == 0 ? 30 : 6}}
                                recipeItem={item}
                                onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}/>
                            )
                        }}/>
                    </View>
                )
            }

   function renderTrendingSection() {
        return (
            <View style={{marginTop : 0}}>
                <Text style={[styles2.subheading, {marginLeft: '5%', paddingLeft: '1%'}]}>
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
                            marginLeft: index == 0 ? 30 : 6
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
        <SafeAreaView style={commonStyles.whiteBackground}>
            <View>
                <FlatList
                    data={dummyData.categories}
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View>
                            <View style={[commonStyles.outerView, {marginTop: 0}]}>
                            {renderSearchBar()}
                            </View>
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
        color:COLORS.dishcoveryNearBlack}, 
    filterButton:{
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