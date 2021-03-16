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
        width: '100%',
        backgroundColor: '#d3d3d3',
        marginVertical: '5%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealContainer: {

    },
    mealMain: {
        height: '90%',
        justifyContent: 'flex-end'
    }, 
    title: {
        backgroundColor: '#d3d3d3'
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
        paddingHorizontal: 10,
        backgroundColor: '#d3d3d3'
    }
});

export default MealItem;