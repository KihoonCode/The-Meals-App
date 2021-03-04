import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
    const renderData = itemData => {
        return (
            <View style={styles.category}>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                renderItem={renderData}
            />
            <Button
                title="Go to CategoryMeals"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals'
                    })}
                }

            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    category: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;