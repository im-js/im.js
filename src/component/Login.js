/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 用户登录框
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import {
    FontSize,
    Button,
    Color,
    TextInput
} from '../../UiLibrary';

import {
    profileStore
} from '../storeSingleton.js';

class Login extends Component {
    state: Object;

    constructor(props: Object) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            isCanLogin: false
        };
    }

    _login = async () => {
        try {
            await profileStore.login(
                this.state.name,
                this.state.phone
            );
            // toast
        } catch (e) {
            // toast
        }
    }

    _onChangeText = () => {
        this.setState({
            isCanLogin: (this.state.name && this.state.phone)
        });
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <TextInput.Label
                    labelText="昵称"
                    labelStyle={styles.labelStyle}
                    autoCapitalize="none"
                    placeholder="请填写昵称"
                    onChangeText={(name) => {
                        this.setState({name}, () => {
                            this._onChangeText();
                        });
                    }}
                    value={this.state.name}
                    returnKeyType="done"
                />

                <TextInput.Label
                    labelText="手机号"
                    labelStyle={styles.labelStyle}
                    autoCapitalize="none"
                    placeholder="请填写11位手机号"
                    onChangeText={(phone) => {
                        this.setState({phone}, () => {
                            this._onChangeText();
                        });
                    }}
                    value={this.state.phone}
                    returnKeyType="done"
                />

                <Button
                    style={styles.loginButton}
                    textStyle={styles.loginText}
                    disabled={!this.state.isCanLogin}
                    onPress={this._login}
                >
                登录
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 70,
        paddingHorizontal: 20
    },
    loginButton: {
        marginVertical: 20,
        borderColor: Color.WechatGreen,
        backgroundColor: Color.WechatGreen
    },
    loginText: {
        color: Color.White,
        fontSize: FontSize.Primary,
        paddingVertical: 10
    },
    labelStyle: {
        textAlign: 'left',
        paddingHorizontal: 0
    }
});

export default Login;
