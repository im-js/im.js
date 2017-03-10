/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 分割线
 */
 import React, { PropTypes } from 'react';
 import {
     StyleSheet,
     View
 } from 'react-native';

 import Color from '../Color';

export default class Separator extends React.Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        lineHeight: PropTypes.number,
        lineColor: PropTypes.string,
        paddingLeft: PropTypes.number
    }

    static defaultProps = {
        backgroundColor: Color.White,
        lineHeight: StyleSheet.hairlineWidth,
        lineColor: Color.LightGrey,
        paddingLeft: 15
    }

    render() {
        let { backgroundColor, lineHeight, lineColor, paddingLeft } = this.props;

        return (
            <View
                style={{
                    backgroundColor: backgroundColor,
                    paddingLeft: paddingLeft
                }}
            >
                <View
                    style={{
                        borderBottomWidth: lineHeight,
                        borderBottomColor: lineColor
                    }}
                />
            </View>
        );
    }
}
