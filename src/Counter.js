import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <View>
            <Text>{count}</Text>
            <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
            <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
            <Button title="Reset" onPress={() => dispatch({ type: 'RESET' })} />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({})