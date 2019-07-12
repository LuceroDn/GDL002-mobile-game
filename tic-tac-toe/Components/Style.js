import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    containerSplash: {
        flex: 1,
        backgroundColor: '#02aaff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 250,
    },

    container: {
        flex: 1,
        backgroundColor: '#02aaff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tile: {
        borderWidth: 10,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",

    },
    wrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tileX: {
        color: "black",
        fontSize: 95,

    },

    tileO: {
        color: "#fff",
        fontSize: 75,
    },

    player1: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        justifyContent: "center",
        marginTop: 35,
        // marginLeft: 50,
        
    },

    player2: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        alignItems: "center",
        marginTop: 35,
        // marginLeft: 20,
        
    },

    scoreP1: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        // alignItems: "center",
        // marginLeft: 90,
    },

    scoreP2: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        // alignItems: "center",
        // marginLeft: 60,
        
    }

})  