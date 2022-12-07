import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image
} from 'react-native';
import styles from '../assets/styles/Profile.style';
import textStyles from '../assets/styles/TextStyles.style';
import commonStyles from '../assets/styles/CommonStyles.styles';
import {icons, COLORS, SIZES } from "../constants"
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.whiteBackground}>
            <View style={commonStyles.outerView}>
                <View style={styles.mainView}>
                    <Text style={textStyles.subheading}>Allergies and Sensitivities</Text>
                    <Text style={textStyles.body}>Unless you remove these preferences, recipes using these ingredients will not be shown to you.</Text>
                    <View style={styles.filterGroupContainer}>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Gluten ✓</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Peanuts ✓</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Tree Nuts ✓</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Spinach ✓</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Honey ✓</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Banana ✓</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.addMoreView}><Text style={textStyles.linkText}>Add More ›</Text></View>
                    <Text style={textStyles.subheading}>Dietary Preferences</Text>
                    <View style={styles.filterGroupContainer}>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Kosher ✓</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Halal ✓</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                            <Text style={styles.ButtonTextStyle}>Vegan ✓</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.addMoreView}><Text style={textStyles.linkText}>Add More ›</Text></View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;