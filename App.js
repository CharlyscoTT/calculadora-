import React, {useState, useEffect}from "react";
import {StyleSheet,View, Text, SafeAreaView, StatusBar, YellowBox, Button} from "react-native";
import Forms from "./src/components/Forms";
import Footer from "./src/components/Footer";
import Resultado from "./src/components/Resultado";
import colors from "./src/utils/colors";

YellowBox.ignoreWarnings(['Picker has been extracted']);


export default function App (){

 const [n1, setN1]= useState(null);
 const [n2, setN2]= useState(null);
 const [operacion, setOperacion]= useState(null);
 const [resultado, setResultado]= useState(null);
 const [error, setError]= useState("");

useEffect(() => {
  if(n1 && n2 && operacion)calculation();
  else reset();
  
  }, [n1, n2, operacion])

  const calculation=() =>{
    reset();
    if(!n1){
      setError("Introduce el número 1.");
    } else if (!n2){
      setError("Introduce el número 2.");
    } else if (!operacion){
      setError("Selecciona la operacion.");
    } else {

      if (operacion =="resta"){
        const fee = (n1 - n2);

        setResultado({
 
          info: fee,
        })
      }else if(operacion == "suma"){
        const fee = (n1 + n2);

        setResultado({
          info: fee,
        })
      } else if(operacion == "multiplicacion"){
        const fee = (n1*n2);
      
        setResultado({
          info: fee,
        })         
      }else if(operacion == "division"){
        const fee = (n1/n2);
      
        setResultado({
          info: fee,
        })         
      }
    }
  }

 const reset=() =>{
   setError("");
   setResultado(null);
 }
  return(
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.background}/>
      <Text style={styles.titleApp}>Calculator</Text>
      <Forms 
        setN1={setN1}
        setN2={setN2}
        setOperacion={setOperacion}
      />
    </SafeAreaView>
    <Resultado >
       n1={n1}
       n2={n2}
       operacion={operacion}
       resultado={resultado}
       error={error}
    </Resultado>
     <Footer calculation={calculation}/>
    </>
  );
}

const styles = StyleSheet.create({
   SafeArea:{
     height: 290,
     alignItems: "center",
   },
   background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width:"100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position:"absolute",
    zIndex: -1,
   },

   titleApp:{
    fontSize: 25,
    fontWeight:"bold",
    color:"#000",
    marginTop: 20,
   },  
});