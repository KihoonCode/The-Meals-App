import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const mealTitle = props.navigation.getParam('title');

    return (
        <View style={styles.screen}>
            <Text>{mealTitle}</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('title');

    return {
        headerTitle: title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Favorite Icon'
                    iconName='ios-star'
                    onPress={() => console.log("Favorite Icon Pressed")}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default MealDetailScreen;