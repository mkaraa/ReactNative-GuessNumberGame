import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        //'shadow' properties only work in IOS
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        //elevation : it is to work 'shadow' properties in android
        elevation:8,
        padding: 20,
        borderRadius: 20
    }
});

export default Card;