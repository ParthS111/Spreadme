import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './style'
import Header from '../../Components/Header'
import { Color, ThemeUtils } from '../../utils'
import Label from '../../Components/Label'
import FilterCard from '../../Components/FilterCard'

export class Filter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.1 }}>
                    <Header title={'Dashboard'} url={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }} />
                </View>
                <View style={[styles.center, { flex: 0.2,justifyContent:'space-between' }]}>
                    <View style={[styles.center, styles.card]}>
                        <TouchableOpacity style={styles.btn} onPress={() => console.log("heheh")}>
                            <Label color={Color.WHITE}>Create Lead Filter</Label>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:ThemeUtils.relativeWidth(90),borderWidth:1,alignItems:'center',borderColor:Color.BACKGROUND}}></View>
                </View>
                <View style={{ flex: 0.7 ,alignItems:'center',marginTop:20}}>

                    <FilterCard />
                </View>

            </View>
        )
    }
}

export default Filter