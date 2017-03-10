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
    StyleSheet,
    ScrollView,
    Image,
    View
} from 'react-native';

import {
    ListItem,
    Button,
    Color,
    FontSize
} from '../../UiLibrary';

import {
    profileStore
} from '../storeSingleton.js';

import ProfileItemEdit from './ProfileItemEdit.js';

@observer
class Profile extends Component {
    static NavigationTitle = '个人信息';

    _logout = async () => {
        await profileStore.logout(profileStore.userInfo.userId);
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <View
                    style={styles.block}
                >
                    <ListItem.Label
                        labelText="头像"
                        rightComponent={() => {
                            return (
                                <Image
                                    style={styles.avatar}
                                    source={{
                                        uri: profileStore.userInfo.avatar
                                    }}
                                />
                            );
                        }}
                    />

                    <ListItem.Separator/>

                    <ListItem.Label
                        onPress={() => {
                            this.props.navigator.push(ProfileItemEdit, '昵称');
                        }}
                        labelText="昵称"
                        rightComponent={profileStore.userInfo.name}
                    />

                    <ListItem.Separator/>

                    <ListItem.Label
                        labelText="手机号"
                        rightComponent={profileStore.userInfo.phone}
                    />

                    <ListItem.Separator/>

                    <ListItem.Label
                        labelText="socketId"
                        rightComponent={profileStore.userInfo.socketId}
                    />

                    <ListItem.Separator/>

                    <ListItem.Label
                        labelText="用户ID"
                        rightComponent={profileStore.userInfo.userId}
                    />
                </View>

                <ListItem.Header/>

                <Button
                    onPress={this._logout}
                    isWithOutLine={false}
                    style={styles.logoutButton}
                    textStyle={styles.logoutTextStyle}
                >
                    退出登录
                </Button>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackgroundGrey,
        paddingTop: 20
    },
    avatar: {
        borderWidth: 1,
        borderColor: Color.Grey,
        borderRadius: 6,
        height: 60,
        width: 60
    },
    logoutButton: {
        borderColor: Color.LittleGrey,
        backgroundColor: Color.White,
        borderWidth: 1,
        paddingVertical: 5
    },
    logoutTextStyle: {
        color: Color.Black,
        fontSize: FontSize.Main
    }
});

export default Profile;
