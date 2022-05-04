import { Text, View, SafeAreaView, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { style } from './style'
import { Color } from '../../utils/Color'
import Header from '../../Components/Header'
import ProfileImg from '../../Assets/Images/profile.jpg'
import Card from '../../Components/Card'
import { ThemeUtils } from '../../utils'
import Label from '../../Components/Label'
import CircularProgress from 'react-native-circular-progress-indicator';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;10

const data = {
  labels: ["10", "30", "50", "70", "90", "110","130","150"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  // legend: ["Rainy Days"] // optional
};

const chartConfig = {
  backgroundColor: Color.BACKGROUND,
  backgroundGradientFrom: Color.BACKGROUND,
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 1, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
    backgroundColor:"red"
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
}


export class Profile extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.BACKGROUND }}>
        <View style={{ flex: 0.1 }}>
          <Header title={'DashBoard'}
            BackBtn={() => console.log("hdhdh")}
            url={ProfileImg} />
        </View>
        <View style={{ flex: 0.4, marginHorizontal: ThemeUtils.relativeWidth(5), justifyContent: 'center' }}>
          <Card>
            <View style={{ flexDirection: 'row', height: ThemeUtils.relativeHeight(30) }}>
              <View style={{ alignItems: "center", flex: 0.4, justifyContent: 'space-around' }}>
                <View>
                  <Label>Totoal leads</Label>
                  <View style={{ marginTop: ThemeUtils.relativeHeight(0.5), backgroundColor: Color.RED, alignItems: 'center', paddingVertical: ThemeUtils.relativeHeight(0.5), borderRadius: 5 }}>
                    <Label color={Color.WHITE} bold>156</Label>
                  </View>
                </View>
                <View>
                  <Label>New leads</Label>
                  <View style={{ marginTop: ThemeUtils.relativeHeight(0.5), backgroundColor: Color.BLACK, alignItems: 'center', paddingVertical: ThemeUtils.relativeHeight(0.5), borderRadius: 5 }}>
                    <Label color={Color.WHITE} bold>156</Label>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center", flex: 0.6, justifyContent: 'space-around' }}>
                <CircularProgress
                  value={157}
                  radius={80}
                  duration={1000}
                  progressValueFontSize={1}
                  progressValueColor={"white"}
                  subtitle={157}
                  subtitleFontSize={30}
                  inActiveStrokeColor={Color.BLACK}
                  inActiveStrokeOpacity={0.7}
                  inActiveStrokeWidth={20}
                  activeStrokeWidth={20}
                  activeStrokeColor={Color.RED}
                  maxValue={200}
                  title={"Total"}
                  titleColor={'white'}
                  titleStyle={{ color: Color.BLACK }}
                />
              </View>

            </View>
          </Card>
        </View>
        <View style={{ flex: 0.5, backgroundColor: 'white' ,justifyContent:'center',alignItems:'center'}}>
          <LineChart
            data={data}
            width={screenWidth}
            height={299}
            // verticalLabelRotation={30}
            chartConfig={{
              backgroundGradientFrom: "transparent",
              backgroundGradientTo: "transparent",
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              formatXLabel:"red",
              labelColor: (opacity = 1) => Color.BLACK,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              width:ThemeUtils.relativeWidth(95),
              marginVertical: 8,
              borderRadius: 16,
              backgroundColor:Color.BACKGROUND
            }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default Profile