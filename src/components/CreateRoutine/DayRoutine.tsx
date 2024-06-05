import { View, Text } from 'react-native'
import { colors } from '@/libs/Colors'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'
import styled from 'styled-components/native'
import { useState } from 'react'

export default function DayRoutine() {
  const [day, setDay] = useState([
    {
      day: '월',
      parts: '하체, 코어',
      exercises: [
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
      ],
    },
    {
      day: '월',
      parts: '하체, 코어',
      exercises: [
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
      ],
    },
    {
      day: '월',
      parts: '하체, 코어',
      exercises: [
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
      ],
    },
    {
      day: '월',
      parts: '하체, 코어',
      exercises: [
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
      ],
    },
    {
      day: '월',
      parts: '하체, 코어',
      exercises: [
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
      ],
    },
    {
      day: '월',
      parts: '하체, 코어',
      exercises: [
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
        { name: '데드리프트', set: 3 },
      ],
    },
  ])
  const [selectedID, setSelectedID] = useState<number>(0)
  const [isDark] = useAtom(isDarkModeAtom)
  return (
    <Container showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 5 }}>
      <Wrapper>
        {day.map((item, i) => (
          <View>
            <Item
              isDark={isDark}
              key={i}
              onPress={() => {
                setSelectedID(i)
              }}
            >
              <ItemTitle isDark={isDark}>{item.day}</ItemTitle>
              <ItemSubTitle isDark={isDark}>{item.parts}</ItemSubTitle>
            </Item>
            {selectedID == i && (
              <ExerciseContainer>
                {item.exercises.map(exercise => (
                  <ExerciseItem isDark={isDark}>
                    <ExerciseName isDark={isDark}>{exercise.name}</ExerciseName>
                    <ExerciseSet isDark={isDark}>{exercise.set} 세트</ExerciseSet>
                  </ExerciseItem>
                ))}
              </ExerciseContainer>
            )}
          </View>
        ))}
      </Wrapper>
    </Container>
  )
}

const Container = styled.ScrollView``
const Wrapper = styled.View`
  gap: 8px;
  padding: 0 12px;
`
const Item = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 58px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.grey2)};
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
`
const ItemTitle = styled.Text`
  font-size: 17px;
  font-family: 'Medium';
  margin-left: 15px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const ItemSubTitle = styled.Text`
  margin-right: 15px;
  font-family: 'Regular';
  color: ${colors.main1};
`
const ExerciseContainer = styled.View`
  margin: 13px 20px;
`
const ExerciseItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1px;
`
const ExerciseName = styled.Text`
  font-size: 15px;
  font-family: 'Regular';
  line-height: 22.5px; /* 22.5px */
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const ExerciseSet = styled.Text`
  font-size: 15px;
  font-family: 'Regular';
  color: ${colors.grey5};
`
