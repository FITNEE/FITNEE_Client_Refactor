import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { SafeAreaView } from 'react-native'
import { useState } from 'react'
import { useIsFocused, StackActions } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import ExerciseData from '@/assets/datas/ExerciseData.json'
import ProgressCircle from '@/components/Exercise/ProgressCircle'
import BlankCircle from '@/components/Exercise/BlankCircle'
import LeftArrow from '@/assets/images/SVGs/icon/Left.svg'

export default function StartExercise({ navigation }) {
  const [isDark, setIsDark] = useState<boolean>(false)
  const isFocused = useIsFocused()

  const Week = new Array('sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat')

  const now = new Date()
  let day = Week[now.getDay()]

  interface CircleDataType {
    totalTime: number
    breakTime: number
    totalCalories: number
  }

  interface ExerciseDataType {
    healthCategoryIdx: number
    exerciseName: string
    weight: number
    totalSets: number
  }

  const goToExercise = () => navigation.navigate('Exercise')

  const exerciseList = ExerciseData.ExerciseDataList.map((result) => (
    <RecTextLine key={result.healthCategoryIdx}>
      <RecText1 isDark={isDark}>{result.exerciseName}</RecText1>
      <RecText2 isDark={isDark} />
      <RecText3 isDark={isDark}>{result.totalSets}세트</RecText3>
    </RecTextLine>
  ))

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? colors.d_background : colors.white,
      }}
    >
      <Container isDark={isDark}>
        <BackIcon onPress={() => navigation.goBack()}>
          <LeftArrow width={24} height={24} color={isDark ? colors.white : colors.black} />
        </BackIcon>
        <ExerciseText isDark={isDark}>운동을 시작해 볼까요?</ExerciseText>
        <ExerciseExplainText isDark={isDark}> </ExerciseExplainText>

        <CirclesLine>
          <ProgressCircle
            num={Math.ceil(ExerciseData.CircleDataList.totalTime / 60)}
            unit="분"
            title="예상 소요시간"
            isDark={isDark}
          />
          <ProgressCircle num={30} unit="초" title="세트간 휴식" isDark={isDark} />

          <BlankCircle
            num={ExerciseData.CircleDataList.totalCalories}
            unit="kcal"
            title="소모 칼로리"
            bubbleOn={false}
            isDark={isDark}
          />
        </CirclesLine>

        <ExerciseRec isDark={isDark}>
          <ScrollView showsVerticalScrollIndicator={false}>{exerciseList}</ScrollView>
        </ExerciseRec>

        <ExerciseButton isDark={isDark} onPress={goToExercise}>
          <ExerciseButtonText isDark={isDark}>시작</ExerciseButtonText>
        </ExerciseButton>
      </Container>
    </SafeAreaView>
  )
}

const RecTextLine = styled.View`
  flex-direction: row;
  width: 279px;
  margin-bottom: 4px;
`

const CirclesLine = styled.View`
  flex-direction: row;
  width: 256px;
  justify-content: space-around;
`

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.d_background : colors.white)};
`

const ExerciseButton = styled.TouchableOpacity`
  width: 111px;
  height: 111px;
  border-radius: 60px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.main2 : colors.main1)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ExerciseText = styled.Text`
  font-family: Pretendard-SemiBold;
  font-size: 24px;
  text-align: center;
  line-height: 33.6px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`

const ExerciseRec = styled.View`
  width: 311px;
  height: 175px;
  border-radius: 12px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.grey1)};
  margin-bottom: 33px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const RecText1 = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey3 : colors.grey7)};
  font-size: 13px;
  font-family: Pretendard-Regular;
  line-height: 19.5px;
  width: 188px;
`

const RecText2 = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey3 : colors.grey7)};
  font-size: 13px;
  font-family: Pretendard-Regular;
  line-height: 19.5px;
  width: 55px;
`

const RecText3 = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey3 : colors.grey7)};
  font-size: 13px;
  font-family: Pretendard-Regular;
  line-height: 19.5px;
  width: 36px;
`

const ExerciseButtonText = styled.Text<{ isDark: boolean }>`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.white)};
  text-align: center;
  font-size: 24px;
  font-family: Pretendard-SemiBold;
  line-height: 33.6px;
`

const ExerciseExplainText = styled.Text`
  padding: 8px;
  color: ${colors.main1};
  text-align: center;
  font-size: 13px;
  font-family: Pretendard-Regular;
  line-height: 19.5px;
  margin-bottom: 41px;
`

const BackIcon = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 16px;
`
