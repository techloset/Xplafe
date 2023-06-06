import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgba(255, 236, 208, 1)',
        // paddingHorizontal:28,
        elevation: 4,
        paddingHorizontal: 28,
        // flex: 1,
    },

    profile: {
        fontSize: 30,
        fontFamily: 'Nunito',
        fontWeight: '600',
        textAlign: 'center',
        color: 'rgba(55, 35, 41, 1)'
    },
    flex: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    profileImage: {
        backgroundColor: 'rgba(173, 111, 173, 1)',
        width: 194,
        height: 189,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 52,
    },
    input: {
        borderRadius: 10,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5
    }
})
