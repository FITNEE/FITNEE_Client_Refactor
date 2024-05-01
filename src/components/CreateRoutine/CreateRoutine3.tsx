import { View } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { ActiveProps } from '@/pages/CreateRoutine/CreateRoutine_1'
import { NextProps } from './CreateRoutine1'
import { useEffect, useState } from 'react'

export default function CreateRoutine3({ next }: NextProps) {
  const [isDark] = useAtom(isDarkModeAtom)
  const [select, SetSelect] = useState(false)
  const [allPart, SetAllPart] = useState(false)
  const [gender, SetGender] = useState(1)
  const [parts, setParts] = useState([
    {
      id: 1,
      name: '가슴',
      selected: false,
      ename: 'chest',
      f: require('@/assets/images/PNGs/BodyPart/Female/Chest.png'),
      m: require('@/assets/images/PNGs/BodyPart/Male/Chest.png'),
    },
    {
      id: 2,
      name: '등',
      selected: false,
      ename: 'back',
      f: require('@/assets/images/PNGs/BodyPart/Female/Back.png'),
      m: require('@/assets/images/PNGs/BodyPart/Male/Back.png'),
    },
    {
      id: 3,
      name: '어깨',
      selected: false,
      ename: 'shoulder',
      f: require('@/assets/images/PNGs/BodyPart/Female/Shoulder.png'),
      m: require('@/assets/images/PNGs/BodyPart/Male/Shoulder.png'),
    },
    {
      id: 4,
      name: '팔',
      selected: false,
      ename: 'arm',
      f: require('@/assets/images/PNGs/BodyPart/Female/Arm.png'),
      m: require('@/assets/images/PNGs/BodyPart/Male/Arm.png'),
    },
    {
      id: 5,
      name: '코어',
      selected: false,
      ename: 'core',
      f: require('@/assets/images/PNGs/BodyPart/Female/Core.png'),
      m: require('@/assets/images/PNGs/BodyPart/Male/Core.png'),
    },
    {
      id: 6,
      name: '하체',
      selected: false,
      ename: 'lower body',
      f: require('@/assets/images/PNGs/BodyPart/Female/LowerBody.png'),
      m: require('@/assets/images/PNGs/BodyPart/Male/LowerBody.png'),
    },
  ])
  const onPartPress = (id: number) => {
    setParts(prevParts => prevParts.map(part => (part.id === id ? { ...part, selected: !part.selected } : part)))
  }
  useEffect(() => {
    SetSelect(
      parts[0].selected ||
        parts[1].selected ||
        parts[2].selected ||
        parts[3].selected ||
        parts[4].selected ||
        parts[5].selected,
    )
    SetAllPart(
      parts[0].selected &&
        parts[1].selected &&
        parts[2].selected &&
        parts[3].selected &&
        parts[4].selected &&
        parts[5].selected,
    )
  }, [parts])
  const AllPartPress = () => {
    SetAllPart(!allPart)
    setParts(prevParts =>
      prevParts.map(part => (!allPart ? { ...part, selected: true } : { ...part, selected: false })),
    )
  }
  return (
    <View>
      <Content>
        <TitleContainer>
          <Title isDark={isDark}>{`운동할 부위를
모두 선택하세요.`}</Title>
        </TitleContainer>
        <PartWrapper>
          <PartContainer>
            {parts.map(part => (
              <PartItem
                key={part.id}
                onPress={() => onPartPress(part.id)}
                style={{
                  backgroundColor: allPart
                    ? isDark
                      ? '#1E1B29'
                      : colors.l_sub_2
                    : part.selected
                    ? colors.main1
                    : isDark
                    ? colors.grey9
                    : colors.white,
                  borderWidth: 1,
                  borderColor: allPart ? colors.main1 : 'transparent',
                }}
              >
                {gender === 1 ? <PartImage source={part.m} /> : <PartImage source={part.f} />}

                <PartName
                  style={{
                    color: allPart ? colors.main1 : isDark ? colors.white : part.selected ? colors.white : colors.black,
                  }}
                >
                  {part.name}
                </PartName>
              </PartItem>
            ))}
          </PartContainer>
          <AllButton isDark={isDark} isActive={allPart} onPress={AllPartPress}>
            <AllText isDark={isDark} isActive={allPart}>
              모든 부위를 운동할래요
            </AllText>
          </AllButton>
        </PartWrapper>
      </Content>
      <NextButton isDark={isDark} isActive={select} onPress={next} disabled={!select}>
        <ButtonText isDark={isDark} isActive={select}>
          다음
        </ButtonText>
      </NextButton>
    </View>
  )
}
const Content = styled.View`
  height: 87.4%;
`
const NextButton = styled.TouchableOpacity<ActiveProps>`
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ActiveProps) =>
    props.isActive ? colors.main1 : props.isDark ? colors.grey7 : colors.grey3};
  border-radius: 12px;
`
const ButtonText = styled.Text<ActiveProps>`
  font-size: 17px;
  font-family: 'SemiBold';
  color: ${(props: ActiveProps) =>
    props.isActive ? (props.isDark ? colors.black : colors.white) : props.isDark ? colors.white : colors.black};
`
const TitleContainer = styled.View`
  margin-bottom: 12.8%;
`
const Title = styled.Text<{ isDark: boolean }>`
  font-size: 24px;
  font-family: 'SemiBold';
  line-height: 33.6px;
  margin-top: 52px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const PartWrapper = styled.View`
  align-items: center;
`
const PartContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 85%; */
  width: 332px;
`
const PartItem = styled.TouchableOpacity`
  width: 101px;
  height: 124px;
  border-radius: 12px;
  align-items: center;

  margin-top: 12px;
`
const PartImage = styled.Image`
  width: 85px;
  height: 85px;
  margin-top: 8px;
  background-color: ${colors.grey7};
  border-radius: 300px;
`
const PartName = styled.Text`
  font-size: 17px;
  font-family: 'Medium';
  margin-top: 2px;
  line-height: 25.5px; /* 25.5px */
`
const AllButton = styled.TouchableOpacity<ActiveProps>`
  width: 147px;
  height: 40px;
  background-color: ${(props: ActiveProps) =>
    props.isActive ? colors.main1 : props.isDark ? colors.grey7 : colors.grey3};
  margin-top: 24px;
  margin-bottom: 104px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`
const AllText = styled.Text<ActiveProps>`
  font-size: 13px;
  font-weight: 600;
  color: ${(props: ActiveProps) => (props.isActive ? colors.white : props.isDark ? colors.white : colors.black)};
`
