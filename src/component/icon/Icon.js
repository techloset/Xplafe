import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './IconStyle'

const Icon = ({ img }) => {
    return (
        <View style={styles.bgColor}>
            <TouchableOpacity>
                {img}
            </TouchableOpacity>
        </View>
    )
}

export default Icon
