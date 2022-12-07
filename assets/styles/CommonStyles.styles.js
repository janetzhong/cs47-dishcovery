import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../../constants"

export default StyleSheet.create({
    headerView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    outerView: {
        flex: 1,
        backgroundColor: 'blue',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingTop: '1%',
    },
    whiteBackground: {
        flex: 1,
        backgroundColor: COLORS.white,
    }
});