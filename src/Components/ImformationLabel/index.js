import { Text, StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'
import Label from '../Label'
import { Color, ThemeUtils } from '../../utils'

export default class InformationLabel extends Component {
  render() {
    return (
        <View style={{flexDirection:'row',width:ThemeUtils.relativeWidth(40),paddingVertical:ThemeUtils.relativeHeight(1)}}>
        <Image
                           resizeMode="contain"
                           style={{
                               width: ThemeUtils.relativeHeight(2.5),
                               height: ThemeUtils.relativeHeight(3),
                               marginRight: ThemeUtils.relativeWidth(3)
                           }}
                           source={this.props.image}
                       />
                       <Label small color={Color.BLACK}>{this.props.label}</Label>

   </View>
    )
  }
}

const styles = StyleSheet.create({})