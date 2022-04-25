import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './style'
import { Color, ThemeUtils, validation } from '../../utils'
import Logo from '../../Assets/Small_icon/Logo.png'
import FloatingInputText from '../../Components/FloatingInputText'
import EmailICon from '../../Assets/icon/email_icon.png'
import Pin from '../../Assets/icon/pin.png'
import Label from '../../Components/Label';
import { APIRequest, ApiURL, API_LOGIN } from '../../api';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    login = () => {
        Keyboard.dismiss();
        let emailError, passError;
        const { email, password } = this.state
        if (email.trim() == '' || password.trim() == '') {
            alert(`wrong ${email}`)

        }
        else {
           
            this.useLogin()
        }
    }

    useLogin = () => {
        const { email, password } = this.state
        let param = {
            usernameOrEmail: email,
            password: password,
        };
        new APIRequest.Builder()
            .post()
            .setReqId(API_LOGIN)
            .reqURL(ApiURL.login)
            .jsonParams(param)
            .response(this.onResponse)
            .error(this.onError)
            .build()
            .doRequest();
    }
    onResponse = (res) => {
        console.log(res,'555');
        this.props.navigation.push("Lead")
    }
    onError = (err) => {
        console.log(err);
        alert(err.message)
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <Header title={'Dashboard'} url={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }}/> */}
                <View style={styles.logoContainer}>
                    <Image
                        resizeMode="contain"
                        style={{
                            width: ThemeUtils.relativeHeight(28),
                            height: ThemeUtils.relativeHeight(10),
                            marginTop: ThemeUtils.relativeHeight(8)
                        }}
                        source={Logo}
                    />
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.input}>
                        <FloatingInputText
                            title="User Name Or Email*"
                            value={this.state.email}

                            keyboardType="email-address"
                            onChangeText={(email) => this.setState({ email })}
                            icon={EmailICon}
                        />
                        <FloatingInputText
                            title={"Password*"}
                            value={this.state.password}
                            secureTextEntry={true}
                            keyboardType="default"
                            onChangeText={(password) => this.setState({ password })}
                            icon={Pin}
                        />
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn} onPress={() => this.login()}>
                                <Label bolder color={Color.DARK_BLACK}>Login</Label>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}  