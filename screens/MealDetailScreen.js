import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

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
        headerTitle: title
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