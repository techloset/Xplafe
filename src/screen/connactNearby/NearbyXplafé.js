import { TextInput, Text, View } from 'react-native'
import React from 'react'
import { styles } from './ConnactNearbyStyle'
import IconButton from '../../component/button/IconButton'
import Location from '../../assets/svg-icons/location.svg'
import Header from '../../component/header/Header'


const NearbyXplafé = () => {
    return (
        <View style={styles.mainContainer}>
            <Header title='NearbyXplafé' />
            <View style={{ position: 'relative' }}>
                <View style={{ position: 'absolute', zIndex: 10, top: 10, right: 20 }}>
                    <Location />
                </View>
                <TextInput style={styles.input} placeholder='dsgfjgdjkfgauergfjs8fdsgih' />
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
                    <Text style={styles.buttonText}>Connect Here!</Text>
                </View>
            </View>
        </View>
    )
}

export default NearbyXplafé
