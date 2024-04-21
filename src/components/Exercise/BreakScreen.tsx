import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { SafeAreaView } from 'react-native'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useIsFocused, StackActions } from '@react-navigation/native'
import { getGIF } from '@/utils/getImage'
import Close from '@/assets/images/SVGs/icon/Close.svg'
import ExerciseCard from '@/components/Exercise/ExerciseCard'
import { FlatList } from 'react-native-gesture-handler'
import ExerciseButton from '@/components/Exercise/ExerciseButton'
import { StopConfirm } from '@/utils/Exercise/alertList'
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import BlurSet from './BlurSet'
import { editLength } from '@/utils/editLength'
import ArrowCircle from '@/assets/images/SVGs/icon/ArrowCircle.svg'

//Dummy Data용
interface ExerciseData {
  CircleDataList: {
    totalTime: number
    breakTime: number
    totalCalories: number
  }
  ExerciseDataList: Array<{
    healthCategoryIdx: number
    exerciseName: string
    weight: number
    totalSets: number
  }>
  ReplaceData: Array<{
    healthCategoryIdx: number
    exerciseName: string
    weight: number
    totalSets: number
  }>
  DataList: Array<{
    ExerciseInfo: {
      healthCategoryIdx: number
      exerciseName: string
    }
    weight: number
    totalSets: number
    sets: Array<{
      weight: number
      rep: number
    }>
  }>
}

import exerciseData from '@/assets/datas/ExerciseData.json'

const ExerciseData: ExerciseData = exerciseData
const DataList = exerciseData.DataList

export default function BreakScreen({ navigation }: any) {
  const [isDark, setIsDark] = useState<boolean>(false)

  const goToStartExercise = () => {
    navigation.navigate('StartExercise')
  }

  const goToNextExercise = () => {
    setIsPlaying(false)
    navigation.dispatch(
      StackActions.replace('ExerciseCourse', {
        // dataList: dataList,
        // listIndex: listIndex + 1,
        // totalTime: totalTime + restTime,
        // routineIdx: routineIdx,
      }),
    )
  }

  //   const pushReplace = async (healthCategoryIdx, name, caution) => {
  //     let replacedData = [...dataList]

  //     replacedData[listIndex + 1].exerciseInfo.healthCategoryIdx = healthCategoryIdx
  //     replacedData[listIndex + 1].exerciseInfo.exerciseName = name
  //     replacedData[listIndex + 1].exerciseInfo.caution = caution

  //     navigation.dispatch(
  //       StackActions.replace('ExerciseCourse', {
  //         dataList: replacedData,
  //         listIndex: listIndex + 1,
  //         routineIdx: routineIdx,
  //         totalTime: totalTime,
  //       }),
  //     )
  //   }

  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [duration, setDuration] = useState<number>(30)
  const [restTime, setRestTime] = useState<number>(0)

  //타이머용 children
  const children = ({ remainingTime }: any) => {
    const minutes = Math.floor(remainingTime / 60)
    let min = minutes < 10 ? '0' + minutes : minutes
    const seconds = remainingTime % 60
    let sec = seconds < 10 ? '0' + seconds : seconds

    return `${min}:${sec}`
  }
  const RestTime = ({ remainingTime }: any) => {
    return setRestTime(-1 * (30 - remainingTime))
  }

  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['65%'], [])

  const handleModal = () => {
    // bottomSheetRef.current?.present()
  }

  //   const renderBackdrop = useCallback(
  //     (props) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />,
  //     [],
  //   )

  const [replaceList, setReplaceList] = useState([])
  //let healthCategoryIdx = dataList[listIndex + 1].exerciseInfo.healthCategoryIdx
  let healthCategoryIdx = 11

  return (
    <BottomSheetModalProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDark ? colors.grey9 : colors.grey2,
        }}
      >
        <ExerciseCard isDark={isDark} exerciseName="휴식 시간">
          <StopExercise onPress={() => StopConfirm(goToStartExercise)}>
            <Close width={24} height={24} color={isDark ? colors.white : colors.black} />
          </StopExercise>
          <ExerciseCircle isDark={isDark}>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={duration}
              colors={colors.main1}
              size={315}
              strokeWidth={8}
              trailColor={isDark ? colors.grey7 : colors.grey3}
              onComplete={goToNextExercise}
              updateInterval={0.001}
              rotation={'counterclockwise'}
            >
              {({ remainingTime }: any) => (
                RestTime({ remainingTime }), (<TimerText isDark={isDark}>{children({ remainingTime })}</TimerText>)
              )}
            </CountdownCircleTimer>
          </ExerciseCircle>
          <ExerciseContainer>
            <ReplaceButton isDark={isDark} onPress={handleModal}>
              <ReplaceButtonText isDark={isDark}>운동 대체하기</ReplaceButtonText>
            </ReplaceButton>

            <BlurSet
              set={1}
              kg={DataList[0].sets[0].weight}
              num={DataList[0].sets[0].rep}
              isDark={isDark}
              run={
                DataList[0].ExerciseInfo.healthCategoryIdx === 24 || DataList[0].ExerciseInfo.healthCategoryIdx === 25
                  ? true
                  : false
              }
            />
          </ExerciseContainer>
          <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{
              borderRadius: 20,
              backgroundColor: isDark ? colors.grey8 : colors.white,
            }}
            // backdropComponent={renderBackdrop}
          >
            <ModalTitleView isDark={isDark}>
              <ModalTitle isDark={isDark}>운동 대체하기</ModalTitle>
              <ModalTitle2 isDark={isDark}>현재 운동과 유사한 효과의 운동을 추천해 드릴게요.</ModalTitle2>
            </ModalTitleView>
            <BottomSheetBack>
              <SeperateLine isDark={isDark} />

              {/* {replaceList.map((item, healthCategoryIdx) => (
                <ReplaceView isDark={isDark}>
                  <ReplaceView2 isDark={isDark}>
                    <ReplaceImage source={pngPath.path[item.healthCategoryIdx - 1]} isDark={isDark} />
                    <ReplaceTextView isDark={isDark} key={healthCategoryIdx}>
                      <ReplaceText1 isDark={isDark}>{item.name}</ReplaceText1>
                      <ReplaceText2 isDark={isDark}>
                        {item.parts} | {editLength(item.muscle)}| {item.equipment}
                      </ReplaceText2>
                    </ReplaceTextView>
                  </ReplaceView2>
                  <ReplaceButton2
                    isDark={isDark}
                    onPress={() => {
                      pushReplace(item.healthCategoryIdx, item.name, item.caution)
                    }}
                  >
                    <ReplaceButtonText isDark={isDark}>대체하기</ReplaceButtonText>
                  </ReplaceButton2>
                </ReplaceView>
              ))} */}
            </BottomSheetBack>
          </BottomSheetModal>
        </ExerciseCard>
        <NextView isDark={isDark}>
          <NextTextView>
            <JustView>
              <ArrowCircle width={24} height={24} color={isDark ? colors.black : colors.white} />
              <NextText isDark={isDark}>{DataList[1].ExerciseInfo.exerciseName}</NextText>
            </JustView>
            <StartButton onPress={goToNextExercise}>
              <StartButtonText>바로 시작하기</StartButtonText>
            </StartButton>
          </NextTextView>
          {/* <AdBox>
            <AdView isSetGap={false} type="video" media={true} />
          </AdBox> */}
        </NextView>
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{
            borderRadius: 20,
            backgroundColor: isDark ? colors.grey8 : colors.white,
          }}
          //   backdropComponent={renderBackdrop}
        >
          <BottomSheetBack></BottomSheetBack>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  )
}

