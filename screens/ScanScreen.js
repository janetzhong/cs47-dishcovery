import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const ScanScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Scan an Unfamiliar Ingredient!{"\n"}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Explore")}
            >
                <Text>Navigate to Explore Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Saved")}
            >
                <Text>Navigate to Saved Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScanScreen;