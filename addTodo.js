import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Add Todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add' color='#e78d'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})