import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateRoutine_1 from "@/pages/CreateRoutine/CreateRoutine_1";
import CreateRoutine_2 from "@/pages/CreateRoutine/CreateRoutine_2";
import CreateRoutine_3 from "@/pages/CreateRoutine/CreateRoutine_3";
import CreateRoutine_4 from "@/pages/CreateRoutine/CreateRoutine_4";
import CreateRoutine_5 from "@/pages/CreateRoutine/CreateRoutine_5";
import HomeNav from "./HomeNav";

const Stack = createStackNavigator();

export default function CreateRoutineNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 16,
        },
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="CreateRoutine_1"
        options={{
          headerShown: false,
        }}
        component={CreateRoutine_1}
      />
      <Stack.Screen name="CreateRoutine_2" component={CreateRoutine_2} />
      <Stack.Screen name="CreateRoutine_3" component={CreateRoutine_3} />
      <Stack.Screen name="CreateRoutine_4" component={CreateRoutine_4} />
      <Stack.Screen
        name="CreateRoutine_5"
        options={{ headerShown: false }}
        component={CreateRoutine_5}
      />
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeNav}
      />
    </Stack.Navigator>
  );
}
