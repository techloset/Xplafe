import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { styles } from './ProfileStyle'
import image from '../../assets/images/image-1.png'


const Profile = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.profile}>Profile</Text>
            <View style={styles.flex}>
                <View style={styles.profileImage}>
                    <Image source={image} />
                </View>
            </View>

            <View>
                <Text>Name</Text>
                <TextInput style={styles.input} placeholder='Marie Antoinette' />
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder='marieantoinette@gmail.com' />
            </View>

        </View>
    )
}

export default Profile
