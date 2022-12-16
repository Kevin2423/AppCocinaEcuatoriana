import * as React from
    "react";
import {
    TouchableOpacity,
    StyleSheet, Text
} from
    "react-native";
export function
    Tituloing(props) {
    return (
        <Text
            style={styles.texto}>
            Ingredientes
        </Text>
    )
}
const styles =
    StyleSheet.create({
        texto: {
            fontSize: 30,
            color: "blue",
        },
    });