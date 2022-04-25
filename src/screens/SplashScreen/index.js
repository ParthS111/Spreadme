import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class SplashScreen extends Component {
    componentDidMount(){
        console.log(this.props.navigation);
        this.props.navigation.push("Login")
    }
  render() {
    return (
      <View>
        <Text>index</Text>
      </View>
    )
  }
}

export default SplashScreen