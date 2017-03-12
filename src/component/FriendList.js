/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 好友列表
 */
import { toJS } from 'mobx';
import { observer } from 'mobx-react/native';
import React from 'react';
import {
    RefreshControl,
    StyleSheet,
    ListView,
} from 'react-native';

import {
    ListItem
} from '../../UiLibrary';

import { profileStore } from '../storeSingleton.js';
import ChatRoom from './ChatRoom.js';

@observer
class FriendList extends React.Component {
    state: Object;
    ds: Object;

    constructor(props: Object) {
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged: function (r1, r2) {
                return r1.userId !== r2.userId;
            },
            // REVIEW: s1, s2 的返回值不确定，需要再次确认
            sectionHeaderHasChanged: function (s1, s2) {
                console.log('👁', s1, s2);
                return s1 !== s2;
            }
        });

        this.state = {
            refreshing: false
        };
    }

    _onRefresh = async () => {
        this.setState({
            refreshing: true
        });

        await profileStore.getOnlineList();

        this.setState({
            refreshing: false
        });
    }

    _renderRow = (row) => {
        return (
            <ListItem.Label
                icon={row.avatar}
                labelText={row.name + (row.status === 'online' ? '' : '  (离线)')}
                onPress={()=>{
                    this.props.navigator.push(ChatRoom, row.name, {
                        toInfo: {
                            userId: row.userId,
                            avatar: row.avatar,
                            name: row.name
                        }
                    });
                }}
            />
        );
    }

    _renderSectionHeader = (sectionData, sectionID, rowId) => {
        return (
            <ListItem.Header
                title={sectionID.toUpperCase()}
            />
        );
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <ListItem.Separator
                key={`${sectionID}-${rowID}`}
            />
        );
    }


    render() {
        return (
            <ListView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                style={styles.container}
                dataSource={this.ds.cloneWithRowsAndSections(toJS(profileStore.friendList))}
                renderSectionHeader={this._renderSectionHeader}
                renderSeparator={this._renderSeparator}
                renderRow={this._renderRow}
                enableEmptySections={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default FriendList;
