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
// import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';


const Clarifai = require('clarifai');
import ingredientContext from '../assets/ingredientContext';

const ingredientContexttest = ingredientContext
console.log(Object.keys(ingredientContexttest))

// this is what predictions looks like
const test = [{"app_id": "main", "id": "ai_NDbbpCv1", "name": "vegetable", "value": 0.85894936}, {"app_id": "main", "id": "ai_0wh0dJkQ", "name": "sweet", "value": 0.84374344}, {"app_id": "main", "id": "ai_CB8hsS3T", "name": "tomato", "value": 0.818536}, {"app_id": "main", "id": "ai_MXDTmFwg", "name": "pastry", "value": 0.7858727}, {"app_id": "main", "id": "ai_2GpnH7qr", "name": "pie", "value": 0.77650344}, {"app_id": "main", "id": "ai_GC6FB0cQ", "name": "sauce", "value": 0.73884183}, {"app_id": "main", "id": "ai_ZHtk2LRK", "name": "potato", "value": 0.71506745}, {"app_id": "main", "id": "ai_w68d36Ks", "name": "bread", "value": 0.6768341}, {"app_id": "main", "id": "ai_FnZCSVMH", "name": "cheese", "value": 0.6329733}, {"app_id": "main", "id": "ai_2TfRbKFW", "name": "apple", "value": 0.63126016}, {"app_id": "main", "id": "ai_KWmFf1fn", "name": "meat", "value": 0.62617254}, {"app_id": "main", "id": "ai_PWmbd19r", "name": "cream", "value": 0.62375104}, {"app_id": "main", "id": "ai_DlGsqbPZ", "name": "chocolate", "value": 0.6160008}, {"app_id": "main", "id": "ai_kTsPMX36", "name": "wine", "value": 0.60891885}, {"app_id": "main", "id": "ai_JQV7LmzG", "name": "berry", "value": 0.5990676}, {"app_id": "main", "id": "ai_jvVxlhLh", "name": "chicken", "value": 0.5872288}, {"app_id": "main", "id": "ai_t3Kx2jXG", "name": "soup", "value": 0.57429004}, {"app_id": "main", "id": "ai_JXCD9lx9", "name": "strawberry", "value": 0.5479225}, {"app_id": "main", "id": "ai_v65hxxVH", "name": "raspberry", "value": 0.5395222}, {"app_id": "main", "id": "ai_TtT3b8dX", "name": "cherry", "value": 0.5351037}]
const test2 = [["1", {"app_id": "main", "id": "ai_NDbbpCv1", "name": "vegetable", "value": 0.8975079}]]
console.log("LOGS")
console.log(test["1"])
console.log(test2["0"]["1"])


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
    console.log("object detection")
    console.log(predictions.outputs[0].data.concepts )
    this.setState({ predictions: predictions.outputs[0].data.concepts });
  };

  render() {
    const { hasCameraPermission, predictions } = this.state;
    console.log(predictions)
    let wanttokeep = Object.keys(ingredientContexttest)
    //let wanttokeep =["vegetable","sweet"]
    let filteredpredictions =  Object.values(Object.fromEntries(Object.entries(predictions).filter(([k, pred]) => wanttokeep.some(culturalIngred => culturalIngred == pred.name))));
    console.log("Did it filter?")
    console.log(filteredpredictions)
    console.log(predictions.map(predictions => ({key: `${predictions.name} Accuracy: ${predictions.value}`,})))
    console.log(filteredpredictions.map(filteredpredictions => ({key: `${filteredpredictions.name} Accuracy: ${filteredpredictions.value}`,})))


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
                  renderItem={({ item ,index}) => {return (
                    <TouchableOpacity>
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