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
    View,
    Text
} from 'react-native';

import {
    TextInput,
    Color,
    FontSize
} from '../../index.js';

export default class TextInputDemo extends React.Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.demoItem}
                >
                    <Text
                        style={styles.tip}
                    >带标签的输入框</Text>
                    <TextInput.Label
                        placeholder="点击此处输入"
                        labelText="用户名"
                    />
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
        marginVertical: 20
    },
    tip: {
        marginVertical: 10,
        textAlign: 'center',
        color: Color.LightBlack,
        fontSize: FontSize.Annotation
    }
});
