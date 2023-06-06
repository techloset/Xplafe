import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FF3974',
        flex: 1
    },
    container: {
        justifyContent: 'center',
        paddingLeft: 21,
        paddingRight:30,
    },
    title: {
        fontSize: 36,
        fontWeight: 700,
        fontFamily: "Nunito",
        color: 'rgba(255, 236, 208, 1)',
        marginTop:-40,
        marginBottom: 24,
    },
    lable: {
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'dsjg',
        color: 'rgba(255, 236, 208, 1)',
        marginBottom: 2,
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 18,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    button: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-end',
        marginTop: 40,
    },
    text: {
        fontFamily: "Nunito",
        fontSize: 16,
        fontWeight: 400,
        color: 'rgba(255, 236, 208, 1)',
    }
})
