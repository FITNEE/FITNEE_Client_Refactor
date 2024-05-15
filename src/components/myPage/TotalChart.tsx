import React, { useRef, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Text as TextSVG, Line, Circle } from 'react-native-svg'
import { colors } from '@/libs/Colors'
import styled from 'styled-components/native'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'
import { combineWeek } from '@/utils/myPage/ChartData'

interface WeekData {
  weekNumber: string
  weeklyCalories: number
  weeklyDistance: number
  weeklyExerciseTime: number
  numberOfWeeks: number | string
  ifWeek1: number
}

interface TotalChartProps {
  weekData: WeekData[]
}

interface MessageState {
  x: number
  y: number
  visible: boolean
  value: number
}

export default function TotalChart(props: TotalChartProps) {
  const [isDark] = useAtom(isDarkModeAtom)

  const [message, setMessage] = useState<MessageState>({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  })

  const chartConfig = {
    color: () => (isDark ? colors.grey7 : colors.grey1),
    labelColor: () => (isDark ? colors.grey2 : colors.grey7),
    useShadowColorFromDataset: true,
    decimalPlaces: 0,
    fillShadowGradientFromOpacity: 0.3,
    fillShadowGradientToOpacity: 0,
    backgroundGradientFrom: isDark ? '#141414' : '#F6F8FA',
    backgroundGradientTo: isDark ? '#141414' : '#F6F8FA',
    propsForLabels: {
      fontSize: 11,
      fontFamily: 'SemiBold',
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: isDark ? colors.grey8 : colors.grey2,
      strokeDasharray: '0',
    },
    propsForDots: {
      r: '5',
    },
  }

  const screenWidth = Dimensions.get('window').width

  const weekData = props.weekData
  const LabelData = weekData.map(result => result.weekNumber)
  const KcalData = weekData.map(result => result.weeklyCalories)
  const KmData = weekData.map(result => result.weeklyDistance)
  const isFirstWeek = weekData.map(result => result.ifWeek1)

  const totalArray = combineWeek(isFirstWeek, LabelData, KmData, KcalData, weekData)

  const LabelArray = []
  for (let i = 0; i < totalArray[0].label.length; i++) {
    if (i == 0) {
      LabelArray.push(`${totalArray[0].label[i]}`)
    } else if (i == totalArray[0].label.length - 1) {
      LabelArray.push('이번주')
    } else if (totalArray[0].label[i].includes('1주')) {
      LabelArray.push(`${totalArray[0].label[i]}`)
    } else {
      LabelArray.push(`${totalArray[0].label[i].slice(-2)}`)
    }
  }
  const KcalArray = totalArray[0].kcaldata.map(value => Number(value))
  const KmArray = totalArray[0].kmdata.map(value => Number(value))

  const KcalMax = Math.max(...KcalArray)
  const KmMax = Math.max(...KmArray)
  const calorieData = KcalMax != 0 ? KcalArray.map(value => value / KcalMax) : KcalArray.map(value => value)
  const distanceData = KmMax != 0 ? KmArray.map(value => value / KmMax) : KmArray.map(value => value)
  const [maxData, setMaxData] = useState<number>(0)

  const data = {
    labels: LabelArray,
    datasets: [
      {
        data: calorieData,
        color: () => colors.main1,
        strokeWidth: 2,
      },
      {
        data: distanceData,
        color: () => colors.green,
        strokeWidth: 2,
      },
      {
        data: [1.2],
        color: () => 'transparent',
        withDots: false,
      },
      {
        data: [0],
        color: () => 'transparent',
        withDots: false,
      },
    ],
  }

  const [unit, setUnit] = useState('kcal')

  const [xRender] = useState(data.labels.length > 4 ? (data.labels.length * screenWidth) / 4 - screenWidth + 18 : 0)

  const scrollViewRef = useRef<ScrollView>()
  const clickPoint = (position: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: position, y: 0, animated: true })
    }
  }

  return (
    <BoxContainer isDark={isDark}>
      {data.labels.length < 2 && <NoneChartText isDark={isDark}>아직 데이터가 충분하지 않아요</NoneChartText>}
      {data.labels.length > 1 && (
        <Container
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentOffset={{
            x: xRender,
            y: 0,
          }}
        >
          <LineChart
            data={data}
            width={data.labels.length > 4 ? (data.labels.length * screenWidth) / 4 : screenWidth}
            //width={screenWidth-48}
            height={230}
            chartConfig={chartConfig}
            fromZero={true}
            bezier
            withHorizontalLabels={false}
            withVerticalLines={false}
            withHorizontalLines={true}
            style={{
              paddingRight: 7,
            }}
            decorator={() => {
              return message.visible ? (
                <>
                  <Circle cx={message.x} cy={message.y} r={3} fill={isDark ? colors.black : colors.white} />
                  {message.value != 0 ? (
                    <Line
                      x1={message.x}
                      x2={message.x}
                      y1={message.y + 5}
                      y2={189}
                      stroke={isDark ? colors.white : colors.black}
                      strokeWidth={2}
                      strokeDasharray={3}
                    ></Line>
                  ) : (
                    ''
                  )}
                  <View
                    style={{
                      position: 'absolute',
                      width: 62,
                      height: 32,
                      top: message.y - 40,
                      left: message.x === 7 ? 7 : message.x - 31,
                      backgroundColor: isDark ? colors.white : colors.black,
                      borderRadius: 12,
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: 'Bold',
                        color: isDark ? colors.black : colors.white,
                        textAlign: 'center',
                      }}
                    >
                      {message.value * maxData}
                    </Text>
                    {
                      <Text
                        style={{
                          fontSize: 11,
                          fontFamily: 'Medium',
                          color: isDark ? colors.black : colors.white,
                          textAlign: 'center',
                        }}
                      >
                        {unit}
                      </Text>
                    }
                  </View>
                </>
              ) : null
            }}
            onDataPointClick={data => {
              data.dataset.data === calorieData ? setUnit(' kcal') : setUnit(' km')
              data.dataset.data === calorieData ? setMaxData(KcalMax) : setMaxData(KmMax)
              data.dataset.data.length > 3 ? clickPoint(data.x - screenWidth + 111) : ''
              let isSamePoint = message.x === data.x && message.y === data.y
              isSamePoint
                ? setMessage(previousState => {
                    return {
                      ...previousState,
                      value: data.value,
                      visible: !previousState.visible,
                    }
                  })
                : setMessage({
                    x: data.x,
                    value: data.value,
                    y: data.y,
                    visible: true,
                  })
            }}
          />
        </Container>
      )}
    </BoxContainer>
  )
}

const Container = styled.ScrollView``
const BoxContainer = styled.View`
  margin: 26px 24px 0px 24px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.grey1)};
  border-radius: 20px;
  padding: 16px 16px 10px 16px;
`
const NoneChartText = styled.Text`
  padding: 112px 0px;
  font-size: 11px;
  font-style: normal;
  font-family: 'SemiBold';
  line-height: 16.5px;
  opacity: 0.6;
  text-align: center;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey2 : colors.grey7)};
`
