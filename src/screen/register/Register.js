import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import image from '../../assets/images/image.png'
import Google from '../../assets/svg-icons/google_icon.svg'
import Icon from '../../component/icon/Icon'
import Facebook from '../../assets/svg-icons/facebook_icon.svg'
import Apple from '../../assets/svg-icons/apple_icon.svg'
import Button from '../../component/button/Button'
import { styles } from './RegisterStyle'
import Reac, { useState } from 'react'
import Locations from '../../component/locations/Locations'
// import auth from '@react-native-firebase/auth';
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')





    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <Image style={{ width: '100%' }} source={image} />
                <View style={styles.container}>
                    <Text style={styles.title}>Register</Text>
                    <View style={{ width: '88%' }}>
                        <Text style={styles.lable}>Full Name</Text>
                        <TextInput style={styles.input} keyboardType='name-phone-pad' />
                        <Text style={styles.lable}>Email</Text>
                        <TextInput style={styles.input} keyboardType='email-address' />
                        <Text style={styles.lable}>Password</Text>
                        <TextInput style={styles.input} keyboardType='visible-password' />
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon img={<Google />} />
                        <Icon img={<Facebook />} />
                        <Icon img={<Apple />} />
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>New Here? <Text style={{ fontWeight: 700 }}>Register</Text></Text>
                        <Button title='Register' />
                    </View>
                </View>
            </View>
            <Locations/>
        </ScrollView>

    )
}

export default Register
