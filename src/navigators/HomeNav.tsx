import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/pages/Home/Home";
import CreateRoutineNav from "./CreateRoutineNav";

const Stack = createStackNavigator();

export default function HomeNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateRoutine" component={CreateRoutineNav} />
    </Stack.Navigator>
  );
}
