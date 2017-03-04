/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 按钮组件
 */

import React, { PropTypes } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';

import Color from '../Color';
import FontSize from '../FontSize';

class ButtonText extends React.Component {
    static propTypes  = {
        children: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <Text
                    style={[
                        styles.buttonText,
                        this.props.textStyle
                    ]}
                >{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

class Button {
    static Text = ButtonText;
}


const styles = StyleSheet.create({
    buttonText: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: Color.iPhoneBlue,
        fontSize: FontSize.Annotation,
    }
});

export default Button;
