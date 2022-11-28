import React from 'react';
import bitterMelon from '../../assets/images/bittermelon.jpg'
import ProgressBar from 'react-native-animated-progress';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from '../../assets/styles/ScanFlow.style.js'

const ScanCompleteScreen = ({ route, navigation }) => {
    const { itemKey } = route.params;
    const itemKeySplit = itemKey.split(" Accuracy");
    const itemName = itemKeySplit.shift(); 
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <View>
                <Text>Searching for item</Text>
                <ProgressBar progress={100} height={7} backgroundColor="orange" />
            </View>
            <View
                style={styles.container}
            >
                <Image source={bitterMelon}></Image>
                <Text>Scanning in Progress</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Additional Context",{itemKey: itemKey})}>
                      <Text style={{ paddingLeft: 15, color: 'white', fontSize: 20 }}>{itemName}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScanCompleteScreen;