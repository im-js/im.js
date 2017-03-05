/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 导航栈测试
 */

import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import {
    Button
} from '../../index.js';

class NavigatorDemo extends React.Component {
    static NavigationTitle = '导航条';

    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.demoItem}
                >
                    <Button
                    >
                        点击隐藏导航条
                    </Button>
                </View>

                <View
                    style={styles.demoItem}
                >
                    <Button
                    >
                        点击显示导航条
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
    demoItem: {
        marginTop: 10
    }
});

export default NavigatorDemo;
