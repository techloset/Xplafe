import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({

    mainContainer: {
        paddingHorizontal: 18,
        backgroundColor: 'rgba(255, 236, 208, 1)',
        height: '100%'
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: 46,
        borderRadius: 15,
        paddingLeft: 40,
        paddingRight: 60,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Nunito',
        fontWeight: '400',
        color: 'rgba(55, 35, 41, 1)',
        marginBottom: 5,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: '400',
        fontSize: 20,
        marginVertical: 12,
        color: 'rgba(55, 35, 41, 1)',
    },
    messageContainer: {
        backgroundColor: 'white',
        height: 345,
        paddingTop: 33,
        paddingLeft: 31,
        paddingRight: 51,
        borderRadius: 17,
    },
    desc: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Nunito',
        color: 'rgba(55,35,41,1)'
    },
    button: {
        backgroundColor: 'rgba(255, 57, 116, 1)',
        borderRadius: 12,
        width: 250,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 400,
        color: 'white',
    }
})
