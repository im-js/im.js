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
    View,
    Text
} from 'react-native';

import Color from '../Color';
import FontSize from '../FontSize';

class Button extends React.Component {
    static propTypes  = {
        children: PropTypes.node.isRequired,
        onPress: PropTypes.func,
        // 是否带外框
        isWithOutLine: PropTypes.bool,
        // 边框样式，可以覆盖 isWithOutLine 的设置
        style: PropTypes.any,
        // children 为文字时的文本样式
        textStyle: PropTypes.any,
        // 禁用状态
        disabled: PropTypes.bool
    }

    static defaultProps = {
        isWithOutLine: true,
        disabled: false
    }

    constructor(props: Object) {
        super(props);
    }

    _renderChildren() {
        let { children } = this.props;
        if (typeof children === 'string') {
            return (
                <Text
                    style={[
                        styles.buttonText,
                        this.props.textStyle
                    ]}
                >{children}</Text>
            );
        } else {
            return children;
        }
    }

    render() {
        let { isWithOutLine, style, disabled} = this.props;
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                disabled={disabled}
            >
                <View
                    style={[
                        isWithOutLine ? styles.buttonBoxBorder : {},
                        disabled ? styles.disabledStyle : {},
                        style
                    ]}
                >
                    {this._renderChildren()}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        textAlign: 'center',
        color: Color.iPhoneBlue,
        fontSize: FontSize.Annotation
    },
    buttonBoxBorder: {
        overflow: 'hidden',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.iPhoneBlue
    },
    disabledStyle: {
        opacity: 0.4
    }
});

export default Button;
