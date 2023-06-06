import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 236, 208, 1)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 144,
        height: 60,
        borderRadius: 7,
    },
    title: {
        fontFamily: 'Nunito',
        fontSize: 24,
        fontWeight: 400,
        color: 'rgba(55, 35, 41, 1)',
    }
})
