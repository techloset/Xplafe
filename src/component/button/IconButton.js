import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Clander from '../../assets/svg-icons/clander.svg'

const IconButton = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.text}</Text>
            <Clander />
        </View>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 175,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
    }
})