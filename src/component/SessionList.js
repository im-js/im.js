/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 聊天会话窗口
 */

import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Image,
    ListView,
    Text,
    View
} from 'react-native';

import ChatRoom from './ChatRoom.js';

class SessionList extends Component {
    ds: Object;
    state: Object;

    constructor () {
        super();

        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return r1.userId !== r2.userId;
            }
        });

        let rows = [
            {
                avatar: 'http://image-2.plusman.cn/app/im-client/avatar/tuzki_01.jpg',
                userId: 'webTuzki',
                latestTime: '下午3:00',
                latestMessage: '让我们一起写RN'
            },
            {
                avatar: 'http://image-2.plusman.cn/app/im-client/avatar/tuzki_02.png',
                userId: 'rnTuzki',
                latestTime: '2017/12/11',
                latestMessage: '我是来自未来的 Tuzki'
            }
        ];

        this.state = {
            dataSource: this.ds.cloneWithRows(rows)
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={ (rowData) =>
                        <ConversationCell
                            avatar={rowData.avatar}
                            userId={rowData.userId}
                            latestTime={rowData.latestTime}
                            latestMessage={rowData.latestMessage}
                            onPress={() => {
                                this.props.navigator.push(
                                    ChatRoom,
                                    '聊天室'
                                );
                            }}
                        />
                    }
                />
            </View>
        );
    }
}

class ConversationCell extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
            >
                <View
                    style={styles.ConversationCell}
                >
                    <Image
                        source={{
                            uri: this.props.avatar
                        }}
                        style={styles.avatar}
                    />
                    <View
                        style={styles.boxRight}
                    >
                        <View
                            style={styles.boxCeil}
                        >
                            <Text>{this.props.userId}</Text>
                            <Text
                                style={styles.latestTime}
                            >{this.props.latestTime}</Text>
                        </View>
                        <Text
                            style={styles.boxFloor}
                        >{this.props.latestMessage}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#E6E6E6'
    },
    ConversationCell: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    boxRight: {
        flex: 1,
        padding: 6
    },
    boxCeil: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxFloor: {
        fontSize: 14,
        color: '#9A9A9A'
    },
    latestTime: {
        fontSize: 12,
        color: '#B3B3B3'
    },
    avatar: {
        borderRadius: 4,
        margin: 5,
        width: 40,
        height: 40
    },
});

export default SessionList;
