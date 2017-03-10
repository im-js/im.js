/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 标签样式 Item
 */
import React, { PropTypes } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

import Color from '../Color';
import FontSize from '../FontSize';
import ListItemArrow from './ListItemArrow.js';

export default class Label extends React.Component {
    static propTypes = {
        style: PropTypes.any,
        icon: PropTypes.string,
        iconStyle: PropTypes.any,
        labelText: PropTypes.string,
        labelStyle: PropTypes.any,
        rightComponent: PropTypes.any,
        // rightComponent 为文本时候生效
        textStyle: PropTypes.any,
        onPress: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    _renderIcon = () => {
        let { icon, iconStyle } = this.props;
        if (icon) {
            return (
                <Image
                    source={{
                        uri: icon
                    }}
                    style={[
                        styles.iconStyle,
                        iconStyle
                    ]}
                />
            );
        } else {
            return null;
        }
    }

    _renderRightCompoent = () => {
        let { rightComponent, textStyle } = this.props;

        if (typeof rightComponent === 'string' || typeof rightComponent === 'number') {
            return (
                <Text
                    style={[
                        styles.textStyle,
                        textStyle
                    ]}
                >{rightComponent}</Text>
            );
        } else if (typeof rightComponent === 'function') {
            return rightComponent();
        }

        return null;
    }

    _renderRightArrow() {
        let { onPress } = this.props;
        if (onPress) {
            return (
                <ListItemArrow/>
            );
        }

        return null;
    }

    render() {
        let { labelText, labelStyle, onPress, style } = this.props;

        let displayView = (
            <View
                style={[
                    styles.labelContainer,
                    style
                ]}
            >
                <View
                    style={styles.labelLeftComponent}
                >
                    {this._renderIcon()}
                    <Text
                        style={[
                            styles.labelStyle,
                            labelStyle
                        ]}
                    >
                        {labelText}
                    </Text>
                </View>

                <View
                    style={styles.labelRightComponent}
                >
                    {this._renderRightCompoent()}
                    {this._renderRightArrow()}
                </View>
            </View>
        );


        if (onPress) {
            return (
                <TouchableHighlight
                    onPress={onPress}
                >
                    {displayView}
                </TouchableHighlight>
            );
        } else {
            return displayView;
        }
    }
}


const styles = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
        backgroundColor: Color.White,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    iconStyle: {
        height: 25,
        width: 25,
        marginRight: 15
    },
    labelLeftComponent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    labelStyle : {
        fontSize: FontSize.Main,
        color: Color.Black,
    },
    labelRightComponent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        color: Color.LightBlack,
        fontSize: FontSize.Content
    }
});
