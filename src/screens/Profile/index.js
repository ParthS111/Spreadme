import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Profile extends Component {
  componentDidMount(){
    this.props.navigation.push("Lead")
  }
  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    )
  }
}

export default Profile