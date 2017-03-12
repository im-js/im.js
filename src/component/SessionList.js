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

import { observer } from 'mobx-react/native';
import React, { PropTypes} from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Image,
    ListView,
    Text,
    View
} from 'react-native';

import {
    FontSize,
    Color
} from '../../UiLibrary';

import {
    socketStore
} from '../storeSingleton.js';

import ChatRoom from './ChatRoom.js';

@observer
class SessionList extends React.Component {
    ds: Object;
    state: Object;

    constructor () {
        super();

        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return r1.userId !== r2.userId;
            }
        });
    }

    _renderRow = (row) => {
        return (
            <ConversationCell
                avatar={row.avatar}
                name={row.name}
                latestTime={row.latestTime}
                latestMessage={row.latestMessage}
                onPress={() => {
                    this.props.navigator.push(
                        ChatRoom,
                        row.name,
                        {
                            toInfo: row.toInfo
                        }
                    );
                }}
            />
        );
    }

    render() {
        if (socketStore.sessionList.length) {
            return (
                <View style={styles.container}>
                    <ListView
                        dataSource={this.ds.cloneWithRows(socketStore.sessionList)}
                        enableEmptySections={true}
                        renderRow={this._renderRow}
                    />
                </View>
            );
        } else {
            return (
                <View
                    style={styles.emptyMessage}
                >
                    <Image
                        source={{
                            uri: 'http://image-2.plusman.cn/app/im-client/empty-message.png'
                        }}
                        style={styles.emptyMessageImage}
                    />
                    <Text
                        style={styles.emptyMessageText}
                    >暂无消息</Text>
                </View>
            );
        }
    }
}


class ConversationCell extends React.Component {
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.any.isRequired,
        latestTime: PropTypes.string.isRequired,
        latestMessage: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        let { avatar, name, latestTime, latestMessage, onPress } = this.props;

        return (
            <TouchableHighlight
                onPress={onPress}
            >
                <View
                    style={styles.ConversationCell}
                >
                    <Image
                        source={{
                            uri: avatar
                        }}
                        style={styles.avatar}
                    />
                    <View
                        style={styles.boxRight}
                    >
                        <View
                            style={styles.boxCeil}
                        >
                            <Text>{name}</Text>
                            <Text
                                style={styles.latestTime}
                            >{latestTime}</Text>
                        </View>
                        <Text
                            style={styles.boxFloor}
                        >{latestMessage}</Text>
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
    emptyMessage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyMessageImage: {
        width: 90,
        height: 90,
        opacity: 0.6
    },
    emptyMessageText: {
        color: Color.LightBlack,
        fontSize: FontSize.Annotation
    }
});

export default SessionList;
