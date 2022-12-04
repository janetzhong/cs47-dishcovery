import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';



export default StyleSheet.create({
  container: {
      flex:1,
      flexDirection:'column',
    },
    outerExpandBox:{
        marginLeft:30,
        marginRight:30,
        marginTop:35,
        marginBottom:-16,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,     
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: "white",
    },
    innerExpandBox:{
        marginLeft:30,
        marginRight:30,
        marginTop:0,
        borderTopRightRadius:0,
        borderTopLeftRadius:0,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,     
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: "white",
    },
    TextStyle: {
        fontSize: 15,
        textAlign: 'left',
        fontFamily: 'Inter-Regular',

    },
    textContainerStyle: {
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10,
    },
    imageBox:{
        //flex: 6,
        marginLeft:30,
        marginRight:30,
        marginTop:10,
        marginBottom:-160,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,  
        height:"50%"
        // borderWidth: 1,
        // borderColor: 'blue',        
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 0,
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
    },
    image:{
    //flex: 1,
    width: '100%',
    height:"60%",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,  
    },
    buttonContainer:{
        height:50,
        marginLeft:30,
        marginRight:30,
        marginBottom:130,
        marginTop: 10,
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
    ButtonTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Inter-Regular',
      },
});
