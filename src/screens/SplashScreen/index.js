import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Routes from '../../router/routes'
export class SplashScreen extends Component {
    componentDidMount(){
        console.log(this.props.navigation);
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: Routes.NotAuthenticated }],
      });
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