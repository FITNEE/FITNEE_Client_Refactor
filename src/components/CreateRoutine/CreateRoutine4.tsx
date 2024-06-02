import { View } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { ActiveProps } from '@/pages/createRoutine/CreateRoutine'
import { NextProps } from './CreateRoutine1'
import { useEffect, useState } from 'react'

export default function CreateRoutine4({ next }: NextProps) {
  const [isDark] = useAtom(isDarkModeAtom)
  const [select, SetSelect] = useState(false)
  const [allDay, SetAllDay] = useState(false)
  const [days, setDays] = useState([
    { id: 1, name: '일', selected: false, ename: 'Sunday' },
    { id: 2, name: '월', selected: false, ename: 'Monday' },
    { id: 3, name: '화', selected: false, ename: 'Tuesday' },
    { id: 4, name: '수', selected: false, ename: 'Wednesday' },
    { id: 5, name: '목', selected: false, ename: 'Thursday' },
    { id: 6, name: '금', selected: false, ename: 'Friday' },
    { id: 7, name: '토', selected: false, ename: 'Saturday' },
  ])
  const onDayPress = (id: number) => {
    setDays(prevDays => prevDays.map(day => (day.id === id ? { ...day, selected: !day.selected } : day)))
  }
  useEffect(() => {
    SetSelect(
      days[0].selected ||
        days[1].selected ||
        days[2].selected ||
        days[3].selected ||
        days[4].selected ||
        days[5].selected ||
        days[6].selected,
    )
    SetAllDay(
      days[0].selected &&
        days[1].selected &&
        days[2].selected &&
        days[3].selected &&
        days[4].selected &&
        days[5].selected &&
        days[6].selected,
    )
  }, [days])
  const AllDayPress = () => {
    SetAllDay(!allDay)
    setDays(prevDays => prevDays.map(day => (!allDay ? { ...day, selected: true } : { ...day, selected: false })))
  }
  return (
    <View>
      <Content>
        <TitleContainer>
          <Title isDark={isDark}>운동할 요일을 선택해주세요.</Title>
          <SubTitle isDark={isDark}>마이루틴에서 언제든지 변경할 수 있어요.</SubTitle>
        </TitleContainer>
        <DayWrapper>
          <DayContainer>
            {days.map(day => (
              <DayItem
                key={day.id}
                onPress={() => onDayPress(day.id)}
                style={{
                  backgroundColor: allDay
                    ? isDark
                      ? '#1E1B29'
                      : colors.l_sub_2
                    : day.selected
                    ? colors.main1
                    : isDark
                    ? colors.grey9
                    : colors.white,
                  borderWidth: allDay ? 1 : 0,
                  borderColor: allDay ? colors.main1 : day.selected ? colors.main1 : colors.white,
                }}
              >
                <DayName
                  style={{
                    color: allDay ? colors.main1 : isDark ? colors.white : day.selected ? colors.white : colors.black,
                  }}
                >
                  {day.name}
                </DayName>
              </DayItem>
            ))}
          </DayContainer>
          <AllDayButton isDark={isDark} isActive={allDay} onPress={AllDayPress}>
            <AllDayText isDark={isDark} isActive={allDay}>
              매일 운동할래요
            </AllDayText>
          </AllDayButton>
        </DayWrapper>
      </Content>
      <NextButton isDark={isDark} isActive={select} onPress={next} disabled={!select}>
        <ButtonText isDark={isDark} isActive={select}>
          선택 완료
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
  margin-bottom: 43.5%;
`
const Title = styled.Text<{ isDark: boolean }>`
  font-size: 24px;
  font-family: 'SemiBold';
  line-height: 33.6px;
  margin-top: 52px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const SubTitle = styled.Text<{ isDark: boolean }>`
  font-size: 13px;
  margin-top: 8px;
  line-height: 19.5px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const DayWrapper = styled.View`
  align-items: center;
`
const DayContainer = styled.View`
  flex-direction: row;
  width: 327px;
  height: 43px;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
`
const DayItem = styled.TouchableOpacity`
  width: 43px;
  height: 43px;
  background-color: ${colors.white};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`
const DayName = styled.Text`
  font-size: 17px;
  font-family: 'Medium';
`
const AllDayButton = styled.TouchableOpacity`
  width: 110px;
  height: 40px;
  background-color: ${(props: ActiveProps) =>
    props.isActive ? colors.main1 : props.isDark ? colors.grey7 : colors.grey3};
  margin-top: 141px;
  margin-bottom: 104px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`
const AllDayText = styled.Text`
  font-size: 13px;
  font-family: 'SemiBold';
  color: ${(props: ActiveProps) => (props.isActive ? colors.white : props.isDark ? colors.white : colors.black)};
`
