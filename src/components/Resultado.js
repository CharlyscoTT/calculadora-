import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Resultado(props) {
    const{n1,n2,operacion,resultado, error}=props;
    console.log(props);
    
    return (
        <View style={styles.content}>
             {resultado && (
                 <View style={styles.boxcontent}>
                     <Text style={styles.title }>Info De la operacion</Text>
                     <DataResult value={`Entre ${n1} y ${n2}  hicieron ${operacion} dando como resultado ${resultado.info} `}/>
                 </View>
             )}
            <View>
             <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    )
}

function DataResult(props){
    const {value}=props
    return(
        <View>
            <Text style={styles.text}>{value}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({

    error:{
        textAlign:"center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 22,
    },

    text:{
        textAlign:"right",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 22,
    },

    content:{
        marginTop: 10,
        marginHorizontal: 15, 
    },

    boxContent:{
        padding: 30,
    },

    title:{
        textAlign:"center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 28,
    },
    value:{
        flexDirection: "row",
        justifyContent:"center",
        marginBottom:5,
    }

})


