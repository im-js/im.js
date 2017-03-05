/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 按钮组示例
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import {
    Color,
    Button
} from '../../index.js';

class ButtonDemo extends React.Component{
    static NavigationTitle = '按钮';

    render() {
        return  (
            <View
                style={styles.container}
            >
                <View
                    style={styles.buttonItem}
                >
                    <Button
                        isWithOutLine={false}
                    >
                        不带边框
                    </Button>
                </View>

                <View
                    style={styles.buttonItem}
                >
                    <Button
                    >
                        带边框
                    </Button>
                </View>

                <View
                    style={styles.buttonItem}
                >
                    <Button
                        disabled={true}
                    >
                        按钮禁用
                    </Button>
                </View>

                <View
                    style={styles.buttonItem}
                >
                    <Button
                    >
                        <View
                            style={{
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: Color.iPhoneBlue
                                }}
                            >自定义组件</Text>

                            <Image
                                source={{
                                    url: 'http://image-2.plusman.cn/app/im-client/message-blue.png'
                                }}
                                style={{
                                    marginLeft: 10,
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonItem: {
        marginVertical: 10
    }
});

export default ButtonDemo;
