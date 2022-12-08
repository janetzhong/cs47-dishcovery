import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import ingredientContext from '../assets/ingredientContext';
import {ExpandableListView} from 'react-native-expandable-listview';
import styles from '../assets/styles/ContextFlow.style';
import bittermelon from '../assets/images/bittermelon.jpg';
import cardamom from '../assets/images/cardamom.png';
import lemongrass from '../assets/images/lemongrass.png';
import bittermelon_origins from "../assets/images/bittermelon_origins.png";
import commonStyles from '../assets/styles/CommonStyles.styles';
import textStyles from '../assets/styles/TextStyles.style';
import { COLORS } from '../constants';

const ingredientContexttest = ingredientContext

export default class App extends React.Component {
  
  
  handleItemClick({index}) {
    console.log(index);
  };

  handleInnerItemClick({innerIndex, item, itemIndex}) {
    console.log(innerIndex);
  };
  
  capitalizeFirstLetters(str){
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
  }

  render() {
    const { itemKey } = this.props.route.params;
    const itemKeySplit = itemKey.split(" Accuracy");     // ['bitter melon, ' Accuracy 0.99...'] This is not a good way to do it because it requires Accuracy be in that string but i was confused how to send filteredPredictions to params and so i sent item.key instead
    const itemName = itemKeySplit.shift(); 
    const capItemName = this.capitalizeFirstLetters(itemName);
    this.useEffect(capItemName)
    switch(ingredientContexttest[itemName]["image"]) {
      case 'bittermelon':
        var imageName = bittermelon
        break;
      case 'cardamom':
        var imageName = cardamom
        break;
      case 'lemongrass':
        var imageName = lemongrass
    }
    switch(ingredientContexttest[itemName]["image"]) {
      case 'bittermelon':
        var innerImageName = bittermelon
        break;
      case 'cardamom':
        var innerImageName = cardamom
        break;
      case 'lemongrass':
        var innerImageName = lemongrass
    }
    const CONTENT = [
      {
        id: '97',
        categoryName: 'Flavor/Texture Profile',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                {/* <View style={styles.expandImageBox}>
                  <Image source={imageName} style={styles.expandImage}></Image>
                </View> */}
                <View style={styles.textContainerStyle}>
                  <Text style={styles.TextStyle}>{ingredientContexttest[itemName]["flavor profile/texture"]}</Text>
                </View>
              </View> 
            ),
          },
        ],
      },
      {
        id: '96',
        categoryName: 'Alternate Names',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                {/* <View style={styles.expandImageBox}>
                  <Image source={innerImageName} style={styles.expandImage}></Image>
                </View> */}
                <View style={styles.textContainerStyle}>
                  {Object.entries(ingredientContexttest[itemName]["new alternate names"]).map(([key, value]) => (
                      <Text style={{fontSize: 15, lineHeight: 25}}>
                      <Text style={{fontWeight: 'bold', color: COLORS.dishcoveryOrange}}>{key}: </Text>
                      <Text style={{fontWeight: 'normal'}}>{value}</Text>
                      </Text>
                  ))}
                </View>
              </View> 
            ),
          },
        ],
      },
      {
        id: '95',
        categoryName: 'Cultural Context',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                <View style={styles.textContainerStyle}>
                  {Object.entries(ingredientContexttest[itemName]["new cultural context"]).map(([key, value]) => (
                      <Text style={{fontSize: 15, lineHeight: 25}}>
                      <Text style={{fontWeight: 'bold', color: COLORS.dishcoveryOrange}}>{key}: </Text>
                      <Text style={{fontWeight: 'normal'}}>{value}</Text>
                      </Text>
                  ))}
                </View>
              </View> 
            ),
          },
        ],
      },
      {
        id: '94',
        categoryName: 'Origins and Geography',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                <View style={styles.expandImageBox}>
                  <Image source={bittermelon_origins} style={styles.expandImage}></Image>
                </View>
                <View style={styles.textContainerStyle}>
                  <Text style={styles.TextStyle}>{ingredientContexttest[itemName]["origins and geography"]}</Text>
                </View>
              </View> 
            ),
          },
        ],
      },
      {
        id: '93',
        categoryName: 'Health Benefits',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                {/* <View style={styles.expandImageBox}>
                  <Image source={imageName} style={styles.expandImage}></Image>
                </View> */}
                <View style={styles.textContainerStyle}>
                  <Text style={styles.TextStyle}>{ingredientContexttest[itemName]["health benefits"]}</Text>
                </View>
              </View> 
            ),
          },
        ],
      }
    ];
    
    function handleItemClick({index}) {
      console.log(index);
    };
  
    function handleInnerItemClick({innerIndex, item, itemIndex}) {
      console.log(innerIndex);
    };
    
    return (
      <SafeAreaView style={commonStyles.whiteBackground}>
        <View style={commonStyles.outerView}>
          <View style={styles.container}>
            <Text style={[textStyles.subheading, {textAlign: 'center'}]}>{capItemName}</Text>
            <View style={styles.imageBox}>
              <Image source={imageName} style={styles.image}></Image>
            </View>
            <ExpandableListView
              data={CONTENT}
              ExpandableListViewStyles={styles.container}
              itemContainerStyle={styles.outerExpandBox}
              innerItemContainerStyle={styles.innerExpandBox}
              customChevron={require('../assets/icons/chevron.jpeg')}
            />
            
            <TouchableOpacity style={styles.buttonContainer} activeOpacity = { .5 } onPress={ () => this.props.navigation.navigate("Search Results")}>
              <Text style={styles.ButtonTextStyle}> {this.capitalizeFirstLetters(`Explore ${itemName} Recipes`.toLowerCase())} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      


    );
  }
}