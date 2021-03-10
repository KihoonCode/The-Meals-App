import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = props => {
    const categoryID = props.navigation.getParam('categoryID');

    const selectedMeals = MEALS.filter(meal =>
        meal.categoryIds.indexOf(categoryID) >= 0);
    
    const renderMealItems = itemData => {
        return (
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
        );
    }
    
    return (
        <View style={styles.screen}>
            <FlatList 
                data={selectedMeals}
                renderItem={renderMealItems}
            />
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
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default CategoryMealScreen;