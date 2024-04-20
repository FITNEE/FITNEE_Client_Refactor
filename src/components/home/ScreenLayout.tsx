import styled from "styled-components/native";
import React from "react";
// import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";
import { isDarkModeAtom } from "@/states/GlobalStates";
import { colors } from "@/libs/Colors";
import { Platform, StatusBar } from "react-native";

interface ScreenLayoutProps {
  children: React.ReactNode;
}

/**
 * ScreenLayout 은 화면에 SafeAreaView & StatusBar을 설정하기 위해 개발된 컴포넌트입니다
 * @props children - 화면에 넣을 ReactNode
 * @example
 * <ScreenLayout>
 *  <View>
 *    <Text>hello</Text>
 *  </View>
 * </ScreenLayout>
 */

export default function ScreenLayout({ children }: ScreenLayoutProps) {
  const [isDark] = useAtom(isDarkModeAtom);

  return (
    <ScreenContainer isDark={isDark}>
      <StatusBar
        backgroundColor={isDark ? colors.black : colors.grey1}
        barStyle={isDark ? "light-content" : "dark-content"}
      />
      {children}
    </ScreenContainer>
  );
}

export const ScreenContainer = styled.SafeAreaView<{ isDark: boolean }>`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  /* 안드로이드 상태바 높이만큼 패딩-탑 추가 */
  flex: 1;
  width: 100%;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.black : colors.grey1};
`;
