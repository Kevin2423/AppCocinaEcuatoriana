import * as React from
    "react";
import {
    TouchableOpacity,
    StyleSheet, Text
} from
    "react-native";
export function Titulo(props) {
    const { texttitulo } =
        props;
    return (
        <Text
            style={styles.texto}>
            {texttitulo}
        </Text>
    )
}
const styles =
    StyleSheet.create({
        texto: {
            fontSize: 40,
            color: "black"
            ,
            alignSelf: "center"
        },
    });