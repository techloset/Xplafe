import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Arrow from '../../assets/svg-icons/left-arrow.svg'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Arrow />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '400',
        color: 'rgba(55, 35, 41, 1)'
    }
})