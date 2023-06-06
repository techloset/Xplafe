import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    mainContainer: {
        paddingHorizontal: 24,

    },
    channel: {
        fontSize: 30,
        fontFamily: 'nunito',
        fontWeight: '600',
        textAlign: 'center'
    },
    container: {
        borderWidth: 2,
        borderRadius: 12,
        paddingLeft: 22,
        paddingRight: 12,
        paddingBottom: 19,
        borderColor: 'rgba(255, 57, 116, 1)',
        marginTop: 15,
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '400',
        fontFamily: 'nunito',
        color: 'rgba(55, 35, 41, 1)'
    },
    crcal: {
        backgroundColor: 'green',
        width: 17,
        height: 17,
        borderRadius: 50,
    },
    member: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'nunito',
        color: 'rgba(55, 35, 41, 1)'
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(55, 35, 41, 1)',
    },
    person: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'nunito',
        color: 'rgba(255, 57, 116, 1)'
    }
})