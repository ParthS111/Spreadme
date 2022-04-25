import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import Card from '../Card'
import { Color, ThemeUtils } from '../../utils'
import Label from '../Label'
import Cal from '../../Assets/icon/cal.png'
import data from '../../Assets/icon/15.png'
import Rocket from '../../Assets/icon/16.png'
import Phone from '../../Assets/icon/14.png'
import Eye from '../../Assets/icon/17.png'
import InformationLabel from '../ImformationLabel'


export default class LeadCard extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: ThemeUtils.relativeWidth(90) }}>
                <Card>
                    <View style={{ flexDirection: 'row', height: 50, backgroundColor: Color.BLACK, borderTopEndRadius: 10, borderTopLeftRadius: 10 }}>
                        <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
                            <Label bolder color={Color.WHITE}>SMP Treaments</Label>
                        </View>
                        <View style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                resizeMode="contain"
                                style={{
                                    width: ThemeUtils.relativeHeight(2.5),
                                    height: ThemeUtils.relativeHeight(3),
                                    marginRight: ThemeUtils.relativeWidth(1.5)
                                }}
                                source={Cal}
                            />
                            <Label small color={Color.WHITE}>Apr 18,2022</Label>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
                            <InformationLabel image={data} label="Francesco Concetta" />
                            <InformationLabel image={Rocket} label="parth@yahoo.com" />
                        </View>
                        <View style={{ flex: 0.4, }}>
                            <InformationLabel image={Phone} label="+9185245125" />
                            <Image
                                resizeMode="contain"
                                style={{
                                    width: ThemeUtils.relativeHeight(3),
                                    height: ThemeUtils.relativeHeight(3),
                                    alignSelf: 'flex-end',
                                    marginRight:ThemeUtils.relativeWidth(5)
                                }}
                                source={Eye}
                            />
                        </View>
                    </View>
                </Card>
            </View>
        )
    }
}

