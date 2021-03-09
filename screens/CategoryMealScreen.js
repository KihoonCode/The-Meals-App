import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is CategoryMealScreen! (2)</Text>
            <Button
                title='Go to MealDetail'
                onPress={() => props.navigation.navigate({ routeName: 'MealDetail' })}
            />
        </View>
    );
};

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryID = navigationData.navigation.getParam('categoryID');

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID);

    return {
        headerTitle: selectedCategory.title,
    };
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default CategoryMealScreen;