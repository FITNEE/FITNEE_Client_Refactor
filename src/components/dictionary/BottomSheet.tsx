import styled from 'styled-components/native'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import { useCallback, useMemo } from 'react'
import { colors } from '@/libs/Colors'
import AddIcon from '@/assets/images/SVGs/icon/Plus.svg'
import { screenWidth } from '@/libs/Dimensions'
import Process from './Process'
import Caution from './Caution'
import { useAtom } from 'jotai'
import { ModalVisibilityAtom } from '@/states/DictionaryStates'

const exerciseInfoList = [
  {
    title: '안장 높낮이 조절',
    description: '안장의 높이를 삼두 중앙보다 약간 위쪽과 같도록 맞춘 후 손잡이를 잡아주세요.',
  },
  {
    title: '안장 높낮이 조절',
    description: '안장의 높이를 삼두 중앙보다 약간 위쪽과 같도록 맞춘 후 손잡이를 잡아주세요.',
  },
  {
    title: '안장 높낮이 조절',
    description: '안장의 높이를 삼두 중앙보다 약간 위쪽과 같도록 맞춘 후 손잡이를 잡아주세요.',
  },
] //dummy
const cautionList = [
  '적절한 무게로 승모근에 무리가 가지 않도록 하세요.',
  '적절한 무게로 승모근에 무리가 가지 않도록 하세요.',
  '적절한 무게로 승모근에 무리가 가지 않도록 하세요.',
] //dummy

export default function DictionaryBottomSheet() {
  const snapPoints = useMemo(() => ['45%', '92%'], [])
  const [, setIsModalVisible] = useAtom(ModalVisibilityAtom)

  const showAddRoutineModal = () => {
    setIsModalVisible(true)
  }

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} pressBehavior="none" />,
    [],
  )

  return (
    <BottomSheet snapPoints={snapPoints} index={0} backdropComponent={renderBackdrop}>
      <BottomSheetView>
        <TopContainer>
          <PartText>어깨 | 측면 삼각근 | 머신</PartText>
          <NameText>사이드 레터럴 레이즈 머신</NameText>
          <AddButton onPress={showAddRoutineModal}>
            <AddIcon width={18} height={18} color={colors.main1} />
          </AddButton>
        </TopContainer>
        <TabContainer>
          <Tab>
            <TabText>운동방법</TabText>
          </Tab>
        </TabContainer>
      </BottomSheetView>
      <Content showsVerticalScrollIndicator={false}>
        <ProcessContainer>
          {exerciseInfoList.map((exerciseInfo, index) => (
            <Process index={index + 1} title={exerciseInfo.title} description={exerciseInfo.description} key={index} />
          ))}
        </ProcessContainer>
        <Caution description={cautionList} />
      </Content>
    </BottomSheet>
  )
}

const TopContainer = styled.View`
  padding: 24px;
  gap: 4px;
  width: 100%;
  position: relative;
`
const PartText = styled.Text`
  color: ${colors.main1};
  font-family: 'Regular';
  font-size: 13px;
`
const NameText = styled.Text`
  color: ${colors.black};
  font-family: 'SemiBold';
  font-size: 24px;
`
const AddButton = styled.TouchableOpacity`
  background-color: ${colors.main2};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 24px;
`

const TabContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey2};
  width: 100%;
  height: 44px;
  margin-top: 8px;
  position: relative;
`
const Tab = styled.View`
  width: ${`${screenWidth / 2 - 32}px`};
  padding: 11px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.main1};
  position: absolute;
  bottom: -1px;
  left: 24px;
  align-items: center;
`
const TabText = styled.Text`
  font-size: 15px;
  font-family: 'SemiBold';
  color: ${colors.black};
`
const Content = styled(BottomSheetScrollView)`
  padding: 16px 24px;
  width: 100%;
`
const ProcessContainer = styled.View`
  width: 100%;
  gap: 8px;
  margin-bottom: 36px;
`
const CautionContainer = styled.View`
  gap: 2px;
`
