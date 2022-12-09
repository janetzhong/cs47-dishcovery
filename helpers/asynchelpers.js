
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveObject = async object => {
  try {
    await AsyncStorage.setItem('myObject', JSON.stringify(object));
  } catch (error) {
    console.error(error);
  }
};

const getObject = async () => {
  try {
    const data = await AsyncStorage.getItem('myObject');
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.error(error);
  }
};

// const saveAndUpdate = async () => {
//   const key = 'initialObject';
//   // Save the initial object to AsyncStorage
//   await saveToAsyncStorage(key, initialObject);
//   // Retrieve the object from AsyncStorage
//   let savedObject = await getFromAsyncStorage(key);
//   // Update the 'isLiked' property of the object
//   savedObject.isLiked = false;
//   // Console log 
//   console.log(savedObject)
//   // Save the updated object to AsyncStorage
//   await saveToAsyncStorage(key, savedObject);
// };

const updateIsLiked = (items, id) => {
    // Use the 'Array.prototype.map()' method to create a new array of items
    // with the updated 'isLiked' value
    const updatedItems = items.map((item) => {
      // If the item's 'id' matches the provided 'id', set 'isLiked' to '!isLiked'
      // otherwise, return the item as-is
      if (item.id === id) {
        return { ...item, isLiked: !item.isLiked };
      } else {
        return item;
      }
    });
    return updatedItems;
  };


  export { updateIsLiked ,saveObject, getObject};