import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import Records from '@/components/myPage/Records'
import Analysis from '../../components/myPage/Analysis'
import { colors } from '@/libs/Colors'
import { useIsFocused } from '@react-navigation/native'
import ScreenLayout from '@/components/ScreenLayout'
import { useAtom } from 'jotai'
import { isDarkModeAtom, isTabVisibleAtom } from '@/states/GlobalStates'

interface weekDataProps {
  startAndEndExercise: {
    firstMonth: number
    firstWeek: number
    lastMonth: number
    lastWeek: number
  }[]
  todayWeekNumber: string
  formattedRows: {
    weekNumber: string
    weeklyCalories: number
    weeklyDistance: number
    weeklyExerciseTime: number
    numberOfWeeks: number | string
    ifWeek1: number
  }[]
}
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

export default function MyPage() {
  const isFocus = useIsFocused()
  const [isDark] = useAtom(isDarkModeAtom)
  const [, setIsTabVisible] = useAtom(isTabVisibleAtom)

  useEffect(() => {
    isFocus && setIsTabVisible(true)
  }, [isFocus])

  const getDayHealth = async (checkedDate: string): Promise<HealthCheckResult | undefined> => {
    try {
      const checkResult = {
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: {
          exercise: ['프론트 플랭크'],
          totalCalories: '420',
          totalWeight: '0',
          totalTime: '7',
          totalDist: '0',
        },
      }
      return checkResult
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }
  const getMyPageData = async (month: number) => {
    try {
      const dateResult = {
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: [
          {
            day: '2024-04-14T00:00:00.000Z',
          },
        ],
      }
      return dateResult.result
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  const [weekData, setWeekData] = useState<weekDataProps>()

  const getWeekHealth = async (): Promise<weekDataProps> => {
    try {
      const weekResult = {
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: {
          startAndEndExercise: [
            {
              firstMonth: 2,
              firstWeek: 3,
              lastMonth: 12,
              lastWeek: 4,
            },
          ],
          todayWeekNumber: '5월 19째 주',
          formattedRows: [
            {
              weekNumber: '1월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 1,
            },
            {
              weekNumber: '1월 2째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '1월 3째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '1월 4째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '1월 5째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '1월 6째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '2월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 1,
            },
            {
              weekNumber: '2월 2째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '2월 3째 주',
              weeklyCalories: 1260,
              weeklyDistance: 0,
              weeklyExerciseTime: 10,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '2월 4째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '2월 5째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '3월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 1,
            },
            {
              weekNumber: '3월 2째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '3월 3째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '3월 4째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '3월 5째 주',
              weeklyCalories: 180,
              weeklyDistance: 0,
              weeklyExerciseTime: 12,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '4월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 1,
            },
            {
              weekNumber: '4월 2째 주',
              weeklyCalories: 420,
              weeklyDistance: 0,
              weeklyExerciseTime: 7,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '4월 3째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '4월 4째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '4월 5째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '5월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 1,
            },
            {
              weekNumber: '5월 2째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '5월 3째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '5월 4째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '5월 5째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '5월 6째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '6월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 1,
            },
            {
              weekNumber: '6월 2째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '6월 3째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '6월 4째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '6월 5째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '6월 6째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: 6,
              ifWeek1: 0,
            },
            {
              weekNumber: '7월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '6',
              ifWeek1: 1,
            },
            {
              weekNumber: '7월 2째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '7월 3째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '7월 4째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '7월 5째 주',
              weeklyCalories: 45,
              weeklyDistance: 0,
              weeklyExerciseTime: 9,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '7월 6째 주',
              weeklyCalories: 45,
              weeklyDistance: 0,
              weeklyExerciseTime: 9,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '8월 1째 주',
              weeklyCalories: 7140,
              weeklyDistance: 0,
              weeklyExerciseTime: 1076,
              numberOfWeeks: '5',
              ifWeek1: 1,
            },
            {
              weekNumber: '8월 2째 주',
              weeklyCalories: 12852,
              weeklyDistance: 0,
              weeklyExerciseTime: 468,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '8월 3째 주',
              weeklyCalories: 28264,
              weeklyDistance: 3000,
              weeklyExerciseTime: 23253,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '8월 4째 주',
              weeklyCalories: 30241,
              weeklyDistance: 1,
              weeklyExerciseTime: 16413,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '8월 5째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '9월 1째 주',
              weeklyCalories: 16422,
              weeklyDistance: 0,
              weeklyExerciseTime: 445,
              numberOfWeeks: '5',
              ifWeek1: 1,
            },
            {
              weekNumber: '9월 2째 주',
              weeklyCalories: 21314,
              weeklyDistance: 22500,
              weeklyExerciseTime: 5768,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '9월 3째 주',
              weeklyCalories: 450,
              weeklyDistance: 0,
              weeklyExerciseTime: 6,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '9월 4째 주',
              weeklyCalories: 3159,
              weeklyDistance: 4500,
              weeklyExerciseTime: 88,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '9월 5째 주',
              weeklyCalories: 942,
              weeklyDistance: 0,
              weeklyExerciseTime: 41,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '10월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '6',
              ifWeek1: 1,
            },
            {
              weekNumber: '10월 2째 주',
              weeklyCalories: 684,
              weeklyDistance: 0,
              weeklyExerciseTime: 78,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '10월 3째 주',
              weeklyCalories: 3852,
              weeklyDistance: 0,
              weeklyExerciseTime: 511,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '10월 4째 주',
              weeklyCalories: 54,
              weeklyDistance: 0,
              weeklyExerciseTime: 168,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '10월 5째 주',
              weeklyCalories: 1368,
              weeklyDistance: 0,
              weeklyExerciseTime: 267,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '10월 6째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '6',
              ifWeek1: 0,
            },
            {
              weekNumber: '11월 1째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 1,
            },
            {
              weekNumber: '11월 2째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '11월 3째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '11월 4째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '11월 5째 주',
              weeklyCalories: 3330,
              weeklyDistance: 0,
              weeklyExerciseTime: 150,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '12월 1째 주',
              weeklyCalories: 2750,
              weeklyDistance: 0,
              weeklyExerciseTime: 167,
              numberOfWeeks: '5',
              ifWeek1: 1,
            },
            {
              weekNumber: '12월 2째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '12월 3째 주',
              weeklyCalories: 608,
              weeklyDistance: 0,
              weeklyExerciseTime: 12,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '12월 4째 주',
              weeklyCalories: 3396,
              weeklyDistance: 0,
              weeklyExerciseTime: 54,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
            {
              weekNumber: '12월 5째 주',
              weeklyCalories: 0,
              weeklyDistance: 0,
              weeklyExerciseTime: 0,
              numberOfWeeks: '5',
              ifWeek1: 0,
            },
          ],
        },
      }

      return weekResult.result
    } catch (error) {
      console.error('Failed to fetch data:', error)
      throw error
    }
  }

  useEffect(() => {
    getWeekHealth().then(weekResult => {
      setWeekData(weekResult)
    })
  }, [])

  const [showRecords, SetShowRecords] = useState(true)

  const SelectedTextStyle = {
    color: isDark ? colors.white : colors.black,
  }
  const SelectedBoxStyle = {
    borderBottomWidth: 2,
    borderColor: colors.main1,
  }

  return (
    <ScreenLayout>
      <Container isDark={isDark}>
        <Choice>
          <ChoiceButton1
            onPress={() => {
              SetShowRecords(true)
            }}
            style={showRecords && SelectedBoxStyle}
          >
            <ChoiceText isDark={isDark} style={showRecords && SelectedTextStyle}>
              운동 기록
            </ChoiceText>
          </ChoiceButton1>
          <ChoiceButton2
            onPress={() => {
              SetShowRecords(false)
            }}
            style={!showRecords && SelectedBoxStyle}
          >
            <ChoiceText isDark={isDark} style={!showRecords && SelectedTextStyle}>
              운동 분석 및 현황
            </ChoiceText>
          </ChoiceButton2>
        </Choice>
        {showRecords && <Records getDayHealth={getDayHealth} getMyPageData={getMyPageData} />}
        {!showRecords && weekData && <Analysis weekData={weekData} />}
      </Container>
    </ScreenLayout>
  )
}

const Container = styled.ScrollView`
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.d_background : colors.l_background)};
`
const ChoiceText = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-family: 'SemiBold';
  line-height: 25.5px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey3 : colors.grey6)};
`
const Choice = styled.View`
  margin-top: 10px;
  margin-left: 24px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`
const ChoiceButton1 = styled.TouchableOpacity`
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
`
const ChoiceButton2 = styled.TouchableOpacity`
  padding-bottom: 2px;
  padding-left: 1px;
  padding-right: 1px;
`
