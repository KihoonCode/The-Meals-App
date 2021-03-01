import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is FilterScreen!</Text>
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

export default FilterScreen;