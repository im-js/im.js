/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 输入框组
 */

import React from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

import {
    TextInput,
    ListItem
} from '../../index.js';

export default class TextInputDemo extends React.Component {
    static NavigationTitle = '输入框组';

    render() {
        return (
            <View
                style={styles.container}
            >
                <ListItem.Header
                    title="带标签的输入框"
                />
                <TextInput.Label
                    placeholder="点击此处输入"
                    labelText="用户名"
                />

                <ListItem.Header
                    title="条状输入框"
                />

                <TextInput.Line
                    placeholder="点击此处输入"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
