import { Text, View } from 'react-native'
import { styles } from './BibleSafetyStyle'
import Safety from '../../assets//svg-icons/safety.svg'
import Arrow from '../../assets/svg-icons/right-arrow.svg'
import React from 'react'

const BibleSafety = () => {
    const safetyData = [
        {
            title: 'Safety at Work',
        },
        {
            title: 'Safety at Home',
        },
        {
            title: 'Safety at University',
        },
        {
            title: 'Women Safety Online',
        },
        {
            title: ' Safety on the Streets',
        },
    ]


    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>Bible of Safety</Text>
            <View style={styles.arrow}>
                <Safety />
            </View>
            {
                safetyData.map((item, index) => {
                    return (
                        <View style={styles.container}>

                            <Text style={styles.title}>{item.title}</Text>
                            <Arrow />
                        </View>
                    )
                })
            }
        </View>
    )
}

export default BibleSafety
