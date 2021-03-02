import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is MealDetailScreen!</Text>
            <Button
                title="Inspect detail screen"
                onPress={() => { }}
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

export default MealDetailScreen;