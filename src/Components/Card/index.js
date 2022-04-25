import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { ThemeUtils } from '../../utils'

export default class Card extends Component {
    render() {
        return (
            <View style={[styles.card,this.props.style]} onPress={() => console.log("heheh")}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        // height: ThemeUtils.relativeHeight(14),
        // width: ThemeUtils.relativeWidth(80),
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: '#000',
        // alignItems: 'center',
        justifyContent: "center",
    }
})