import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        
        <View style={styles.header}>
            <Text style={styles.title}>My TodoApp</Text>
            <StatusBar style="auto" />
        </View>
        

    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#e78d'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold'
    }
})