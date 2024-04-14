import { View, Text } from "react-native";
import { colors } from "@/libs/Colors";
import { isDarkModeAtom } from "@/states/GlobalStates";
import { useAtom } from "jotai";
import styled from "styled-components/native";
import { useState } from "react";

export default function Cards() {
  const [exercises, setexercises] = useState([
    { name: "데드리프트" },
    { name: "스쿼트" },
    { name: "러닝" },
    { name: "달리기" },
  ]);
  const [isDark] = useAtom(isDarkModeAtom);
  return (
    <View>
      <Container
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 25 }}
      >
        <Wrapper>
          {exercises.map((item, i) => (
            <Card isDark={isDark} key={i}>
              <ExerciseView
                isDark={isDark}
                source={"@/assets/images/PNGs/ExerciseThumb/1.png"}
              />
              <ExerciseName isDark={isDark}>{item.name}</ExerciseName>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </View>
  );
}

const Container = styled.ScrollView`
  margin-top: 22px;
  width: 100%;
  /* padding: 0px 16px; */
  margin-bottom: 76px;
`;
const Wrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`;
const Card = styled.TouchableOpacity<{ isDark: boolean }>`
  width: 160px;
  height: 187px;
  border-radius: 20px;
  background-color: ${colors.white};
  align-items: center;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.grey9 : colors.white};
`;
const ExerciseView = styled.Image<{ isDark: boolean }>`
  width: 128px;
  height: 128px;
  border-radius: 100px;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.black : colors.grey1};
  margin: 16px 0px 10px 0px;
`;
const ExerciseName = styled.Text<{ isDark: boolean }>`
  font-size: 15px;
  font-family: "SemiBold";
  line-height: 22.5px;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
