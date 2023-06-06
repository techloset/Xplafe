import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { locationData } from '../../constant/Constent'
import Locations from '../../component/locations/Locations'
import { styles } from './AroundStyle'

const Around = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title,{marginTop:32,}]}>Xplafés Around </Text>
            <Text style={[styles.title,{marginBottom:60,}]}>You</Text>
            <View>
                {
                    locationData.map((item, index) => {
                        return (
                            <Locations key={index} locationData={item} />
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Around
