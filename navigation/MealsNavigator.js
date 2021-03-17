import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

import Colors from '../constants/Colors';

const isAndroid = Platform.OS === 'android';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : ''
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const bottomTabConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={23}
                        color={isAndroid ? 'white' : tabInfo.tintColor}
                    />
                );
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                        name='ios-star'
                        size={23}
                        color={isAndroid ? 'white' : tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const BottomTab = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabConfig, {
        activeColor: Colors.primaryColor,
        shifting: true
    })
    : createBottomTabNavigator(bottomTabConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

const FilterMenu = createStackNavigator({
    FilterMenu: FilterScreen
});

const DrawerNav = createDrawerNavigator({
    HomeMenu: BottomTab,
    FilterMenu: FilterMenu
});

export default createAppContainer(DrawerNav);