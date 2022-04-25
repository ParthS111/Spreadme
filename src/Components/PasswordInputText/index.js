import {styles} from './styles';
import Label from '../Label/index';
import React, {Component} from 'react';
import TextField from '../../ui/Material-textfield/field';
import {Color} from '../../../utils/Color';
import {View, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Eye from 'react-native-vector-icons/Ionicons';
import Theme from '../../../utils/ThemeUtils';
import {TouchableOpacity} from 'react-native';
import DeviceInfo from 'react-native-device-info';
export default class PasswordInputText extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
    this.state = {
      icEye: 'visibility-off',
      password: true,
      visiblity: 'eye',
    };
  }

  changePwdType = () => {
    if (this.state.password) {
      this.setState({
        visiblity: 'eye-off',
        password: false,
      });
    } else {
      this.setState({
        visiblity: 'eye',
        password: true,
      });
    }
  };

  startShake = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animation, {
          toValue: 2,
          duration: 0.5,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.animation, {
          toValue: 2,
          duration: 0.5,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.animation, {
          toValue: 0,
          duration: 0.5,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 8,
      },
    ).start();
    setTimeout(
      () =>
        this.animation.stopAnimation(({value}) =>
          console.log('Final Value: ' + value),
        ),
      5000,
    );
  };
  render() {
    const isTablet = DeviceInfo.isTablet();
    const interpolateed = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <View
            style={{
              marginRight: this.props.iconName ? 16 : 35,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 26,
              marginLeft: 3,
              bottom:isTablet?10 : 5,
            }}>
            <Icon
              name={this.props.iconName}
              size={
                this.props.iconSize
                  ? this.props.iconSize
                  : Theme.relativeHeight(3)
              }
              color={Color.PRIMARY}
            />
          </View>
          <Animated.View
            style={{
              flexDirection: 'column',
              flex: 1,
              transform: [{translateX: interpolateed}],
            }}>
            <TextField
              {...this.props}
              baseColor={Color.PRIMARY}
              tintColor={Color.PRIMARY}
              autoCapitalize="none"
              labelTextStyle={{
                fontFamily: 'Poppins-Regular',
               
                color: Color.PRIMARY,
              }}
              keyboardType={this.props.keyboardType}
              containerStyle={[this.props.style, {}]}
              secureTextEntry={this.state.password}
              errorColor={Color.PRIMARY}
              textColor={Color.PRIMARY}
              labelHeight={15}
              maxLength={4}></TextField>
            <TouchableOpacity onPress={this.changePwdType} style={styles.icon}>
              <Eye
                name={this.state.visiblity}
                size={Theme.relativeHeight(3)}
                color={Color.PRIMARY}
              />
            </TouchableOpacity>
            {this.props.ShakeValidation ==true ?
              this.props.errorLabel ?
              (
              this.startShake() ||
             (
                <Label xsmall color={Color.PRIMARY}>
                  {this.props.errorLabel}
                </Label>
              )
            ) : (
              <Label xsmall color={Color.PRIMARY}>
                {this.props.errorLabel}
              </Label>
            )
          : <Label xsmall color={Color.PRIMARY}>
          {this.props.errorLabel}
        </Label>}
          </Animated.View>
        </View>
      </View>
    );
  }
}
