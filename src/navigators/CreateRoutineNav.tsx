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
  // const index = useNavigationState((state) => state.index);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 16,
        },
        // animation: fade,
        // headerStyle: {
        //   backgroundColor: "#f3f3f3", // 배경 색상을 원하는 색상 값으로 변경해주세요, 예를 들어: '#f4511e'
        // },
        animationEnabled: false,
        // presentation: "transparentModal",
        // headerMode: "screen",
        // title: "루틴 등록",
      }}
    >
      <Stack.Screen
        name="CreateRoutine_1"
        options={{
          headerShown: true,
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
