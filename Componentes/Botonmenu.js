import * as React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function Botonmenu(props) {

  const { onPress, text } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
  
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#33FFF2",
    padding: 10,
  },
});
