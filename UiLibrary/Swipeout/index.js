/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 参考
 * http://facebook.github.io/react-native/docs/panresponder.html
 * http://facebook.github.io/react-native/docs/gesture-responder-system.html
 * https://github.com/silentcloud/react-native-swipeout/blob/master/index.js
 *
 * 文本居中？lineHeight 如何定义
 */
import React, { PropTypes } from 'react';
import {
    PanResponder,
    StyleSheet,
    View,
    Text,
    Animated,
    Easing,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import Color from '../Color';
import FontSize from '../FontSize';

const DEFAULT_OPTION_PADDING = 15;
const DEFAULT_CHARACTER_WIDTH = 15;
const MOVE_SENSITIVITY = 5;

export default class Swipeout extends React.Component {
    static propTypes = {
        rightButtons: PropTypes.array.isRequired
    };

    state: Object;
    _panResponder: Object;

    // 记录偏移量
    _panValue: number = 0;
    _panAnim: Object =  new Animated.Value(0);

    // 记录按钮组宽度
    _buttonsInner: Array<Object> = [];
    _buttonsWidth: number = 0;

    constructor(props: Object) {
        super(props);

        this.state = {};

        this._buttonsWidth =  this.props.rightButtons.reduce((acc, val, index) => {
            let width = val.title.length * DEFAULT_CHARACTER_WIDTH + 2 * DEFAULT_OPTION_PADDING;
            this._buttonsInner[index] = {
                width: width
            };
            return acc + width;
        }, 0);
    }

    componentWillMount() {
        let panResponderDef = {
            // Ask to be the responder:
            // 其余操作，把事件传递给底层元素
            onStartShouldSetPanResponder: (evt, gestureState) => {
                // 暂未捕获到此事件的触发时机
                return true;
            },
            // 发生拖动时，事件给 PanResponder
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // 只有在 onStartShouldSetPanResponderCapture return false 的时候才会触发此方法
                return true;
            },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                return true;
            },
            onPanResponderGrant: (evt, gestureState) => {
                // The guesture has started. Show visual feedback so the user knows
                // what is happening!
                // gestureState.d{x,y} will be set to zero now
            },
            onPanResponderMove: (evt, gestureState) => {
                // The most recent move distance is gestureState.move{X,Y}

                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
                this._panAnim.setValue(this._panValue + gestureState.dx);
            },
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderRelease: this._handlePanRelease,
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        };

        // 主内容在划出状态下，点击收回抽屉
        this._panResponder = PanResponder.create(Object.assign({
            onStartShouldSetPanResponderCapture: this._handlePanStart
        }, panResponderDef));

        // Options 在任何状态下可以点击
        this._panResponderOptions = PanResponder.create(Object.assign({
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {
                return false;
            }
        }, panResponderDef));
    }


    _handlePanStart = (evt, gestureState) => {
        if (this._panValue !== 0) {
            return true;
        } else {
            return false;
        }
    }

    _handlePanRelease = (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        if (-gestureState.dx > (this._buttonsWidth / 2)){
            this._panValue = -this._buttonsWidth;
        } else if (gestureState.dx > (this._buttonsWidth / 2)) {
            this._panValue = 0;
        } else if (this._panValue !== 0 && Math.abs(gestureState.dx) < MOVE_SENSITIVITY) {
            this._panValue = 0;
        }

        Animated.timing(
            this._panAnim,
            {
                toValue: this._panValue,
                duration: 500,
                easing: Easing.out(Easing.cubic)
            }
        ).start();
    }

    _renderRightOptions = (buttons) => {
        return (
            <Animated.View
                {...this._panResponderOptions.panHandlers}
                style={[
                    styles.buttonWrap,
                    {
                        right: -this._buttonsWidth,
                        transform: [{
                            translateX: this._panAnim.interpolate({
                                inputRange:[-this._buttonsWidth, 0],
                                outputRange: [-this._buttonsWidth, 0],
                                extrapolate: 'clamp'
                            })
                        }]
                    }
                ]}
            >
                {buttons.map(this._renderOptions)}
            </Animated.View>

        );
    }

    _renderOptions = (buttonDesc, index) => {
        return (
            <TouchableOpacity
                key={`Options-${index}`}
                onPress={buttonDesc.onPress}
                activeOpacity={1}
            >
                <View
                    style={[
                        {
                            width: this._buttonsInner[index].width
                        },
                        styles.buttonView,
                        styles[`type${buttonDesc.type}`] || null
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            styles[`type${buttonDesc.type}`] || null
                        ]}
                    >{buttonDesc.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        let { children, rightButtons } = this.props;
        let { width } = Dimensions.get('window');
        return (
            <View
                style={styles.container}
            >
                <Animated.View
                    {...this._panResponder.panHandlers}
                    style={[
                        styles.content,
                        {
                            transform: [{
                                translateX: this._panAnim.interpolate({
                                    inputRange:[-width, -this._buttonsWidth, 0],
                                    outputRange: [-this._buttonsWidth - 100, -this._buttonsWidth, 0],
                                    extrapolateRight: 'clamp'
                                })
                            }]
                        }
                    ]}
                >
                    { children }
                </Animated.View>
                {this._renderRightOptions(rightButtons)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Color.White
    },
    content: {
        backgroundColor: Color.Grey,
        flex: 1
    },
    buttonWrap: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: Color.White,
        fontSize: FontSize.Content,
    },
    typeDelete: {
        backgroundColor: 'red'
    },
    typeCancel: {
        backgroundColor: Color.Grey
    }
});
