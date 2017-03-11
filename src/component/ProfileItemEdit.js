/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 单条目编辑页
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View
} from 'react-native';

import {
    Color,
    FontSize,
    Button,
    TextInput
} from '../../UiLibrary';

import { profileStore } from '../storeSingleton.js';

// 为了动态改变 SAVE 按钮的可点击状态
class LeftComponent extends React.Component {
    state: Object;

    constructor(props) {
        super(props);

        this.state = {
            isSaveDisabled: props.isSaveDisabled
        };
    }

    render() {
        return (
            <View
                style={styles.leftComponent}
            >
                <Button
                    isWithOutLine={false}
                    onPress={this.props.handleSave}
                    disabled={this.state.isSaveDisabled}
                    textStyle={styles.saveButton}
                >
                    保存
                </Button>
            </View>
        );
    }
}

export default class ProfileItemEdit extends Component {
    state: Object;
    _leftComponent: Object;

    constructor() {
        super();

        this.state = {
            value: profileStore.userInfo.name
        };
    }

    componentWillMount () {
        this.props.navigator.setRenderRightCompoent((sceneProps) => {
            return (
                <LeftComponent
                    ref={(ref) => {
                        this._leftComponent = ref;
                    }}
                    handleSave={this._handleSave}
                    isSaveDisabled={!this.state.value}
                />
            );
        });
    }

    _handleSave = async () => {
        let result = await profileStore.modifyUserInfo('name', this.state.value);
        if (result.success) {
            this.props.navigator.pop();
        }
    }

    _onChangeText = (text) => {
        this.setState({
            value: text
        });

        if (!this._leftComponent) {
            return;
        }

        if (text) {
            this._leftComponent.setState({
                isSaveDisabled: false
            });
        } else {
            this._leftComponent.setState({
                isSaveDisabled: true
            });
        }
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <TextInput.Line
                    value={this.state.value}
                    onChangeText={this._onChangeText}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    leftComponent: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: Color.BackgroundGrey,
        paddingTop: 20
    },
    saveButton: {
        fontSize: FontSize.Content,
        color: Color.WechatGreen
    }
});
