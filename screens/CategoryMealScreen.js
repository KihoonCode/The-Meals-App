import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
    const categoryID = props.navigation.getParam('categoryID');

    // user selected meal 
    const selectedMeals = MEALS.filter(meal =>
        meal.categoryIds.indexOf(categoryID) >= 0);

    /**
     * Renders appropriate meal based on selected category.
     */
    const renderMealItems = itemData => {
        return (
            <MealItem
                onSelected={() => {
                    props.navigation.navigate(
                        {
                            routeName: 'MealDetail',
                            params: {
                                mealId: itemData.item.id,
                                title: itemData.item.title
                            }
                        })
                }}
                title={itemData.item.title}
                bgImage={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList style={styles.temp}
                data={selectedMeals}
                renderItem={renderMealItems}
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
        alignItems: 'center'
    },
    temp: {
        width: '90%'
    }
});

export default CategoryMealScreen;