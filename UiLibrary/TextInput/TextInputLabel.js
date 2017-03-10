/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 */


import React, { PropTypes } from 'react';
import {
    StyleSheet,
    TextInput as TextInputOffical,
    Text,
    View
} from 'react-native';

import FontSize from '../FontSize';
import Color from '../Color';

export default class TextInputLabel extends React.Component {
    static propTypes = {
        style: PropTypes.any,
        labelText: PropTypes.string,
        labelStyle: PropTypes.any,
        textInputStyle: PropTypes.any
    }

    render() {
        let { style, labelStyle, labelText, textInputStyle} = this.props;

        return (
            <View
                style={[
                    styles.labelInput,
                    style
                ]}
            >
                <Text
                    style={[
                        styles.label,
                        labelStyle
                    ]}
                >
                    { labelText }
                </Text>

                <TextInputOffical
                    {...this.props}
                    style={[
                        styles.textInput,
                        textInputStyle
                    ]}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    labelInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Color.LittleGrey,
        backgroundColor: Color.White,
        height: 45
    },
    label: {
        width: 80,
        textAlign: 'right',
        fontSize: FontSize.Content,
        paddingHorizontal: 10,
        color: Color.Black
    },
    textInput: {
        flex: 1,
        fontSize: FontSize.Content
    }
});
