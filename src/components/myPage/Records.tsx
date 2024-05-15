import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import PercentageCircle from 'react-native-progress-circle'
import styled from 'styled-components/native'
import CalendarView from './CalendarView'
import { colors } from '@/libs/Colors'
import Check from '../../assets/images/SVGs/icon/Check.svg'

interface HealthCheckResult {
  isSuccess: boolean
  code: number
  message: string
  result: {
    exercise: string[]
    totalCalories: string
    totalWeight: string
    totalTime: string
    totalDist: string
  }
}

interface RecordsProps {
  getDayHealth: (checkedDate: string) => Promise<HealthCheckResult | undefined>
  getMyPageData: (month: number) => Promise<{ day: string }[] | undefined>
}

export default function Records(props: RecordsProps) {
  const [now, setNow] = useState<Date>(new Date(Date.now() + 9 * 60 * 60 * 1000))
  const date = parseInt(now.toISOString().substring(8, 10))
  const resultMonth = now.getMonth() + 1
  const [exerciseDays, setExerciseDays] = useState<string[]>([])
  const [month, setMonth] = useState<number>(now.getMonth() + 1)

  useEffect(() => {
    props.getMyPageData(month).then((dateResult: { day: string }[] | undefined) => {
      if (dateResult) {
        const days = dateResult.map(item => item.day)
        setExerciseDays(days)
      }
    })
  }, [month])

  const [totalExercise, setTotalExercise] = useState<string[]>([])
  const [totalCalories, setTotalCalories] = useState<string>('0')
  const [totalWeight, setTotalWeight] = useState<string>('0')
  const [totalTime, setTotalTime] = useState<string>('0')
  const [totalDist, setTotalDist] = useState<string>('0')

  useEffect(() => {
    props
      .getDayHealth(now.toISOString().substring(0, 10).replace(/-/g, ''))
      .then((checkResult: HealthCheckResult | undefined) => {
        if (checkResult) {
          if (checkResult.code === 709) {
            setTotalExercise([])
            setTotalCalories('0')
            setTotalWeight('0')
            setTotalTime('0')
            setTotalDist('0')
          } else if (checkResult.code === 1000) {
            const { result } = checkResult
            setTotalExercise(result.exercise)
            setTotalCalories(result.totalCalories)
            setTotalWeight(result.totalWeight)
            setTotalTime(result.totalTime)
            setTotalDist(result.totalDist)
          }
        }
      })
  }, [now, month])

  const dayLoad = (text: { dateString: string }) => {
    setNow(new Date(text.dateString))
  }

  const totalMinute = Math.ceil(parseInt(totalTime) / 60)
  const percentage = (totalMinute / 60) * 100

  const exercise = totalExercise?.map(comment => (
    <RecTextLine>
      <ListText>{comment}</ListText>
      <Check width={20} height={20} color={colors.white} />
    </RecTextLine>
  ))

  return (
    <Container>
      <CalendarBox>
        <CalendarView dayFunction={dayLoad} exerciseDays={exerciseDays} setMonth={setMonth} />
      </CalendarBox>
      <Bar />
      <Exercise>
        <Title>
          {resultMonth}월 {date}일 완료한 운동
        </Title>
        <Circles>
          <CircleContent>
            <PercentageCircle
              percent={percentage}
              radius={40}
              borderWidth={2}
              color={colors.main1}
              shadowColor={colors.grey1}
              bgColor={colors.white}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CircleText>{totalMinute}</CircleText>
                <MiniText> 분</MiniText>
              </View>
            </PercentageCircle>
            <CircleTitle>소요시간</CircleTitle>
          </CircleContent>
          <CircleContent>
            <Circle>
              <CircleText>{totalWeight}</CircleText>
              <MiniText> kg</MiniText>
            </Circle>
            <CircleTitle>오늘 든 무게</CircleTitle>
          </CircleContent>
          <CircleContent>
            <Circle>
              <CircleText>{totalCalories}</CircleText>
              <MiniText> Kcal</MiniText>
            </Circle>
            <CircleTitle>소모 칼로리</CircleTitle>
          </CircleContent>
        </Circles>
        {totalExercise.length != 0 && <List>{exercise}</List>}
      </Exercise>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  margin-bottom: 50px;
`
const Exercise = styled.View`
  padding-top: 24px;
  gap: 32px;
  padding-bottom: 24px;
`

const Circles = styled.View`
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`

const CircleContent = styled.View`
  gap: 8px;
`

const RecTextLine = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
const Bar = styled.View`
  height: 16px;
  background-color: ${colors.grey1};
`
const Title = styled.Text`
  font-size: 17px;
  font-family: 'SemiBold';
  line-height: 25.5px;
  margin: 0px 24px;
  color: ${colors.black};
`
const Circle = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${colors.grey1};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const CircleText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: 'SemiBold';
  line-height: 32px;
  color: ${colors.black};
`
const CircleTitle = styled.Text`
  text-align: center;
  font-size: 10px;
  font-family: 'Regular';
  line-height: 15px;
  color: ${colors.black};
`
const List = styled.View`
  border-radius: 12px;
  background-color: ${colors.grey1};
  margin: 0px 32px;
  padding: 16px;
  gap: 7px;
`
const ListText = styled.Text`
  font-size: 13px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 19.5px;
  color: ${colors.black};
`
const MiniText = styled.Text`
  font-size: 10px;
  font-style: normal;
  font-family: 'SemiBold';
  padding-top: 4px;
  line-height: 32px;
  color: ${colors.black};
`
const CalendarBox = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`
