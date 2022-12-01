import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
      flex:1,
      flexDirection:'column'
    },
    imageBox:{
      flex: 6,
      marginLeft:30,
      marginRight:30,
      marginTop:60,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      // borderWidth: 1,
      // borderColor: 'blue',        
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    image:{
      flex: 1,
      width: '100%',
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      },
    imageText:{
      flex: 1,
      marginLeft:30,
      marginRight:30,
      marginBottom:30,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      padding:20,
      // borderWidth: 1,
      // borderColor: 'red',
      backgroundColor:'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
  },
    buttonContainer:{
      height:80,
      marginLeft:30,
      marginRight:30,
      marginBottom:60,
      padding:30,
      backgroundColor:'#DD6135',
      borderRadius:20,
      flexDirection:'column'
    },
    TextStyle: {
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'Inter-SemiBold'
    },
    ButtonTextStyle: {
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Inter-SemiBold',
    }
});
