import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { Alert, SafeAreaView } from 'react-native'
import { useEffect, useState } from 'react'
import { useIsFocused, StackActions } from '@react-navigation/native'
import ExerciseData from '@/assets/datas/ExerciseData.json'
import { getGIF } from '@/utils/getImage'
import Close from '@/assets/images/SVGs/icon/Close.svg'
import ExerciseCard from '@/components/Exercise/ExerciseCard'
import { FlatList } from 'react-native-gesture-handler'
import ExerciseButton from '@/components/Exercise/ExerciseButton'
import { SkipConfirm, StopConfirm } from '@/utils/Exercise/alertList'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import BreakScreen from '@/components/Exercise/BreakScreen'

export default function ExerciseCourse({ navigation }: any) {
  const [isDark, setIsDark] = useState<boolean>(false)
  const isFocused = useIsFocused()
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  //alert용 함수 모음
  const goToStart = () => navigation.navigate('StartExercise')
  const goToNextExercise = async () => {
    //스킵
    // let modifiedDataList = [...dataList]
    // modifiedDataList[listIndex] = {
    //   ...modifiedDataList[listIndex],
    //   skip: 1,
  }

  //휴식시간 toggle용 변수 모음
  const [showExerciseCourse, setShowExerciseCourse] = useState<boolean>(false)
  const [showBreak, setShowBreak] = useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

  const scrollBox = () => {
    setTimeout(() => {
      setShowBreak(true)
      setIsButtonDisabled(false)
      console.log('show', showExerciseCourse)
    }, 2000)
  }

  if (showBreak)
    return (
      <BreakScreen
        navigation={navigation}
        toggleShowBreak={() => setShowBreak(false)} // toggle 함수
      />
    )
  else
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDark ? colors.d_background : colors.white,
        }}
      >
        <ExerciseCard exerciseName={'사이드 레터럴 레이즈'} isDark={isDark}>
          <StopExercise onPress={() => StopConfirm(goToStart)}>
            <Close width={24} height={24} color={isDark ? colors.white : colors.black} />
          </StopExercise>
          <ExerciseCircle>
            <ComponentWrapper zIndex={1}>
              <ExerciseImage source={getGIF[11]} resizeMode="contain" />
            </ComponentWrapper>
            <ComponentWrapper zIndex={2}>
              <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={35}
                colors={colors.main1}
                size={315}
                strokeWidth={8}
                trailColor={isDark ? colors.grey7 : colors.grey3}
                onComplete={() => ({ shouldRepeat: true })}
                updateInterval={0.001}
                isGrowing={true}
                rotation={'counterclockwise'}
              />
            </ComponentWrapper>
          </ExerciseCircle>

          {/* <Indicator totalPages={dataList[listIndex].totalSets} currentPage={indicatorNum - 1} isDark={isDark} /> */}

          <BoxList>
            {/* <FlatList
            data={exerciseData}
            renderItem={renderItem}
            keyExtractor={(item) => item.set}
            showsVerticalScrollIndicator={false}
            ref={flatListRef}
            onEndReached={goToCompleteExercise}
            scrollEnabled={false}
            getItemLayout={getItemLayout}
            initialScrollIndex={scrollPosition.current}
          /> */}
          </BoxList>

          <TextBox>
            <JustText>{}</JustText>
          </TextBox>

          <ExerciseButton //세트 완료 버튼
            text="세트 완료"
            disabled={false}
            onPress={scrollBox}
            isDark={isDark}
          />

          <SkipExercrise onPress={() => SkipConfirm(goToNextExercise)}>
            <SkipExercriseText isDark={isDark}>이 운동 건너뛰기</SkipExercriseText>
          </SkipExercrise>
        </ExerciseCard>
      </SafeAreaView>
    )
}

const TextBox = styled.View`
  width: 327px;
  height: 24px;
  margin: 23px 0px 5px 0px;
  justify-content: center;
  align-items: center;
`

const JustText = styled.Text`
  color: ${colors.main1};
  text-align: center;
  font-size: 15px;
  font-family: Pretendard-Regular;
  line-height: 22.5px;
  width: 100%;
`

const BoxList = styled.View`
  height: 120px;
  padding-bottom: 1px;
`

const Container = styled.View`
  width: 327px;
  height: 56px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 24px;
`

const CurrentText = styled.Text`
  font-size: 20px;
  font-family: Pretendard-SemiBold;
`

const CurrentText2 = styled.Text`
  font-size: 15px;
  font-family: Pretendard-SemiBold;
  line-height: 25px;
`

const CurrentUnit = styled.Text`
  font-size: 15px;
  font-family: Pretendard-SemiBold;
`

const Box1 = styled.View`
  width: 130px;
  flex-direction: row;
  align-items: baseline;
  height: 25px;
`

const Box2 = styled.View`
  width: 80px;
  flex-direction: row;
  align-items: baseline;
  height: 25px;
`

const Box3 = styled.View`
  width: 49px;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
  height: 25px;
  right: 14px;
`

const SkipExercrise = styled.TouchableOpacity`
  width: 100px;
  height: 20px;
  position: relative;
  margin-top: 16px;
  align-content: center;
  justify-content: center;
`

const StopExercise = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 24px;
`

const SkipExercriseText = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey2 : colors.grey8)};
  text-align: center;
  font-size: 13px;
  font-family: Pretendard-SemiBold;
  line-height: 19.5px;
  text-decoration-line: underline;
  width: 100px;
`

const ExerciseCircle = styled.View`
  width: 307px;
  height: 307px;
  border-radius: 291px;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom: 14px;
  justify-content: center;
  align-items: center;
`

const ExerciseImage = styled.Image`
  height: 307px;
  aspect-ratio: 1;
  border-radius: 999px;
`

const ComponentWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  z-index: ${(props: { props: boolean }) => props.props};
`
