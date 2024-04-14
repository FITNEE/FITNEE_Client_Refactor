import Cards from "@/components/home/Cards";
import { colors } from "@/libs/Colors";
import { isDarkModeAtom } from "@/states/GlobalStates";
import { useAtom } from "jotai";
import { View } from "react-native";
import styled from "styled-components/native";

export default function Routine() {
  const [isDark] = useAtom(isDarkModeAtom);
  return (
    <View>
      <TopBlock>
        <Name isDark={isDark}>최세호 님</Name>
        {true ? (
          <Title isDark={isDark}>오늘 예정된 운동 루틴이에요</Title>
        ) : (
          <Title isDark={isDark}>다음에 예정된 운동루틴이에요</Title>
        )}
        <Day isDark={isDark}>2024. 04. 01 (월)</Day>
      </TopBlock>
      <SectionBlock isDark={isDark}>
        <Section isDark={isDark}>
          <CircleIcon />
          <SectionText isDark={isDark}>하체, 코어</SectionText>
        </Section>
        <Section isDark={isDark}>
          <NumText isDark={isDark}>6개의 운동</NumText>
        </Section>
      </SectionBlock>
      <Cards />
    </View>
  );
}

const TopBlock = styled.View`
  width: 100%;
  margin-top: 66px;
  margin-bottom: 31px;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.Text<{ isDark: boolean }>`
  height: 26px;
  font-family: "Regular";
  font-size: 17px;
  line-height: 25.5px;
  margin-bottom: 4px;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
const Title = styled.Text<{ isDark: boolean }>`
  height: 32px;
  font-size: 20px;
  font-family: "SemiBold";
  line-height: 32px;
  margin-bottom: 4px;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
const Day = styled.Text`
  color: ${colors.main1};
  height: 20px;
  text-align: center;
  font-size: 13px;
  font-family: "Regular";
  line-height: 19.5px;
`;
const SectionBlock = styled.View<{ isDark: boolean }>`
  height: 40px;
  margin: 0px 24px;
  padding: 0px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.grey9 : colors.white};
  border-radius: 10px;
`;
const CircleIcon = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  margin-right: 14px;
  background-color: ${colors.main1};
`;
const Section = styled.View<{ isDark: boolean }>`
  flex-direction: row;
  align-items: center;
  background-color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.grey9 : colors.white};
`;
const SectionText = styled.Text<{ isDark: boolean }>`
  font-size: 15px;
  font-family: "SemiBold";
  line-height: 22.5px;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
const NumText = styled.Text`
  color: ${colors.grey7};
  font-size: 15px;
  font-family: "Regular";
  line-height: 22.5px;
`;
