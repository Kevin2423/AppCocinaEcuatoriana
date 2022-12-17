import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Botonmenu } from "../Componentes/Botonmenu";
import { Tituloing } from "../Componentes/Tituloing";
import { Titulopre } from "../Componentes/Titulopre";
import { Titulo } from "../Componentes/Titulo";
export default function Receta1({ navigation }) {
  return (
    <View style={styles.container}>
      <Titulo texttitulo="Ensalada de Vegetales"></Titulo>
      <Image
        style={styles.imagendis}
        source={require("../src/imagen/Receta2.jpg")}
      />
      <Tituloing />
      <Text>
        {`
2 zanahorias, Sal, pimienta
1 maduro (plátano verde maduro) para adornar
1/4 kg (1/2 b) de guisantes
1/2 kg (1 lb) de judías verdes
1 kg (2 lb) de patatas
2 tomates, Aceite`}
      </Text>
      <Titulopre />
      <Text>
        {`
PREPARACIÓN PARA 4 PERSONAS
1.- Cueza las zanahorias, las judías y las patatas
en abundante agua hirviendo.
2.- Cuando esté todo tierno, escurra las verduras y
déjelas enfriar.
3.- Corte las patatas y las zanahorias en dados,
los tomates en rodajas y las judías verdes en
trozos pequeños.
4.-Mezcle todas las verduras y alíñelas con aceite.
Salpimiente al gusto.
5.-Decore la ensalada con maduros.`}
      </Text>
      <StatusBar style="auto" />
      <Botonmenu text="Menu" onPress={() => navigation.navigate("Menu")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagendis: {
    width: 400,
    height: 250,
    resizeMode: "contain",
  },
});
