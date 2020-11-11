import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import colors from "../utils/colors";


export default function Footer(props){
    const{calculation}=props;

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={calculation}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )

}



const styles = StyleSheet.create({

    viewFooter:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
    },

    text:{
        fontWeight: "bold",
        fontSize:25,
        color: "#fff",
        textAlign:"center", 
    },

    button:{
        
        fontSize:12,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        borderRadius: 12,
        color:"#fff",
        zIndex: -1,
    },
});
