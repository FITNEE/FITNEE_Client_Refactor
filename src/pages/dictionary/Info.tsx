import ScreenLayout from '@/components/ScreenLayout'
import styled from 'styled-components/native'
import BackIcon from '@/assets/images/SVGs/icon/LeftArrow.svg'
import { TouchableOpacity } from 'react-native'
import { colors } from '@/libs/Colors'
import DictionaryBottomSheet from '@/components/dictionary/BottomSheet'

export default function DictionaryInfo() {
  return (
    <ScreenLayout lightBack={colors.grey1}>
      <TopContainer>
        <TouchableOpacity>
          <BackIcon width={24} height={24} color={colors.black} />
        </TouchableOpacity>
      </TopContainer>
      <DictionaryBottomSheet />
    </ScreenLayout>
  )
}

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px;
`
