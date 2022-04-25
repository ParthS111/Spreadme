import React from 'react';
import {
    TouchableHighlight,
    Text,
    TouchableOpacity,
    Touchable,
   
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Color } from "../../../utils/Color";
import PropTypes from 'prop-types';

class RoundButton extends React.Component {

    onClick = () => {
        if (this.props.click)
            this.props.click();
    };

    render() {
        let btnContainerStylesArray = [];
        let btnTextStylesArray = [];
        if (this.props.btn_xs) {
            btnContainerStylesArray.push({ paddingHorizontal: 20, paddingVertical: 8 });
            btnTextStylesArray.push({ fontSize:  hp(1) });
        } else if (this.props.btn_sm) {
            btnContainerStylesArray.push({ paddingHorizontal: 20, paddingVertical: 10 });
            btnTextStylesArray.push({ fontSize:  hp(2.2) });
        } else if (this.props.btn_lg) {
            btnContainerStylesArray.push({ paddingHorizontal: 20, paddingVertical: 12 });
            btnTextStylesArray.push({ fontSize: hp(2.6) });
        } else if (this.props.btn_xl) {
            btnContainerStylesArray.push({ paddingHorizontal: 20, paddingVertical: 13 });
            btnTextStylesArray.push({ fontSize:  hp(3) });
        } else {
            btnContainerStylesArray.push({ paddingHorizontal: 20, paddingVertical: 12 });
            btnTextStylesArray.push({ fontSize:  hp(2.2), fontWeight: "700" });
        }
        let btnWholeStyles = [];
        btnWholeStyles.push({
            marginTop: this.props.mt,
            marginBottom: this.props.mb,
            marginStart: this.props.ms,
            marginEnd: this.props.me,
        });
        if (this.props.btn_block) {
            btnWholeStyles.push({
                alignSelf: 'stretch'
            });
        }

        let borderColor = this.props.borderColor ? this.props.borderColor : this.props.backgroundColor;
        btnContainerStylesArray.push({
            backgroundColor: this.props.backgroundColor,
            borderColor: borderColor,
            alignItems: 'center',
            borderRadius: this.props.border_radius,
            borderWidth: 0,
            borderBottomWidth: 0,
            elevation: 5
        });
        btnTextStylesArray.push({ color: this.props.textColor, fontFamily: "Poppins-SemiBold" });
        return (
            
            <TouchableHighlight activeOpacity={0.2} underlayColor="#ffffff00"  onPress={this.onClick} style={btnWholeStyles}>
               
                    <Text allowFontScaling={false}  style={btnTextStylesArray}>
                        {this.props.text}
                    </Text>

            </TouchableHighlight>
            
        );
    }
}


RoundButton.defaultProps = {
    ...TouchableHighlight.defaultProps,
    textColor: Color.WHITE,
    backgroundColor: Color.LIGHT_BLUE,
    btn_xs: false,
    btn_sm: false,
    btn_lg: false,
    btn_xl: false,
    btn_block: false,
    border_radius: 5,
    mt: 0,
    mb: 0,
    ms: 0,
    me: 0,
};
RoundButton.propTypes = {
    ...TouchableHighlight.propTypes,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    btn_xs: PropTypes.bool,
    btn_sm: PropTypes.bool,
    btn_lg: PropTypes.bool,
    btn_xl: PropTypes.bool,
    btn_block: PropTypes.bool,
    border_radius: PropTypes.number,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ms: PropTypes.number,
    me: PropTypes.number,
};
export default RoundButton;