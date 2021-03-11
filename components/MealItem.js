import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelected}>
                <View style={styles.mealContainer}>
                    <View style={styles.mealMain}>
                        <ImageBackground
                            style={styles.bgImage}
                            source={{ url: props.bgImage }}
                        >
                            <View style={styles.title}>
                                <Text>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.mealDetail}>
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '80%',
        backgroundColor: '#f7f7f7'
    },
    mealContainer: {
        width: '100%'
    },
    mealMain: {
        height: '90%'
    }, 
    title: {

    },
    bgImage: {
        height: '100%',
        width: '100%'
    }
    ,
    mealDetail: {   
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
});

export default MealItem;