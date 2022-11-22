// import React from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity
// } from 'react-native';

// const ScanScreen = ({ navigation }) => {
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center'
//             }}
//         >
//             <Text>Scan an Unfamiliar Ingredient!{"\n"}</Text>
//             <TouchableOpacity
//                 onPress={() => navigation.navigate("Explore")}
//             >
//                 <Text>Navigate to Explore Screen</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={() => navigation.navigate("Saved")}
//             >
//                 <Text>Navigate to Saved Screen</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default ScanScreen;

import React from 'react';
import { Text, View, TouchableOpacity ,FlatList} from 'react-native';
//import { Camera, Permissions } from 'expo';
//import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';

const Clarifai = require('clarifai');
import ingredientContext from '../assets/ingredientContext';

const ingredientContexttest = ingredientContext
console.log(Object.keys(ingredientContexttest))

const predictions = ["pred1", "pred2"]

console.log(Object.keys(ingredientContexttest).includes("bitter melon"))

const arr1 = Object.keys(ingredientContexttest);
const arr2 = predictions;

const contains = arr1.some(element => {
  if arr2.includes(element) {
    return element;
  }
});
console.log(contains); // 👉️ true


const clarifai = new Clarifai.App({
  apiKey: APIKEY,
});
process.nextTick = setImmediate;

export default class App extends React.Component {
    state = {
      hasCameraPermission: null,
      predictions: [],
    };
    async componentDidMount() {
      const { status } = await Camera.requestCameraPermissionsAsync();
      this.setState({ hasCameraPermission: status === 'granted' });
    }
    capturePhoto = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        return photo.uri;
      }
    };
    resize = async photo => {
      let manipulatedImage = await ImageManipulator.manipulateAsync(
        photo,
        [{ resize: { height: 300, width: 300 } }],
        { base64: true }
      );
      return manipulatedImage.base64;
    };
    predict = async image => {
      let predictions = await clarifai.models.predict(
        Clarifai.FOOD_MODEL,
        image
      );
      return predictions;
    };

    objectDetection = async () => {
      let photo = await this.capturePhoto();
      let resized = await this.resize(photo);
      let predictions = await this.predict(resized);
      this.setState({ predictions: predictions.outputs[0].data.concepts });
    };
  
    render() {
      const { hasCameraPermission, predictions } = this.state;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{ flex: 1 }}
              type={this.state.type}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <FlatList
                    data={predictions.map(prediction => ({
                      key: `${prediction.name} ${prediction.value}`,
                    }))}
                    renderItem={({ item }) => (
                      <Text style={{ paddingLeft: 15, color: 'white', fontSize: 20 }}>{item.key}</Text>
                    )}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    height: '10%',
                  }}
                  onPress={this.objectDetection}
                >
                  <Text style={{ fontSize: 30, color: 'white', padding: 15 }}>
                    {' '}
                    Detect Objects{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );
      }
    }
  }