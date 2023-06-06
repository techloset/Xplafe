import { Image, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './LoginStyle'
import image from '../../assets/images/image.png'
import Google from '../../assets/svg-icons/google_icon.svg'
import Icon from '../../component/icon/Icon'
import Facebook from '../../assets/svg-icons/facebook_icon.svg'
import Apple from '../../assets/svg-icons/apple_icon.svg'
import Button from '../../component/button/Button'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.mainContainer}>
            <Image style={{ width: '100%' }} source={image} />
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={{width:'88%'}}>
                    <Text style={styles.lable}>Email</Text>
                    <TextInput style={styles.input} keyboardType='email-address' />
                    <Text style={styles.lable}>Password</Text>
                    <TextInput style={styles.input} keyboardType='visible-password' />
                    <Text style={[styles.lable, { textAlign: 'right', fontWeight: 700, marginTop: -4 }]}>
                        Forgot Password?
                    </Text>
                </View>

                <View style={styles.iconContainer}>
                    <Icon img={<Google />} />
                    <Icon img={<Facebook />} />
                    <Icon img={<Apple />} />
                </View>
                <View style={styles.button}>
                    <Text style={styles.text}>New Here? <Text style={{ fontWeight: 700 }}>Register</Text></Text>
                    <Button title='Login' />
                </View>
            </View>
        </View>
    )
}
export default Login
