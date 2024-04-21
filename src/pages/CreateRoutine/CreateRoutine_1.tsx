import { isTabVisibleAtom } from "@/states/GlobalStates";
import { useIsFocused } from "@react-navigation/native";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { View, Text } from "react-native";

export default function CreateRoutine_1() {
  const isFocus = useIsFocused();
  const setTabVisible = useSetAtom(isTabVisibleAtom);
  useEffect(() => {
    isFocus && setTabVisible(false);
  }, [isFocus]);
  return (
    <View>
      <Text>CreateRoutine_1</Text>
    </View>
  );
}
