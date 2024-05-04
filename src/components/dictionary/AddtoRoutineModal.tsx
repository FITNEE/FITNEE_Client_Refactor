import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { ModalVisibilityAtom } from '@/states/DictionaryStates'
import { colors } from '@/libs/Colors'
import AddtoRoutineButton from './AddtoRoutineButton'

const dummyData = [
  { day: '1', part: '아이템 1' },
  { day: '2', part: '아이템 2' },
  { day: '3', part: '아이템 3' },
  { day: '4', part: '아이템 1' },
  { day: '5', part: '아이템 2' },
  { day: '6', part: '아이템 3' },
  { day: '7', part: '아이템 3' },
]

export default function AddtoRoutineModal() {
  const [isVisible, setIsVisible] = useAtom(ModalVisibilityAtom)

  const onPressConfirmBtn = () => {
    setIsVisible(false)
  }

  return (
    <Modal
      isVisible={isVisible}
      backdropTransitionOutTiming={0}
      onBackdropPress={() => setIsVisible(false)}
      style={{ paddingLeft: 8, paddingRight: 8, alignItems: 'center', justifyContent: 'center' }}
      backdropOpacity={0.4}
      backdropColor={colors.black}
    >
      <Container>
        <TopContainer>
          <TitleContainer>
            <Title>루틴에 운동 추가하기</Title>
            <SubTitle>운동을 추가하고 싶은 요일을 선택해주세요.</SubTitle>
          </TitleContainer>
          <DayContainer>
            {dummyData.map((_, index) => (
              <AddtoRoutineButton disabled={false} />
            ))}
          </DayContainer>
        </TopContainer>
        <ButtonContainer>
          <CancelBtn onPress={() => setIsVisible(false)}>
            <CancelText>취소</CancelText>
          </CancelBtn>
          <ConfirmBtn onPress={onPressConfirmBtn}>
            <ConfirmText>선택 완료</ConfirmText>
          </ConfirmBtn>
        </ButtonContainer>
      </Container>
    </Modal>
  )
}

const Container = styled.View`
  width: 100%;
  background-color: ${colors.white};
  border-radius: 20px;
  justify-content: space-between;
`
const TopContainer = styled.View`
  gap: 24px;
  padding: 24px 16px;
  width: 100%;
`
const TitleContainer = styled.View`
  gap: 8px;
  padding: 4px 0;
  width: 100%;
  align-items: center;
`
const Title = styled.Text`
  color: ${colors.black};
  font-family: 'SemiBold';
  font-size: 20px;
`
const SubTitle = styled.Text`
  font-size: 13px;
  font-family: 'Regular';
  color: ${colors.black};
`
const DayContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`
const ButtonContainer = styled.View`
  flex-direction: row;
`
const CancelBtn = styled.TouchableOpacity`
  border-radius: 0 0 0 20px;
  background-color: ${colors.grey2};
  align-items: center;
  padding: 15px 0;
  flex: 1;
`
const CancelText = styled.Text`
  color: ${colors.grey7};
  font-family: 'SemiBold';
  font-size: 17px;
`
const ConfirmBtn = styled.TouchableOpacity`
  border-radius: 0 0 20px 0;
  background-color: ${colors.main1};
  align-items: center;
  padding: 15px 0;
  flex: 2;
`
const ConfirmText = styled.Text`
  color: ${colors.white};
  font-family: 'SemiBold';
  font-size: 17px;
`
