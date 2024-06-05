import { View, Text, Platform } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useState } from 'react'
import { Picker } from 'react-native-wheel-pick'
import WheelPickerExpo from 'react-native-wheel-picker-expo'

export default function WheelPicker() {
  const [isDark] = useAtom(isDarkModeAtom)
  const [value, setValue] = useState(0)

  let data = []
  for (var i = 0; i < 201; i += 5) {
    data.push(i)
  }
  //, borderWidth: StyleSheet.hairlineWidth
  return (
    <View>
      {Platform.OS === 'android' ? (
        <PickerContainer>
          <WheelPickerExpo
            height={200}
            width={288}
            initialSelectedIndex={8}
            items={data.map(num => ({ label: num.toString(), value: num }))}
            onChange={({ index, item }: any) => setValue(item)}
            backgroundColor={isDark ? colors.grey8 : colors.white}
            selectedStyle={{ borderColor: '#E8EBF0', borderWidth: 0.5 }}
            renderItem={(props: any) => (
              <Text
                style={{
                  fontFamily: 'Regular',
                  fontSize: 20,
                  color: isDark ? colors.white : colors.black,
                }}
              >
                {props.label}
              </Text>
            )}
          />
        </PickerContainer>
      ) : (
        <Picker
          textColor={isDark ? colors.white : colors.black}
          style={{
            backgroundColor: isDark ? colors.grey8 : colors.white,
            width: 288,
            height: 200,
            borderRadius: 20,
          }}
          selectedValue="40"
          pickerData={data}
          onValueChange={(value: number) => {
            setValue(value)
          }}
        />
      )}
    </View>
  )
}
const PickerContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
`
