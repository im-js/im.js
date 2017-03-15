/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 */
import React, { PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Color from '../Color';
import FontSize from '../FontSize';

export default class List extends React.Component {
    static propTypes = {
        title: PropTypes.string
    };

    let

    render() {
        let { title } = this.props;

        return (
            <View
                style={[
                    styles.container,
                    title ? null : styles.height20
                ]}
            >
                <Text
                    style={styles.textStyle}
                >
                    {title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: Color.BackgroundGrey
    },
    textStyle: {
        color: Color.LightBlack,
        fontSize: FontSize.Annotation
    },
    height20: {
        height: 20
    }
});
