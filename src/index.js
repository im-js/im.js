/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * App 入口文件
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { TabBar } from '../UiLibrary';

class ImClient extends Component {
    render() {
        return (
            <TabBar
                // 指定序号来选定首页渲染视图，默认为 0
                // activeIndex={2}
            >
                <TabBar.Item
                    title="首页"
                    color="#BBBAC1"
                    tintColor="#1EA114"
                    icon="http://image-2.plusman.cn/app/im-client/message.png"
                    tintIcon="http://image-2.plusman.cn/app/im-client/message-reverse.png"
                    onPress={() => {
                    }}
                >
                    <Text>A</Text>
                </TabBar.Item>

                <TabBar.Item
                    title="通讯录"
                    color="#BBBAC1"
                    tintColor="#1EA114"
                    icon="http://image-2.plusman.cn/app/im-client/contact.png"
                    tintIcon="http://image-2.plusman.cn/app/im-client/contact-reverse.png"
                    onPress={() => {
                    }}
                >
                    <Text>B</Text>
                </TabBar.Item>

                <TabBar.Item
                    title="我的"
                    color="#BBBAC1"
                    tintColor="#1EA114"
                    icon="http://image-2.plusman.cn/app/im-client/setting.png"
                    tintIcon="http://image-2.plusman.cn/app/im-client/setting-reverse.png"
                    onPress={() => {
                    }}
                >
                    <Text>C</Text>
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default ImClient;
