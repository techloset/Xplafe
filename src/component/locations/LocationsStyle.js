import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        paddingVertical: 11,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF3974',
        paddingHorizontal: 18,
        marginBottom: 15,
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'nunito',
        fontWeight: '600',
        color: 'rgba(255, 57, 116, 1)'
    },
    country: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'nunito',
        color: 'rgba(55, 35, 41, 1)'
    }

})
