import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

    /**
     * Returns touchable category menu that is linked to corresponding detail menu.
     */
    const renderData = itemData => {
        return (
            <CategoryGridTile
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryID: itemData.item.id
                        }
                    })
                }}
                title={itemData.item.title}
                color={itemData.item.color}
            />
        );
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderData}
        />
    );
};

// Top header style 
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}

// Ovearall Style
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default CategoriesScreen;