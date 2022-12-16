import * as React from
    "react";
import {
    TouchableOpacity,
    StyleSheet, Text
} from
    "react-native";
export function Titulopre() {
    return (
        <Text
            style={styles.texto}>
            Preparación
        </Text>
    )
}
const styles =
    StyleSheet.create({
        texto: {
            fontSize: 30,
            color: "green"
            ,
        },
    });