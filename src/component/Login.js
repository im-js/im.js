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

import { observer } from 'mobx-react/native';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

import {
    FontSize,
    Button,
    Color
} from '../../UiLibrary';

@observer
class Login extends Component {
    // state: Object;

    constructor(props: Object) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            isCanLogin: false
        };
    }

    componentWillMount() {
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <LabelInput
                    label="昵称"
                    autoCapitalize="none"
                    placeholder="请填写昵称"
                    onChangeText={(name) => {
                        this.setState({name});
                    }}
                    value={this.state.name}
                    returnKeyType="done"
                />

                <LabelInput
                    label="手机号"
                    autoCapitalize="none"
                    placeholder="请填写11位手机号"
                    onChangeText={(phone) => {
                        this.setState({phone});
                    }}
                    value={this.state.phone}
                    returnKeyType="done"
                />

                <Button
                    style={styles.loginButton}
                    textStyle={styles.loginText}
                    disabled={!this.state.isCanLogin}
                    onPress={() => {}}
                >
                登录
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginButton: {
        margin: 20,
        borderColor: Color.WechatGreen,
        backgroundColor: Color.WechatGreen
    },
    loginText: {
        color: Color.White,
        fontSize: FontSize.Primary,
        paddingVertical: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 70
    }
});

export default Login;
