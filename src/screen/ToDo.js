import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ToDo = () => {

    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    

    const handlAddToDo =()=>{
        dispatch({
            type: 'ADD_TODO',
            payload: text
        })
        setText('');

    }
    const handleRemoveToDo =(id)=>{
        dispatch({
            type: 'DELETE_TODO',
            payload:id,
        })
    }

    return (
        <View>
            <View>
                <Text>ToDo App with Redux core</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput placeholder="Enter ToDo" 
                onChangeText={(text) => setText(text)}
                    value={text}
                />
                <Button title="Add ToDo" onPress={handlAddToDo} />
            </View>
            <View>
                <Text>ToDo List</Text>
                {todos.map(item => (
                    <View key={item.id} style={{ flexDirection: 'row' }}>
                    <Text key={item.id}>{item.title}</Text>
                    <Button title="Clear" onPress= {() => handleRemoveToDo(item.id)} />
                    </View>
                ))}
                

            </View>
        </View>
    )
}

export default ToDo

const styles = StyleSheet.create({})