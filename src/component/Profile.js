/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 个人资料页
 */

import { observer } from 'mobx-react/native';
import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text
} from 'react-native';

import {
    profileStore
} from '../storeSingleton.js';

import ProfileItemEdit from './ProfileItemEdit.js';

@observer
class Profile extends Component {
    static NavigationTitle = '个人信息';

    _logout = async () => {
        let result = await profileStore.logout(profileStore.userInfo.userId);

        if (result.success) {
            this.props.navigate({
                type: 'clear'
            });
        }
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <View style={styles.space20} />

                <View
                    style={styles.block}
                >
                    <EditCell
                        {...this.props}
                        title="头像"
                        type="Image"
                    />
                    <View style={styles.blockLineBottom} />

                    <EditCell
                        {...this.props}
                        onPress={() => {
                            this.props.navigator.push(ProfileItemEdit, '昵称');
                        }}
                        title="昵称"
                        value={'plusman'}
                    />
                    <View style={styles.blockLineBottom} />

                    <EditCell
                        {...this.props}
                        title="手机号"
                        value={'18667903755'}
                    />
                    <View style={styles.blockLineBottom} />

                    <EditCell
                        {...this.props}
                        title="socketId"
                        value={'28399273'}
                    />
                    <View style={styles.blockLineBottom} />

                    <EditCell
                        {...this.props}
                        title="用户ID"
                        value={'288'}
                    />
                </View>

                <View style={styles.space20} />

                <TouchableHighlight
                    onPress={this._logout}
                >
                    <View style={styles.block}>
                    <Text
                        style={[styles.leftTitleText, styles.logout]}
                    >退出登录</Text>
                    </View>
                </TouchableHighlight>

            </ScrollView>
        );
    }
}

class EditCell extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
            >
                <View
                    style={styles.blockLine}
                >
                    <View
                        style={styles.leftTitle}
                    >
                        <Text
                            style={styles.leftTitleText}
                        >
                            {this.props.title}
                        </Text>
                    </View>
                    <View
                        style={styles.rightPart}
                    >
                        {this.props.type === 'Image' ? (
                            <Image
                                source={{
                                    uri: 'http://image-2.plusman.cn/app/im-client/avatar/tuzki_08.png'
                                }}
                                style={styles.avatar}
                            />
                        ) : (
                            <Text
                                style={styles.textValue}
                            >
                                {this.props.value}
                            </Text>
                        )}

                        { this.props.onPress ? (
                            <Image
                                style={styles.arrow}
                                source={{
                                    uri: 'http://image-2.plusman.cn/app/im-client/arrow.png'
                                }}
                            />
                        ) : (null)
                        }
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6'
    },
    space20: {
        height: 20
    },
    block: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDDDE1'
    },
    blockLine: {
        paddingLeft: 10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    blockLineBottom: {
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: '#DDDDE1',
    },
    leftTitle: {
        justifyContent: 'center'
    },
    leftTitleText: {
        fontSize: 16,
        fontWeight: '400',
    },
    rightPart: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        borderWidth: 1,
        borderColor: '#A6A6A6',
        borderRadius: 6,
        margin: 10,
        height: 60,
        width: 60
    },
    arrow: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    textValue: {
        color: '#828282',
        marginRight: 10,
        marginVertical: 15
    },
    logout: {
        textAlign: 'center',
        marginVertical: 10
    }
});

export default Profile;
