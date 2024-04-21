import { colors } from "@/libs/Colors";
import { isDarkModeAtom } from "@/states/GlobalStates";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Animated } from "react-native";

export default function ProgressBar() {
  const [isDark] = useAtom(isDarkModeAtom);
  const [progress, setProgress] = useState(0);
  const animatedWidth = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);
  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 25);
    }
  };
  const handleButtonBack = () => {
    if (progress > 0) {
      setProgress(progress - 25);
    }
  };
  return (
    <View>
      <Text>ProgressBar {progress}%</Text>
      <Progress_Bar>
        <ProgressBarFill
          style={{
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        />
      </Progress_Bar>
      <Button title="progress" onPress={handleButtonClick} />
      <Button title="backProgress" onPress={handleButtonBack} />
    </View>
  );
}

const Progress_Bar = styled.View<{ isDark: boolean }>`
  width: 90%;
  height: 8px;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.grey9 : colors.grey2};
  border-radius: 10px;
  overflow: hidden;
  margin-top: 4px;
`;
const ProgressBarFill = styled(Animated.View)<{ isDark: boolean }>`
  height: 100%;
  border-radius: 10px;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.grey8 : colors.grey4};
`;
const Button = styled.Button``;
