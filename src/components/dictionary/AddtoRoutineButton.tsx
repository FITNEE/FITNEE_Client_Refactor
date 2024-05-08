import { colors } from '@/libs/Colors'
import { screenWidth } from '@/libs/Dimensions'
import { useState } from 'react'
import styled from 'styled-components/native'

interface AddtoRoutineButtonProps {
  disabled: boolean
}

export default function AddtoRoutineButton({ disabled }: AddtoRoutineButtonProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <>
      {disabled ? (
        <DisabledContainer>
          <DisabledDayText>월</DisabledDayText>
        </DisabledContainer>
      ) : isSelected ? (
        <SelectedContainer
          onPress={() => {
            setIsSelected(!isSelected)
          }}
        >
          <SelectedDayText>월</SelectedDayText>
          <PartText>등, 어깨, 가슴</PartText>
        </SelectedContainer>
      ) : (
        <UnselectedContainer
          onPress={() => {
            setIsSelected(!isSelected)
          }}
        >
          <UnselectedDayText>월</UnselectedDayText>
          <PartText>등, 어깨, 가슴</PartText>
        </UnselectedContainer>
      )}
    </>
  )
}

const width = screenWidth / 2 - 48

const Container = styled.TouchableOpacity`
  padding: 10px 8px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  width: ${`${width}px`};
`
const SelectedContainer = styled(Container)`
  background-color: ${colors.main2};
  border: 1px solid ${colors.main1};
`
const UnselectedContainer = styled(Container)`
  background-color: ${colors.grey1};
  border: 1px solid ${colors.grey1};
`
const DisabledContainer = styled.View`
  padding: 10px 8px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  width: ${`${width}px`};
  background-color: ${colors.grey2};
  border: 1px solid ${colors.grey2};
`

const DayText = styled.Text`
  font-family: 'Medium';
  font-size: 15px;
`
const SelectedDayText = styled(DayText)`
  color: ${colors.main1};
`
const UnselectedDayText = styled(DayText)`
  color: ${colors.black};
`
const DisabledDayText = styled(DayText)`
  color: ${colors.grey4};
`

const PartText = styled.Text`
  font-family: 'Medium';
  font-size: 15px;
  color: ${colors.grey6};
`
