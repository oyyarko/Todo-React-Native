import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,ToastAndroid, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddTodo from './components/addTodo'

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key:'1'},
    {text: 'read book', key:'2'},
    {text: 'organize desk', key:'3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
    setTodos((prevTodos) => {
      return [
        {text: text, key:Math.random().toString()},
        ...prevTodos

      ]
    })
  }else{
    {/* 
    Alert.alert('Oops', 'Try adding more characters!', [
      {text: 'Understood', onPress: () => console.log('alert closed')}
    ]);*/}
    ToastAndroid.showWithGravityAndOffset(
      "Try adding more characters",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50
    )
  }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
        <View style={styles.content}>
          <AddTodo  submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    margin: 20
  }
});
