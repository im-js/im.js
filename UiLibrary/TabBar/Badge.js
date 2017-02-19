/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 Souche.com, all rights
 * reserved.
 *
 * 徽章计数组件
 *
 * @flow
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export default class Badge extends Component {
    // width + right = 35，保证左边起始点一致，最多支持 99+
    _computeWidthAndRight(number: number) {
        if (!number) {
            return {
                opacity: 0
            };
        }

        const anchorWidth = 35;
        let right = 0;

        if (number < 10) {
            right = 15;
        } else if (number < 100) {
            right = 8;
        } else {
            right = 0;
        }

        return {
            width: anchorWidth - right,
            right: right
        };
    }

    _renderText(number) {
        if (number > 99) {
            return '99+';
        }

        return number || null;
    }

    render() {
        let { unReadMessageCount } = this.props;
        return (
            <Text
                style={[
                    styles.badge,
                    this.props.style,
                    this._computeWidthAndRight(unReadMessageCount)
                ]}
            >
            {this._renderText(unReadMessageCount)}
            </Text>
        );
    }
}


const styles = StyleSheet.create({
    badge: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: '#FFF',
        backgroundColor: '#ff0000',
        overflow: 'hidden',
        height: 20,
        width: 35,
        right: 0,
        lineHeight: 20,
        borderRadius: 10
    }
});
