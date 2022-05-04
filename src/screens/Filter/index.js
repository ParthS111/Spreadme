import { SafeAreaView, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './style'
import Header from '../../Components/Header'
import { Color, ThemeUtils } from '../../utils'
import Label from '../../Components/Label'
import FilterCard from '../../Components/FilterCard'
import Profile from '../../Assets/Images/profile.jpg'
import Routes from '../../router/routes'

export class Filter extends Component {

    goBack=()=>{
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: Routes.Authenticated }],
        });
        this.props.navigation.push("Lead")
      }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 0.1 }}>
                    <Header title={'Dashboard'} url={Profile} BackBtn={()=>this.goBack()}  />
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

            </SafeAreaView>
        )
    }
}

export default Filter