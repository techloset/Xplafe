import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './LocationsStyle'
import Arrow from '../../assets/svg-icons/right-arrow.svg'
import Icon from '../../assets/svg-icons/icon.svg'


const Locations = ({ locationData }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.container,{justifyContent:"space-between"}]}>
                <View style={styles.container}>
                    <View style={{ marginRight: 21 }}>
                        <Icon />
                    </View>
                    <View>
                        <Text style={styles.title}>{locationData?.location}</Text>
                        <Text style={styles.country}>{locationData?.address}</Text>
                    </View>
                </View>

                <View>
                    <Arrow />
                </View>
            </View>
        </View>
    )
}
export default Locations