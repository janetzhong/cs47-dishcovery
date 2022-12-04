import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';



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
        height:60,
        marginLeft:30,
        marginRight:30,
        marginBottom:130,
        marginTop: 5,
        padding:0,
        justifyContent: 'center',
        backgroundColor:'#DD6135',
        borderRadius:20,
        flexDirection:'column',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    TextStyle: {
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'Inter-Regular'
    },
    ButtonTextStyle: {
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Inter-Regular',
    },
    messageContainer:{
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      height:40,
      width:"100%",
      marginLeft:30,
      marginRight:30,
      marginBottom:0,
      //marginTop:-20,
      padding:10,
      backgroundColor:'transparent',
      borderRadius:10,
      flexDirection:'column',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.05,
      shadowRadius: 5,
    },
    messageText:{
      color: "white",
      textAlign: 'center',
      alignText: "center",
      marginBottom: 5
    },
    progressBarContainer:{
      width: "85%",
    },
    scanningGif:{
      flex:1.6,
      resizeMode:'contain', 
      alignSelf:'center',
      alignItems: "center", 
      justifyContent: "center",       
      // borderWidth: 1,
      //  borderColor: 'red',
       height: '30%',
        width: '90%',
        opacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      
    },
    scanningImage:{
      flex:1.6,
      resizeMode:'contain', 
      alignSelf:'center',
      alignItems: "center", 
      justifyContent: "center",       
      // borderWidth: 1,
      //  borderColor: 'red',
       height: '30%',
        width: '90%',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      
    }
    
});
