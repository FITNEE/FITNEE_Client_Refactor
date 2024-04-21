import { colors } from "@/libs/Colors";
import { isDarkModeAtom } from "@/states/GlobalStates";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Animated } from "react-native";

interface ProgressProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressProps) {
  const [isDark] = useAtom(isDarkModeAtom);
  //   const [progress, setProgress] = useState(0);
  const animatedWidth = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);
  //   const handleButtonClick = () => {
  //     if (progress < 100) {
  //       setProgress(progress + 25);
  //     }
  //   };
  //   const handleButtonBack = () => {
  //     if (progress > 0) {
  //       setProgress(progress - 25);
  //     }
  //   };
  return (
    <Container>
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
      {/* <Text>ProgressBar {progress}%</Text>
      <Button title="progress" onPress={handleButtonClick} />
      <Button title="backProgress" onPress={handleButtonBack} /> */}
    </Container>
  );
}
const Container = styled.View`
  width: 100%;
  height: 16px;
  justify-content: center;
  align-items: center;
`;
const Progress_Bar = styled.View<{ isDark: boolean }>`
  width: 90%;
  height: 8px;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.grey9 : colors.grey2};
  border-radius: 10px;
  overflow: hidden;
  /* margin-top: 4px;
  margin-left: 5%; */
`;
const ProgressBarFill = styled(Animated.View)<{ isDark: boolean }>`
  height: 100%;
  border-radius: 10px;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.grey8 : colors.grey4};
`;
const Button = styled.Button``;
