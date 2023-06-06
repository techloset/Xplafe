import { StyleSheet, TextInput, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/header/Header'
import { styles } from './womenWorkStyle'
import Icon from '../../assets/svg-icons/icon-1.svg'

const WomenWork = () => {

    const workData = [
        {
            name1: 'Nina',
            name2: 'Nelly',
            text: 'ello. Have you just arrived at the camp? I’m Nina.',
            text1: 'y name is Nelly. Nice to meet you.'
        },
        {
            name1: 'Nina ',
            name2: 'Nelly',
            text: ' Oh, OK… Where are you from?',
            text1: ' I’m from Greece, but I’ve lived in this area for a long time. You?'
        },
        {
            name1: 'Nina',
            name2: 'Nelly',
            text: ' I’m from the USA. I’m here on holidays.',
            text1: ' Are you from a big family?'
        },
        {
            name1: 'Nina',
            name2: 'Nelly',
            text: ' No, there are just five of us- me, my sister, my brother and my parents. What about you?',
            text1: ' I’ve got two sisters.'
        },
        {
            name1: 'Nina',
            name2: 'Nelly',
            text: ' Oh, that’s nice. What do you usually do in your free time? Do you have any hobbies?',
            text1: ' I love hanging out with my friends or stay at home and read a good book. I don’t have a lot of hobbies. I enjoy playing volleyball… What about you?'
        },
        {
            name1: 'Nina',
            name2: 'Nelly',
            text: ' I love it, too…What’s your favourite subject?',
            text1: ' I like Biology. I love learning about the Environment'
        },
        {
            name1: 'Nina',
            name2: 'Nelly',
            text: ' Me too. I think we are going to be great friends!',
            text1: ' So do I!'
        },
    ]


    return (
        <View style={styles.mainContainer}>
            <Header title='Women at Work 💼' />
            {
                workData.map((item, index) => {
                    return (
                        <View>
                            <View style={styles.container} key={index}>
                                <Text style={[styles.title, { color: 'rgba(255, 57, 116, 1)' }]}>{item.name1}</Text>
                                <Text style={[styles.title, { color: 'rgba(55, 35, 41, 1)' }]}>{item.text}</Text>
                            </View>
                            <View style={styles.container}>
                                <Text style={[styles.title, { color: 'rgba(255, 57, 116, 1)' }]}>{item.name2}</Text>
                                <Text>:</Text>

                                <Text style={[styles.title, { color: 'rgba(55, 35, 41, 1)' }]}>{item.text1}</Text>
                            </View>
                        </View>
                    )
                })
            }
            <View style={[styles.clander, { position: 'relative' }]}>
                <View style={{ position: 'absolute', right: 15, top: 12, }}><Icon /></View>
                <TextInput style={styles.input} placeholder='kdfhgkhdkf' />
            </View>
        </View>
    )
}

export default WomenWork
