import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Menu from "../Pantallas/Menu"
import Receta1 from "../Pantallas/Receta1";
import Receta2 from "../Pantallas/Receta2";

const Stack = createNativeStackNavigator();

const Navegar = () => {
    return(

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Menu"
                component={Menu}
                />
                <Stack.Screen
                name="Receta1"
                component={Receta1}
                />
                <Stack.Screen
                name="Receta2"
                component={Receta2}
                />
            </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navegar