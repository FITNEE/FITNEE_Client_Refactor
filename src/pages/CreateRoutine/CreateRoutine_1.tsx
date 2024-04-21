import ProgressBar from "@/components/CreateRoutine/ProgressBar";
import { isDarkModeAtom, isTabVisibleAtom } from "@/states/GlobalStates";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ScreenLayout from "@/components/home/ScreenLayout";
import LeftArrow from "@/assets/images/SVGs/icon/LeftArrow.svg";
import styled from "styled-components/native";
import { colors } from "@/libs/Colors";
import { NavigationProps } from "../Home/EmptyRoutine";

interface ButtonProps {
  isDark: boolean;
  isActive: boolean;
}

export default function CreateRoutine_1() {
  const isFocus = useIsFocused();
  const [isDark] = useAtom(isDarkModeAtom);
  const setTabVisible = useSetAtom(isTabVisibleAtom);
  const navigation = useNavigation<NavigationProps>();
  const [progress, setProgress] = useState(0);
  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 25);
    }
  };
  const handleButtonBack = () => {
    if (progress === 0) {
      navigation.goBack();
    } else if (progress > 0) {
      setProgress(progress - 25);
    }
  };
  useEffect(() => {
    isFocus && setTabVisible(false);
  }, [isFocus]);
  return (
    <ScreenLayout>
      <Header>
        <BackButton onPress={handleButtonBack}>
          <LeftArrow
            width={24}
            height={24}
            color={isDark ? colors.white : colors.black}
          />
        </BackButton>
        <Title>루틴 등록</Title>
      </Header>
      <ProgressBar progress={progress} />
      <Content></Content>
      <NextButton isActive={true} onPress={handleButtonClick}>
        <ButtonText isActive={true}>다음</ButtonText>
      </NextButton>
    </ScreenLayout>
  );
}
const Header = styled.View<{ isDark: boolean }>`
  flex-direction: row;
  width: 100%;
  height: 56px;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.black : colors.grey1};
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* margin-top: 44px; */
`;
const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 5%;
`;
const Title = styled.Text<{ isDark: boolean }>`
  font-family: "SemiBold";
  font-size: 17px;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
const Content = styled.View`
  width: 100%;
  height: 80%;
`;
const NextButton = styled.TouchableOpacity<ButtonProps>`
  width: 90%;
  height: 52px;
  align-items: center;
  justify-content: center;
  /* margin-top: 165px; */
  margin-left: 5%;
  background-color: ${(props: ButtonProps) =>
    props.isActive ? colors.main1 : props.isDark ? colors.grey7 : colors.grey3};
  border-radius: 10px;
`;
const ButtonText = styled.Text<ButtonProps>`
  font-size: 17px;
  font-family: "SemiBold";
  color: ${(props: ButtonProps) =>
    props.isActive
      ? props.isDark
        ? colors.black
        : colors.white
      : props.isDark
      ? colors.white
      : colors.black};
`;
