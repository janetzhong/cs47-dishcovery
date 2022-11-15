import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const SavedScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Saved Recipes{"\n"}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Explore")}
            >
                <Text>Navigate to Explore Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Scan")}
            >
                <Text>Navigate to Scan Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SavedScreen;