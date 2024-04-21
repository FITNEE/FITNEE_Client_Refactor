import { View, Text } from "react-native";
import styled from "styled-components/native";
import { colors } from "@/libs/Colors";
import { useAtom } from "jotai";
import { isDarkModeAtom } from "@/states/GlobalStates";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/pages/Home/EmptyRoutine";
import { ActiveProps } from "@/pages/CreateRoutine/CreateRoutine_1";
import Home from "../../assets/images/SVGs/createRoutine/Home.svg";
import Gym from "../../assets/images/SVGs/createRoutine/Gym.svg";
import { useEffect, useState } from "react";

interface NextProps {
  next: () => void;
}

export default function CreateRoutine1({ next }: NextProps) {
  const [isDark] = useAtom(isDarkModeAtom);
  const navigation = useNavigation<NavigationProps>();
  const [home, SetHome] = useState(false);
  const [fitness, SetFitness] = useState(false);
  const [select, SetSelect] = useState(false);
  const homePress = () => {
    SetHome(!home);
    if (fitness) {
      SetFitness(!fitness);
    }
  };
  const fitnessPress = () => {
    SetFitness(!fitness);
    if (home) {
      SetHome(!home);
    }
  };
  useEffect(() => {
    SetSelect(home || fitness);
  }, [home, fitness]);
  return (
    <View>
      <Content>
        <TitleContainer>
          <Title isDark={isDark}>운동하는 곳을 선택해주세요.</Title>
          <SubTitle isDark={isDark}>
            장소에 맞게 운동을 추천해 드릴게요.
          </SubTitle>
        </TitleContainer>
        <SpaceContainer>
          <SpaceItem
            isDark={isDark}
            isActive={home}
            onPress={homePress}
            style={{
              borderColor: home ? `${colors.main1}` : "transparent",
            }}
          >
            <SpaceImage>
              <Home width={117} height={117} />
            </SpaceImage>
            <SpaceName isDark={isDark} isActive={home}>
              집
            </SpaceName>
          </SpaceItem>
          <SpaceItem
            isDark={isDark}
            isActive={fitness}
            onPress={fitnessPress}
            style={{
              borderColor: fitness ? `${colors.main1}` : "transparent",
            }}
          >
            <SpaceImage>
              <Gym width={117} height={117} />
            </SpaceImage>
            <SpaceName isDark={isDark} isActive={fitness}>
              헬스장
            </SpaceName>
          </SpaceItem>
        </SpaceContainer>
      </Content>
      <NextButton
        isDark={isDark}
        isActive={select}
        onPress={next}
        disabled={!select}
      >
        <ButtonText isDark={isDark} isActive={select}>
          다음
        </ButtonText>
      </NextButton>
    </View>
  );
}
const TitleContainer = styled.View`
  width: 90%;
  margin-bottom: 121px;
`;
const Title = styled.Text<{ isDark: boolean }>`
  font-size: 24px;
  font-family: "SemiBold";
  line-height: 33.6px; /*  */
  margin-top: 52px;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
const SubTitle = styled.Text<{ isDark: boolean }>`
  font-size: 13px;
  margin-top: 8px;
  line-height: 19.5px; /* 19.5px */
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
const SpaceContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
`;
const SpaceItem = styled.TouchableOpacity<ActiveProps>`
  width: 157px;
  height: 192px;
  background-color: ${(props: ActiveProps) =>
    props.isActive
      ? props.isDark
        ? "#1E1B29"
        : colors.l_sub_2
      : props.isDark
      ? colors.grey8
      : colors.white};
  border-radius: 10px;
  align-items: center;
  border: 1px;
`;
const SpaceImage = styled.View<{ isDark: boolean }>`
  width: 116px;
  height: 116px;
  background-color: ${colors.grey7};
  border-radius: 500px;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
`;
const SpaceName = styled.Text<ActiveProps>`
  margin-top: 9px;
  font-family: "SemiBold";
  font-size: 17px;
  line-height: 25.5px; /*  */
  color: ${(props: ActiveProps) =>
    props.isActive ? colors.main1 : props.isDark ? colors.white : colors.black};
`;
const Content = styled.View`
  width: 100%;
  height: 87.4%;
`;
const NextButton = styled.TouchableOpacity<ActiveProps>`
  width: 90%;
  height: 52px;
  align-items: center;
  justify-content: center;
  /* margin-top: 165px; */
  margin-left: 5%;
  background-color: ${(props: ActiveProps) =>
    props.isActive ? colors.main1 : props.isDark ? colors.grey7 : colors.grey3};
  border-radius: 10px;
`;
const ButtonText = styled.Text<ActiveProps>`
  font-size: 17px;
  font-family: "SemiBold";
  color: ${(props: ActiveProps) =>
    props.isActive
      ? props.isDark
        ? colors.black
        : colors.white
      : props.isDark
      ? colors.white
      : colors.black};
`;
