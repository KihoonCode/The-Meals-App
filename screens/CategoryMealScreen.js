import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
    const categoryID = props.navigation.getParam('categoryID');

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID);

    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Text>This is CategoryMealScreen! (2)</Text>
            <Button
                title='Go to MealDetail'
                onPress={() => props.navigation.navigate({routeName: 'MealDetail'})}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default CategoryMealScreen;