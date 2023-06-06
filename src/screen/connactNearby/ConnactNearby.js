import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import IconButton from '../../component/button/IconButton'
import { styles } from './ConnactNearbyStyle'
import Location from '../../assets/svg-icons/location.svg'



const ConnactNearby = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>ConnactNearby</Text>
            <View style={{ position: 'relative' }}>
                <View style={{ position: 'absolute', zIndex: 10, top: 10, right: 20 }}>
                    <Location />
                </View>
                <TextInput style={styles.input} placeholder='dsgfjgdjkfgauergfjs8fdsgiuerghregh' />
            </View>
            <Text style={styles.title}>Time</Text>
            <View style={styles.flexContainer}>
                <View>
                    <Text style={styles.text}> From </Text>
                    <IconButton text='3464' />
                </View>
                <View>
                    <Text style={[styles.text, { textAlign: 'right', marginRight: 10 }]}>To</Text>
                    <IconButton text='3464' />
                </View>
            </View>
            <Text style={styles.title}>
                Message
            </Text>
            <View style={styles.messageContainer}>
                <Text style={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum dignissim odio nisi, semper magna et ultricies tempor interdum. A elementum viverra at pulvinar hendrerit id. Faucibus massa, ridiculus quis lectus commodo.
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Explafe It!</Text>
                </View>
            </View>

        </View>
    )
}

export default ConnactNearby
