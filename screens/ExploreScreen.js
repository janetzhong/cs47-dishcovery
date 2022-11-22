import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const ExploreScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>AWelcome to Dishcovery!</Text>
            <Text>This is the Explore Ingredients Screen {"\n"}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Scan")}
            >
                <Text>Navigate to Scan Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Saved")}
            >
                <Text>Navigate to Saved Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExploreScreen;