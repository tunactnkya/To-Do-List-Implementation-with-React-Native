import { StyleSheet } from "react-native"


export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },

    title: {
        fontSize: 30,
        padding: 10,
        color: 'white'

    },

    subtitle: {
        fontSize: 20,
        marginTop: 5,
        color: '#666',
        color: 'white'
    },

    input: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 18,
        marginTop: 32
    },
    buttonContainer: {
        backgroundColor: '#D8D88D',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 8,
        alignSelf: 'flex-end'
    },
    buttonText: {
        fontSize: 18,
    },

    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 32
    },

    taskContainer: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12
    },

    taskText: {
        color: 'white',
        fontSize: 18,

    },

    taskDelete: {
        width: 23,
        height: 23,
        borderRadius: 15,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },

    taskDeleteText: {
        color: 'white'
    }
})