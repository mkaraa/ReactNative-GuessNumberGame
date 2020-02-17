import React from 'react';
import {StyleSheet,TextInput} from 'react-native';

const Input = props => {
    return (
        <TextInput
            {...props}
            style={{...styles.input, ...props.style}}>
        </TextInput>
    );
};

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10
    }
});

export default Input;