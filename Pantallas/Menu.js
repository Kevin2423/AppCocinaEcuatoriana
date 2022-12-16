import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Botonmenu } from "../Componentes/Botonmenu";

const Menu =({navigation})=>{
    return(
        <View>
            <Text>Menu</Text>
            
            <Botonmenu
                text="Receta 1"
                onPress={() => navigation.navigate('Receta1')}    
            />
            <Botonmenu
                text="Receta 2"
                onPress={() => navigation.navigate('Receta2')}    
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu