import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({

    mainContainer: {
        paddingLeft: 29,
        paddingRight: 34
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        fontFamily: 'nunito',
        color: 'rgba(55, 35, 41, 1)',
        textAlign: 'center'
    },
    arrow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 31
    },
    container: {
        backgroundColor: 'rgba(255, 57, 116, 1)',
        paddingVertical: 23,
        paddingHorizontal: 34,
        marginBottom: 18,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        color: 'rgba(255, 236, 208, 1)',
    }
})
