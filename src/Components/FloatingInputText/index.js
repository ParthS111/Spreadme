import React, { Component } from 'react';
// import TextField from '../Material-textfield/field';
import { Color } from "../../utils/Color";
import { View, Animated, Easing, TextInput, Image } from 'react-native';
import Label from "../Label";
import { ThemeUtils } from '../../utils';


export default class FloatingInputText extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props.ShakeValidation)
    }
    render() {

        return (
            <View style={{
                marginHorizontal: ThemeUtils.relativeWidth(7),
            }}>
                <View style={{
                    justifyContent: 'center',
                    marginLeft: ThemeUtils.relativeWidth(1)

                }}>
                    <Label color={Color.TEXT_PRIMARY} mt={5} mb={10}>{this.props.title}</Label>
                </View>

                <View style={{ marginBottom: ThemeUtils.relativeHeight(1), }}>
                    <TextInput
                        style={{
                            borderWidth: 2, borderRadius: 8, backgroundColor:this.props.bgColor?this.props.bgColor: Color.WHITE,
                            borderColor: Color.BORDER_COLOR,
                            height: ThemeUtils.relativeHeight(5),
                            // elevation:1

                        }}

                        onChangeText={this.props.onChangeText}
                        value={this.props.value}
                        keyboardType={this.props.keyboardType}
                        {...this.props} />
                    <View style={{
                        position: 'absolute',
                        right: 15,
                        top: 10
                    }}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: ThemeUtils.relativeHeight(2.5),
                                height: ThemeUtils.relativeHeight(3),
                            }}
                            source={this.props.icon}
                        />
                    </View>
                    {this.props.message &&
                        <Label
                            style={[this.props.style]}
                            xxsmall color={Color.PRIMARY}>{this.props.message}</Label>}
                    {this.props.errorMessage &&
                        <Label
                            style={[this.props.style]}
                            xsmall color={Color.PRIMARY}>{this.props.errorMessage}</Label>

                    }

                </View>
            </View>
        )
    }
}

                         // baseColor={this.props.baseColor ? this.props.baseColor : Color.INPUT_TEXT_PRIMARY}
                         // tintColor={this.props.tintColor ? this.props.tintColor : Color.INPUT_TEXT_PRIMARY}
                         // containerStyle={this.props.style}
                         // labelHeight={18}
                         // labelTextStyle={{ fontFamily: "Poppins-Regular",  color: Color.PRIMARY }}
                         // autoCapitalize='none'
                         // secureTextEntry={this.props.password}
                         // textColor={this.props.textColor ? this.props.textColor : Color.PRIMARY}