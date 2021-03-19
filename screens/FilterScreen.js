import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from '../components/CustomHeaderButton';

const FilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is FilterScreen!</Text>
        </View>
    );
};

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Drawer Nav'
                    iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default FilterScreen;