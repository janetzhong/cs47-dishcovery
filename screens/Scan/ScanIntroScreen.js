import React from 'react';
import squashSoup from '../../assets/images/squashsoup.jpg'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

const ScanIntroScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <View
                style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0000ff'
                }}
            >
                <Image source={squashSoup}></Image>
                <Text>Place your item within the frame and wait for the scan to complete.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Scan Screen")}>
                <Text>Begin Scan</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScanIntroScreen;