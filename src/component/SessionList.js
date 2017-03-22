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
    Swipeout,
    Color,
    Badge,
    ListItem
} from '../../UiLibrary';

import {
    socketStore,
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
                return r1.key !== r2.key;
            }
        });
    }

    _renderRow = (row) => {
        return (
            <Swipeout
                key={row.key}
                rightButtons={[{
                    title: '删除',
                    type: 'Delete',
                    onPress: () => {
                        socketStore.deleteSession(row.key);
                    }
                }]}
            >
                <ConversationCell
                    avatar={row.avatar}
                    unReadMessageCount={row.unReadMessageCount}
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
            </Swipeout>
        );
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <ListItem.Separator
                paddingLeft={10}
                key={`${sectionID}-${rowID}`}
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
                        renderSeparator={this._renderSeparator}
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
        let { avatar, unReadMessageCount, name, latestTime, latestMessage, onPress } = this.props;

        return (
            <TouchableHighlight
                onPress={onPress}
            >
                <View
                    style={styles.ConversationCell}
                >
                    <View
                        style={styles.leftBox}
                    >
                        <Image
                            source={{
                                uri: avatar
                            }}
                            style={styles.avatar}
                        />

                        <Badge
                            style={styles.cellBadge}
                            unReadMessageCount={unReadMessageCount}
                            height={18}
                        />
                    </View>
                    <View
                        style={styles.boxRight}
                    >
                        <View
                            style={styles.boxCeil}
                        >
                            <Text
                                style={styles.sessionName}
                                numberOfLines={1}
                            >{name}</Text>
                            <Text
                                style={styles.latestTime}
                            >{latestTime}</Text>
                        </View>
                        <Text
                            style={styles.boxFloor}
                            numberOfLines={1}
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
        backgroundColor: Color.BackgroundGrey
    },
    ConversationCell: {
        flexDirection: 'row',
        backgroundColor: Color.White
    },
    leftBox: {
        padding: 6
    },
    avatar: {
        borderRadius: 4,
        width: 50,
        height: 50
    },
    cellBadge: {
        position: 'absolute',
        top: 2,
        right: 0
    },
    boxRight: {
        flex: 1,
        padding: 10
    },
    boxCeil: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sessionName: {
        fontSize: FontSize.Content,
        color: Color.Black
    },
    boxFloor: {
        fontSize: FontSize.Annotation,
        color: '#9A9A9A'
    },
    latestTime: {
        fontSize: FontSize.Annotation,
        color: '#B3B3B3'
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
