/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 首页 TabBar
 */
import React from 'react';
import {
    Text
} from 'react-native';

import {
    TabBar
} from '../../UiLibrary';

import SessionList from './SessionList.js';
import My from './My.js';

class TabBarIndex extends React.Component {
    static NavigationTitle = '首页';

    render() {
        let { navigator } = this.props;

        return (
            <TabBar
                activeIndex={1}
            >
                <TabBar.Item
                    title="首页"
                    color="#BBBAC1"
                    tintColor="#1EA114"
                    icon="http://image-2.plusman.cn/app/im-client/message.png"
                    tintIcon="http://image-2.plusman.cn/app/im-client/message-reverse.png"
                    onPress={() => {
                        this.props.navigator.setNavigationTitle('首页');
                    }}
                >
                    <SessionList
                        navigator={this.props.navigator}
                    />
                </TabBar.Item>

                <TabBar.Item
                    title="通讯录"
                    color="#BBBAC1"
                    tintColor="#1EA114"
                    icon="http://image-2.plusman.cn/app/im-client/contact.png"
                    tintIcon="http://image-2.plusman.cn/app/im-client/contact-reverse.png"
                    onPress={() => {
                        this.props.navigator.setNavigationTitle('通讯录');
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
                        this.props.navigator.setNavigationTitle('我的');
                    }}
                >
                    <My
                        navigator={navigator}
                    />
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default TabBarIndex;
