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
    Image
} from 'react-native';

import FontSize from '../FontSize';

export default class ListItemArrow extends React.Component {
    static propTypes = {
        style: PropTypes.any
    }

    render() {
        let { style } = this.props;
        return (
            <Image
                style={[
                    styles.arrow,
                    style
                ]}
                source={{
                    uri: 'http://image-2.plusman.cn/app/im-client/arrow.png'
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    arrow: {
        marginLeft: 10,
        width: FontSize.Content,
        height: FontSize.Content
    }
});
