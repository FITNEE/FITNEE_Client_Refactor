import { colors } from "@/libs/Colors";
import { isDarkModeAtom } from "@/states/GlobalStates";
import { useAtom } from "jotai";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
//expo 시뮬레이터 메뉴바 단축키 : ctrl + cmd + z

export interface NavigationProps {
  [propName: string]: any; // 이렇게 하면 navigate, map, filter, each 등의 추가 속성을 호출해도 오류메시지가 안뜬다.
}

export default function EmptyRoutine() {
  const [isDark] = useAtom(isDarkModeAtom);
  const navigation = useNavigation<NavigationProps>();
  const goToCreateRoutine = () => navigation.navigate("CreateRoutine");
  return (
    <Container>
      <EmptyImage
        source={require("@/assets/images/PNGs/NoRoutine.png")}
        isDark={isDark}
      />
      <TitleBlock>
        <Title isDark={isDark}>등록된 운동루틴이 없어요</Title>
        <SubText isDark={isDark}>
          간단한 질문에 답변하여{"\n"}나만의 루틴을 만들어보세요!
        </SubText>
      </TitleBlock>
      <Button onPress={goToCreateRoutine}>
        <ButtonText isDark={isDark}>AI 루틴 생성하기</ButtonText>
      </Button>
    </Container>
  );
}
const Container = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
const EmptyImage = styled.Image`
  width: 125px;
  height: 125px;
  margin-left: auto;
  margin-right: auto;
`;
const TitleBlock = styled.View`
  margin-top: 16px;
  margin-bottom: 42px;
`;
const Title = styled.Text<{ isDark: boolean }>`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.6px;
  height: 32px;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
const SubText = styled.Text<{ isDark: boolean }>`
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.5px;
  text-align: center;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.white : colors.black};
`;
const Button = styled.TouchableOpacity`
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  height: 52px;
  background-color: ${colors.main1};
`;
const ButtonText = styled.Text<{ isDark: boolean }>`
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 25.5px;
  color: ${(props: { isDark: boolean }) =>
    props.isDark ? colors.black : colors.white};
`;
