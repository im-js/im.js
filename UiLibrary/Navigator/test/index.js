/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 导航栈测试
 */

import React from 'react';
import {
    StyleSheet,
    TextInput,
    Alert,
    Text,
    View,
} from 'react-native';

import {
    Button,
    FontSize,
    Color
} from '../../index.js';

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
                >
                    保存
                </Button>
            </View>
        );
    }
}

class NavigatorDemo extends React.Component {
    static NavigationTitle = '导航条';

    state: Object;
    _leftComponent: Object;

    constructor(props: Object) {
        super(props);

        this.state = {
            navigatorStatus: 1,
            textInputValue: '',
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
                    isSaveDisabled={!this.state.textInputValue}
                />
            );
        });
    }

    _switchRightCompoent = () => {
        this.props.navigator.setRenderRightCompoent((sceneProps) => {
            return (
                <View
                    style={styles.leftComponent}
                >
                    <Button
                        isWithOutLine={false}
                        onPress={() => {
                            Alert.alert('新按钮被点击');
                        }}
                    >
                        新按钮
                    </Button>
                </View>
            );
        });
    }

    _handleSave = () => {
        Alert.alert('组件通讯', `输入框的值为：${this.state.textInputValue}`);
    }

    _handleTextChange = (text) => {
        this.setState({
            textInputValue: text
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

    _toogleNavigatorStatus = () => {
        this.setState({
            navigatorStatus: 1 - this.state.navigatorStatus
        });

        this.props.navigator.toogleNavigationHeader();
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.demoItem}
                >
                    <Button
                        onPress={this._toogleNavigatorStatus}
                    >
                        {this.state.navigatorStatus ? '点击隐藏导航条' : '点击显示导航条'}
                    </Button>
                </View>

                <View
                    style={styles.demoItem}
                >
                    <Button
                        onPress={()=>{ this.props.navigator.pop(); }}
                    >
                        弹出当前视图
                    </Button>
                </View>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="输入框和保存按钮之间的交互"
                        underlineColorAndroid="transparent"
                        value={this.state.textInputValue}
                        onChangeText={this._handleTextChange}
                    />
                    <Text
                        style={styles.tips}
                    >
                        只有在输入框有值的情况下，保存按钮为可用状态。
                    </Text>
                </View>

                <View
                    style={styles.demoItem}
                >
                    <Button
                        onPress={this._switchRightCompoent}
                    >
                        切换 RightComponent
                    </Button>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    demoItem: {
        marginTop: 24,
        alignItems: 'center'
    },
    leftComponent: {
        flex: 1,
        justifyContent: 'center'
    },
    textInput: {
        marginTop: 30,
        fontSize: 16,
        height: 40,
        padding: 5,
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        marginBottom: 20,
    },
    tips: {
        textAlign: 'center',
        fontSize: FontSize.Annotation,
        color: Color.LightBlack
    }
});

export default NavigatorDemo;
