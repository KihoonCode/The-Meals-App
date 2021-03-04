import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
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