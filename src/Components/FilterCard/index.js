import { TouchableOpacity, Image, View } from 'react-native'
import React, { Component } from 'react'
import { Color, ThemeUtils } from '../../utils'
import Label from '../Label'
import Delete from '../../Assets/icon/delete.png'
import Edit from '../../Assets/icon/edit.png'
import Reload from '../../Assets/icon/reload.png'
export default class FilterCard extends Component {
  render() {
    return (
      <View style={{
        width: ThemeUtils.relativeWidth(90), borderWidth: 1, borderColor: Color.BACKGROUND, backgroundColor: Color.BACKGROUND,
        borderRadius:4,

      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: ThemeUtils.relativeWidth(2) }}>

          <Label large bolder Color={Color.BLACK}>Libblush</Label>
          <TouchableOpacity onPress={()=>console.log("kkkk")}>
            <Image
              resizeMode="contain"
              style={{
                width: ThemeUtils.relativeHeight(2.5),
                height: ThemeUtils.relativeHeight(2.5),
                marginRight: ThemeUtils.relativeWidth(1.5)
              }}
              source={Delete}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: ThemeUtils.relativeWidth(2) }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{
                width: ThemeUtils.relativeHeight(2),
                height: ThemeUtils.relativeHeight(2),
                marginRight: ThemeUtils.relativeWidth(3)
              }}
              source={Edit}
            />
          </TouchableOpacity>
              <Label  mr={19}Color={Color.BLACK} bolder>Apr 6 ,22</Label>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{
                width: ThemeUtils.relativeHeight(2),
                height: ThemeUtils.relativeHeight(2),
                marginRight: ThemeUtils.relativeWidth(3)
              }}
              source={Reload}
            />
          </TouchableOpacity>
              <Label  mr={19}Color={Color.BLACK} bolder>Apr 6 ,22</Label>
          </View>
        </View>
      </View>
    )
  }
}

