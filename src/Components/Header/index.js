import React, { Component } from 'react'
import { View, TouchableOpacity, Image, StyleSheet, TouchableHighlight } from 'react-native'
import Label from '../Label';
import { Color, ThemeUtils } from "../../utils";
import Back from '../../Assets/icon/back.png'
import Notify from '../../Assets/icon/notification.png'

export class Header extends Component {

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.props.BackBtn}>
            <Image
              resizeMode="contain"
              style={styles.backImg}
              source={Back}
            />
          </TouchableOpacity>


          <Label ml={10} bold xlarge color={Color.WHITE}>{this.props.title}</Label>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity onPress={this.props.BackBtn}>
            <Image
              resizeMode="contain"
              style={styles.Notify}
              source={Notify}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
            <Image style={styles.image} source={this.props.url} />
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({

  imageContainer: {
    borderRadius: 64
  },
  image: {
    height: ThemeUtils.relativeHeight(5.4),
    width: ThemeUtils.relativeWidth(12),
    borderRadius: 64,
    marginRight: ThemeUtils.relativeWidth(3)
  },
  container: {
    flexDirection: "row", justifyContent: 'space-between', alignItems: "center",
    backgroundColor: Color.RED, height: ThemeUtils.relativeHeight(8)
  },
  firstContainer: { flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', },
  backImg: {
    width: ThemeUtils.relativeWidth(5),
    height: ThemeUtils.relativeHeight(3),
    marginLeft: ThemeUtils.relativeWidth(5)
  },
  Notify: {
    width: ThemeUtils.relativeWidth(5),
    height: ThemeUtils.relativeHeight(3),
    marginRight: ThemeUtils.relativeWidth(5)
  },
  secondContainer: { flex: 0.5, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' },


});

export default Header
