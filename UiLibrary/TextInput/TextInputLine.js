/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 条形输入框
 */


import React, { PropTypes } from 'react';
import {
    StyleSheet,
    TextInput as TextInputOffical
} from 'react-native';

import FontSize from '../FontSize';
import Color from '../Color';

export default class TextInputLine extends React.Component {
    static propTypes = {
        style: PropTypes.any
    }

    render() {
        let { style } = this.props;
        return (
            <TextInputOffical
                {...this.props}
                style={[
                    styles.line,
                    style
                ]}
                underlineColorAndroid="transparent"
            />
        );
    }
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: Color.White,
        fontSize: FontSize.Content,
        height: 45,
        paddingHorizontal: 15,
        borderColor: Color.LittleGrey,
        borderWidth: StyleSheet.hairlineWidth
    }
});
