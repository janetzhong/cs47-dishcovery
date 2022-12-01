import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import ingredientContext from '../assets/ingredientContext';
const ingredientContexttest = ingredientContext

const AdditionalContextScreen = ({ route, navigation }) => {
  const { itemKey } = route.params;
  const itemKeySplit = itemKey.split(" Accuracy");     // ['bitter melon, ' Accuracy 0.99...'] This is not a good way to do it because it requires Accuracy be in that string but i was confused how to send filteredPredictions to params and so i sent item.key instead
  const itemName = itemKeySplit.shift(); 
  //console.log(itemName)
  //console.log(ingredientContexttest[itemName]["Flavor Profile/Texture"])
  
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
          <Text>item: {JSON.stringify(itemName)}</Text>
          <Text>Flavor Profile/Texture: {JSON.stringify(ingredientContexttest[itemName]["Flavor Profile/Texture"])}</Text>
          <Text>health benefits: {JSON.stringify(ingredientContexttest[itemName]["health benefits"])}</Text>
          <Text>cultural context: {JSON.stringify(ingredientContexttest[itemName]["cultural context"])}</Text>
        </View>
      );
}

export default AdditionalContextScreen;