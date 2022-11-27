// import React from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Button
// } from 'react-native';

// const ScanScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Scan screen</Text>
//       <Button
//         title="Go to Additional context"
//         onPress={() => navigation.navigate('Additional Context', { screen: 'Additional Context' })}
//       />
//     </View>
//   )
// }

// export default ScanScreen;

import React from 'react';
import { Text, View, TouchableOpacity ,FlatList} from 'react-native';
//import { Camera, Permissions } from 'expo';
// import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';

const Clarifai = require('clarifai');
import ingredientContext from '../../assets/ingredientContext';
const ingredientContexttest = ingredientContext
const clarifai = new Clarifai.App({
  apiKey: "0b4d4f4f0a604f5da3889f2139e48efc",
});
process.nextTick = setImmediate;


export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    predictions: [],
    filteredpredictions: []
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
    //console.log(predictions)
    let wanttokeep = Object.keys(ingredientContexttest)
    //photo of black screen normally has these as guesses, so this is easier test
    //let wanttokeep =["vegetable","sweet"] 
    let filteredpredictions =  Object.values(Object.fromEntries(Object.entries(predictions).filter(([k, pred]) => wanttokeep.some(culturalIngred => culturalIngred == pred.name))));
    //console.log("Did it filter?")
    //console.log(filteredpredictions)

    // TODO show a message differentiating if image recognition didn't work, vs if the result is not in cultural context list of ingredients

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
                  data={filteredpredictions.map(filteredpredictions => ({
                    key: `${filteredpredictions.name} Accuracy: ${filteredpredictions.value}`,
                  }))}
                  renderItem={({ item }) => {return (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Additional Context",{itemKey: item.key})}>
                    <Text style={{ paddingLeft: 15, color: 'white', fontSize: 20 }}>{item.key}</Text>
                    </TouchableOpacity>
                  )}}
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
                  Scan{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}