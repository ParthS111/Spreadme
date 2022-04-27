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
import Routes from '../../router/routes'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getToken } from '../../redux/action';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    componentDidMount(){
        // this.props.navigation.reset({
        //     index: 0,
        //     routes: [{ name: Routes.Authenticated }],
        // });
        // this.props.navigation.push("Lead")
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
        console.log(res.data.accessToken,'555');
        this.props.getToken(res.data.accessToken)
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: Routes.Authenticated }],
        });
        this.props.navigation.push("Lead")
    }
    onError = (err) => {
        console.log(err);
        alert(err.message)
    }
    render() {
        return (
            <View style={styles.container}>
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


const mapDispatchToProps = dispatch => ({
    getToken:(token)=> dispatch(getToken(token)),
  });


  export default connect(null,mapDispatchToProps)(Login)