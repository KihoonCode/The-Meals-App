import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is CategoriesScreen!</Text>
            <Button
                title="Inspect detail screen"
                onPress={() => {props.navigation.navigate('Categories')}}
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

export default CategoriesScreen;