const StartButton = styled.TouchableOpacity`
  padding: 8px 12px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${colors.main1};
  width: 99px;
  margin-right: 24px;
`

const StartButtonText = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: 13px;
  font-family: Pretendard-SemiBold;
  line-height: 19.5px;
  width: 80px;
`

const ReplaceView2 = styled.View`
  flex-direction: row;
  align-items: center;
`

const ReplaceTextView = styled.View`
  align-items: baseline;
`

const BottomSheetBack = styled.View`
  height: 100%;
`

const ExerciseCircle = styled.View`
  width: 307px;
  height: 307px;
  border-radius: 291px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.grey1)};
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
`
const ExerciseContainer = styled.View`
  width: 327px;
`

const ReplaceButton = styled.TouchableOpacity`
  width: 95px;
  height: 36px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  margin-bottom: 12px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey7 : colors.grey3)};
`

const ReplaceButtonText = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.main1)};
  text-align: center;
  font-size: 13px;
  font-family: Pretendard-SemiBold;
  line-height: 19.5px;
`

const NextView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  border-radius: 20px 20px 0px 0px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 0px 16px;
  z-index: 0;
`

const NextTextView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
`

const NextText = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.white)};
  font-size: 15px;
  font-family: Pretendard-SemiBold;
  line-height: 22.5px;
  width: 230px;
  height: 24px;
  padding-left: 8px;
`

const ModalTitleView = styled.View`
  height: 59px;
  margin: 24px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.white)};
`

const ModalTitle = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  font-size: 20px;
  font-family: Pretendard-SemiBold;
  line-height: 32px;
  margin-bottom: 4px;
`

const ModalTitle2 = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey2 : colors.grey8)};
  font-size: 15px;
  font-family: Pretendard-Regular;
  line-height: 22.5px;
`

const SeperateLine = styled.View`
  height: 1px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey7 : colors.grey2)};
`

const ReplaceView = styled.View`
  height: 92px;
  width: 100%;
  padding: 24px;
  align-items: center;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.white)};
  flex-direction: row;
  justify-content: space-between;
`

const ReplaceText1 = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  text-align: center;
  font-size: 17px;
  font-family: Pretendard-Medium;
  line-height: 25.5px;
`

const ReplaceText2 = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey3 : colors.grey7)};
  font-size: 13px;
  font-family: Pretendard-Regular;
  line-height: 19.5px;
`

const ReplaceButton2 = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey7 : colors.grey3)};
  margin-top: 18px;
  margin-bottom: 12px;
  width: 69px;
  height: 36px;
`

const TimerText = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  font-size: 56px;
  font-family: Pretendard-Regular;
`

const StopExercise = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 24px;
`

const ReplaceImage = styled.Image`
  height: 60px;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 999px;
`

const JustView = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 250px;
`
