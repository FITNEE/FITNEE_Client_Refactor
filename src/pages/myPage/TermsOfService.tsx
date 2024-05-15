import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { TermsOfServiceData } from '@/utils/terms/TermsData'

export default function TermsOfService() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.grey1 }}>
      <Container contentContainerStyle={{ alignItems: 'center' }}>
        <ContentContainer>
          <Content>서비스 이용약관</Content>
          <SubContent>{TermsOfServiceData}</SubContent>
        </ContentContainer>
      </Container>
    </SafeAreaView>
  )
}

const Container = styled.ScrollView`
  margin-top: 17px;
`
const ContentContainer = styled.View`
  width: 327px;
`

const Content = styled.Text`
  font-size: 15px;
  font-family: 'Medium';
  margin-bottom: 8px;
`
const SubContent = styled.Text`
  font-size: 13px;
  font-family: 'Regular';
`
