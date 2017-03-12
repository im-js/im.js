/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 聊天室
 */

import uuid from 'uuid';
import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    ListView,
    Image,
    Text,
    TextInput,
    Platform,
    View
} from 'react-native';

import {
    FontSize,
    Color,
    Button
} from '../../UiLibrary';

import {
    socketStore,
    profileStore
} from '../storeSingleton.js';

export default class ChatRoom extends Component {
    // 接收者 ID
    toInfo: Object;
    firstEnter: number;
    ds: Object;
    rows: Object[];
    state: Object;
    chatListView: Object;

    constructor(props: Object) {
        super(props);
        this.toInfo = props.toInfo;
        this.firstEnter = 0;
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return r1.uuid !== r2.uuid;
            }
        });

        this.rows = [];

        this.state = {
            dataSource: this.ds.cloneWithRows(this.rows),
            textInputHeight: 40,
            inputValue: ''
        };
    }

    componentWillMount() {
        // 监听消息发送
        socketStore.socket.on('message',  this._handleMessage);
    }

    componentWillUnmount() {
        socketStore.socket.off('message', this._handleMessage);
    }

    _handleMessage = (data) => {
        if (data.from === this.toInfo.userId) {
            this.rows.push(data);
            this.setState({
                dataSource: this.ds.cloneWithRows(this.rows)
            });
        }
    }

    _scrollToBottom () {
        let scrollProperties = this.chatListView.scrollProperties;
        // 如果组件没有挂载完全，则不进行内容偏移
        if (!scrollProperties.visibleLength) { return; }

        let offsetY = scrollProperties.contentLength - scrollProperties.visibleLength;
        this.chatListView.scrollTo({
            y: offsetY > 0 ? offsetY : 0,
            animated: !(++this.firstEnter < 3)
        });
    }

    _onSubmitEditing = () => {
        // 数据组装
        let { userInfo } = profileStore;
        let payload = {
            from: userInfo.userId,
            to: this.toInfo.userId,
            uuid: uuid.v4(),
            msg: {
                type: 'txt',
                content: this.state.inputValue
            },
            ext: {
                avatar: userInfo.avatar,
                name: userInfo.name
            }
        };

        // 本地更新
        this.rows.push(payload);
        this.setState({
            dataSource: this.ds.cloneWithRows(this.rows)
        });
        this.setState({ inputValue: '' });

        // 远程发送
        socketStore.socket.emit('peerMessage', payload);
        // 本地会话列表更新
        socketStore.pushLocalePayload(Object.assign({
            localeExt: {
                toInfo: this.toInfo
            }
        }, payload));
    }

    _renderRow(row) {
        return (
            <MessageCell
                currentUser={profileStore.userInfo.userId}
                message={row}
            />
        );
    }

    render() {
        let content = (
            <View
                style={styles.container}
            >
                <ListView
                    ref={(reference) => { this.chatListView = reference; }}
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    onLayout={
                        (event) => {
                            this._scrollToBottom();
                        }
                    }
                    onContentSizeChange={
                        (event) => {
                            this._scrollToBottom();
                        }
                    }
                    renderRow={this._renderRow}
                />

                <View
                    style={styles.bottomToolBar}
                >
                    <TextInput
                        style={[styles.input, {
                            height: Math.max(40, this.state.textInputHeight < 180 ? this.state.textInputHeight : 180 )
                        }]}
                        multiline={true}
                        controlled={true}
                        underlineColorAndroid="transparent"
                        returnKeyType="default"
                        value={this.state.inputValue}
                        placeholder="Type here to send message"
                        // ios only
                        enablesReturnKeyAutomatically={true}
                        onContentSizeChange={
                            (event) => {
                                this.setState({textInputHeight: event.nativeEvent.contentSize.height});
                            }
                        }
                        onChangeText={ (text) => {
                            this.setState({ inputValue: text });
                        }}
                    />

                    <Button
                        style={styles.sendButton}
                        textStyle={styles.sendButtonText}
                        disabled={!this.state.inputValue}
                        onPress={this._onSubmitEditing}
                    >
                        发送
                    </Button>
                </View>
            </View>
        );

        if (Platform.OS === 'ios') {
            return (
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.KeyboardAvoidingView}
                    keyboardVerticalOffset={this.props.keyboardVerticalOffset || 64}
                >
                    {content}
                </KeyboardAvoidingView>
            );
        } else {
            return content;
        }
    }
}

class MessageCell extends Component {
    render() {
        let { currentUser, message } = this.props;

        let differentStyle = {};
        if (message.from === currentUser) {
            differentStyle = {
                flexDirection: 'row-reverse',
                backgroundColor: '#92E649'
            };
        } else {
            differentStyle = {
                flexDirection: 'row',
                backgroundColor: '#FFFFFF'
            };
        }

        return (
            <View style={[styles.messageCell, {flexDirection: differentStyle.flexDirection}]}>
                <Image
                    source={{
                        uri: message.ext.avatar
                    }}
                    style={styles.avatar}
                />
                <View
                    style={[styles.contentView, {backgroundColor: differentStyle.backgroundColor}]}
                >
                    <Text style={styles.messageCellText}>{message.msg.content}</Text>
                </View>
                <View style={styles.endBlankBlock} />
            </View>
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
    KeyboardAvoidingView: {
        flex: 1
    },
    bottomToolBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Color.LittleGrey
    },
    sendButton: {
        marginHorizontal: 10,
        backgroundColor: Color.WechatGreen,
        borderColor: Color.WechatGreen
    },
    sendButtonText: {
        color: Color.White
    },
    input: {
        flex: 1,
        color: Color.Black,
        fontSize: FontSize.Main,
        padding: 10
    },
    messageCell: {
        marginTop: 5,
        marginBottom: 5,
    },
    messageCellText: {
        fontSize: FontSize.Content
    },
    avatar: {
        borderRadius: 4,
        margin: 5,
        width: 40,
        height: 40
    },
    contentView: {
        borderRadius: 4,
        padding: 4,
        overflow: 'hidden',
        flex: 1,
        margin: 5,
        justifyContent: 'center'
    },
    endBlankBlock: {
        margin: 5,
        width: 50,
        height: 40
    }
});
