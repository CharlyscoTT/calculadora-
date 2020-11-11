import React from "react";
import {StyleSheet,TextInput,View} from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';

export default function Forms(props){
    const  {setN1, setN2, setOperacion}=props;
  
    return(
        <> 
        <View style={styles.viewForm}>
            <View style={styles.viewImputs}>
                <TextInput placeholder="Número 1" keyboardType="numeric" style={styles.input} onChange={e => setN1(e.nativeEvent.text)}></TextInput>
                <TextInput placeholder="Número 2" keyboardType="numeric" style={styles.input} onChange={e => setN2(e.nativeEvent.text)}></TextInput>
            </View>
        </View>  
                <RNPickerSelect style={pickerSelectStyles}
                placeholder={{
                    label: "Selecciona la operación",
                    value: null,
                    color: "black",
                }}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value)=>setOperacion(value)}
                items ={[
                    {label: 'resta', value:"resta"},
                    {label: 'suma', value:"suma"},
                    {label: 'multiplicación', value:"multiplicacion"},
                    {label: 'dívision', value:"division"},
                ]}
                />
        </>
    );
}



const styles= StyleSheet.create({
    viewForm:{
        position: "absolute",
        bottom: 0,
        width: "80%",
        paddingHorizontal: 100,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 15,
        height: 200,
        justifyContent: "center",

    },

    viewImputs:{
        flexDirection: "row",
    },

    input:{
        height: 60,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width:"60%",
        marginRight: 15,
        marginLeft: -5,
        marginTop: 10,
        color: "#000",
        paddingHorizontal: 20,
    },
})


const pickerSelectStyles = StyleSheet.create({

    inputIOS:{
        fontSize:22,
        paddingHorizontal:80,
        paddingVertical:8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius:8,
        color:"black",
        paddingRight:30,
        backgroundColor:"#fff",
    },

    inputAndroid:{
        fontSize:22,
        paddingHorizontal:10,
        paddingVertical:8,
        borderWidth:0.5,
        borderColor: "grey",
        borderRadius:8,
        color:"black",
        paddingRight:30,
        backgroundColor:"#fff",
      
    }
});