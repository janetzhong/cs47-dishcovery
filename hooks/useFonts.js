import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
    InterBlack: require('../assets/fonts/Inter-Black.ttf'),
  });