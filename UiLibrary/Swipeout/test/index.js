/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 侧滑组件-测试文件
 */

import React from 'react';
import {
    StyleSheet,
    Alert,
    View
} from 'react-native';

import {
    Swipeout,
    ListItem
} from '../../';

class SwipeoutDemo extends React.Component {
    static NavigationTitle = 'Swipeout';

    constructor(props: Object) {
        super(props);
    }

    render() {
        return (
            <View>
                <ListItem.Header
                    title="左滑多个按钮"
                />
                <Swipeout
                    rightButtons={[
                        {
                            title: '取消关注',
                            onPress: () => {
                                Alert.alert('🤗', 'Delete Click');
                            },
                            type: 'Delete'
                        },
                        {
                            title: '关闭',
                            onPress: () => {
                                Alert.alert('🤗', 'Cancel Click');
                            },
                            type: 'Cancel'
                        }
                    ]}
                >
                    <ListItem.Label
                        onPress={() => {
                            Alert.alert('🤗', 'Item Click');
                        }}
                        labelText="Item 可以点击"
                    />
                </Swipeout>


                <ListItem.Header
                    title="左滑单个按钮"
                />
                <Swipeout
                    rightButtons={[
                        {
                            title: '删除',
                            onPress: () => {
                                Alert.alert('🤗', 'Delete Click');
                            },
                            type: 'Delete'
                        }
                    ]}
                >
                    <ListItem.Label
                        labelText="点击 Item 收回抽屉"
                    />
                </Swipeout>

            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default SwipeoutDemo;
