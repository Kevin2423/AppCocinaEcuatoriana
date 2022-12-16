import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Botonmenu } from "../Componentes/Botonmenu";
import { Tituloing } from '../Componentes/Tituloing';
import { Titulopre } from '../Componentes/Titulopre';
import { Titulo } from '../Componentes/Titulo';
export default function Receta1({ navigation }) {
  return (
    <View style={styles.container}>
      <Titulo texttitulo="Chifles"></Titulo>
      <Image style={styles.imagendis}
        source={require("../src/imagen/Receta1.jpg")} />
      <Tituloing />
      <Text>{`
Dos platanos
Aceite
Sal`}
      </Text>
      <Titulopre />
      <Text>{`
1. Corte los plátanos en rodajas muy finas.
2. Fríalos en abundante aceite muy caliente hasta que estén dorados.
3. Escúrralos muy bien sobre papel absorbente y espolvoréelos con
sal fina.
4. Sírvalos muy calientes como aperitivo. `}
      </Text>
      <StatusBar style="auto" />
      <Botonmenu
        text="Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagendis: {
    width: 400,
    height: 250,
    resizeMode: "contain",
  },
});