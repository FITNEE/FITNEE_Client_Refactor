import { useIsFocused, useRoute, StackActions } from '@react-navigation/native'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Alert, SafeAreaView, TextInput, Dimensions, Animated, StyleSheet } from 'react-native'
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import ExerciseCard from '@/components/Exercise/ExerciseCard'
import ExerciseButton from '@/components/Exercise/ExerciseButton'
import CurrentSet from '@/components/Exercise/CurrentSet'
import { getGIF } from '@/utils/getImage'
const { width, height } = Dimensions.get('window')

export default function ExerciseMain({ navigation }: any) {
  const [isDark, setIsDark] = useState<boolean>(false)
  const isFocused = useIsFocused()
  const goToCourse = () => navigation.navigate('ExerciseCourse')

  //bottom-sheet용
  const snapPoints = useMemo(() => ['70%'], [])
  const bottomSheetRef = useRef(null)
  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} pressBehavior="close" />,
    [],
  )

  return (
    <BottomSheetModalProvider>
      {/* <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            justifyContent: 'center',
            width,
            height,
            opacity: timerAnimation,
            backgroundColor: 'rgba(38, 38, 38, 0.40)',
            zIndex: zIndexAnimation,
          },
        ]}
      >
        <TextInput ref={inputRef} style={styles.text} defaultValue={'3'} Opacity={'1'} editable={false} />
      </Animated.View> */}

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDark ? colors.grey9 : colors.grey2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ExerciseCard exerciseName="사이드 레터럴 레이즈" isDark={isDark}>
          <ExerciseImage source={getGIF[11]} resizeMode="contain" />
          <ExerciseContainer>
            <ReplaceButton isDark={isDark} disabled={false}>
              <ReplaceButtonText isDark={isDark}>운동 대체하기</ReplaceButtonText>
            </ReplaceButton>

            <CurrentSet set={1} kg={0} num={0} run={false} />

            <CurrentExplain isDark={isDark}>{}</CurrentExplain>
          </ExerciseContainer>

          <ExerciseButton //운동 시작 버튼
            text="운동 시작"
            disabled={false}
            // onPress={animation}
            onPress={goToCourse}
            isDark={isDark}
          />
          <SkipExercrise>
            <SkipExercriseText isDark={isDark}>이 운동 건너뛰기</SkipExercriseText>
          </SkipExercrise>
          <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{
              borderRadius: 20,
              backgroundColor: isDark ? colors.grey8 : colors.white,
            }}
            backdropComponent={renderBackdrop}
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
                        {item.parts} | {item.muscle} | {item.equipment}
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
      </SafeAreaView>
    </BottomSheetModalProvider>
  )
}

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

const SkipExercrise = styled.TouchableOpacity`
  width: 85px;
  height: 20px;
  position: relative;
  margin-top: 16px;
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
  line-height: 19.5px;
  font-family: Pretendard-SemiBold;
`

const CurrentExplain = styled.View`
  width: 327px;
  height: 108px;
  border-radius: 12px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.grey1)};
  padding: 16px;
  justify-content: center;
  margin-bottom: 5px;
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

const SkipExercriseText = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey2 : colors.grey8)};
  text-align: center;
  font-size: 13px;
  font-family: Pretendard-SemiBold;
  line-height: 19.5px;
  text-decoration-line: underline;
  width: 100px;
`

const ExerciseImage = styled.Image`
  height: 307px;
  aspect-ratio: 1;
  border-radius: 999px;
`

const ReplaceImage = styled.Image`
  height: 60px;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
`
