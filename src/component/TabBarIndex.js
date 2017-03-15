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

import { observer } from 'mobx-react/native';
import React from 'react';
import {
    TabBar
} from '../../UiLibrary';

import SessionList from './SessionList.js';
import FriendList from './FriendList.js';
import My from './My.js';

import {
    socketStore
} from '../storeSingleton.js';

@observer
class TabBarIndex extends React.Component {
    static NavigationTitle = '会话';

    render() {
        let { navigator } = this.props;

        return (
            <TabBar
                activeIndex={0}
            >
                <TabBar.Item
                    title="会话"
                    color="#BBBAC1"
                    tintColor="#1EA114"
                    icon="http://image-2.plusman.cn/app/im-client/message.png"
                    tintIcon="http://image-2.plusman.cn/app/im-client/message-reverse.png"
                    badge={socketStore.unReadMessageCountTotal}
                    onPress={() => {
                        this.props.navigator.setNavigationTitle('会话');
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
                    <FriendList
                        navigator={navigator}
                    />
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
