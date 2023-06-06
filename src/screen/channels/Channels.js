import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { channels } from '../../constant/Constent'
import { styles } from './ChannelsStyle'

const Channels = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.channel}>Channels</Text>

            {
                channels.map((item, index) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.title}>{item.work}</Text>
                            <View style={styles.flexContainer}>
                                <View style={styles.crcal}>
                                </View>
                                <Text style={styles.member}>{item.members}</Text>
                            </View>
                            <View><Text>...</Text></View>
                            <View style={[styles.flexContainer, { justifyContent: 'space-between' }]}>
                                <View>
                                    <Text style={styles.person}>{item.person}</Text>
                                    <Text style={styles.person}>{item.person1}</Text>
                                </View>
                                <View>
                                    <Text style={styles.text}>Yeah, I have been thinking about it for a long time...</Text>
                                    <Text style={styles.text}>Hey girls, Wassup!!</Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Channels
