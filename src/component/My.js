/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 我的页面
 */

import {observer} from 'mobx-react/native';
import React, { Component } from 'react';
import {
    TouchableHighlight,
    ScrollView,
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

import {
    Color,
    FontSize,
    ListItem
} from '../../UiLibrary';

import {
    profileStore
} from '../storeSingleton.js';

import Profile from './Profile.js';

@observer
class Setting extends Component {
    constructor(props: Object) {
        super(props);
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigator.push(Profile);
                    }}
                >
                    <View
                        style={[styles.cell]}
                    >
                        <View
                            style={styles.leftBox}
                        >
                            <Image
                                source={{
                                    uri: profileStore.userInfo.avatar
                                }}
                                style={styles.avatar}
                            />

                            <View
                                style={styles.userInfo}
                            >
                                <Text
                                    style={styles.name}
                                >
                                    {profileStore.userInfo.name}
                                </Text>

                                <Text
                                    style={styles.info}
                                >
                                    手机号: {profileStore.userInfo.phone}
                                </Text>
                            </View>
                        </View>

                        <ListItem.Arrow/>
                    </View>
                </TouchableHighlight>
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
    cell: {
        backgroundColor: Color.White,
        borderWidth: 1,
        borderColor: Color.LittleGrey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    avatar: {
        borderWidth: 1,
        borderColor: Color.LightGrey,
        borderRadius: 6,
        marginRight: 15,
        height: 60,
        width: 60
    },
    leftBox: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    userInfo: {
        justifyContent: 'space-between',
        marginVertical: 3
    },
    name: {
        fontSize: FontSize.Content,
        fontWeight: '500'
    },
    info: {
        fontSize: FontSize.Annotation
    }
});

export default Setting;
