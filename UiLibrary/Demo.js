/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * Demo 页面入口文件
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    TouchableHighlight,
    View,
    Text
} from 'react-native';

import TabBarDemo from './TabBar/test/index.js';
import NavigatorDemo from './Navigator/test/index.js';
import ButtonDemo from './Button/test/index.js';
import TextInputDemo from './TextInput/test/index.js';
import ListItemDemo from './ListItem/test/index.js';
import SwipeoutDemo from './Swipeout/test/index.js';

import {
    Navigator,
    FontSize,
    Color,
    ListItem
} from './index.js';

class DemoListView extends Component {
    static NavigationTitle = '组件列表';

    ds: Object;
    components: Object;

    constructor() {
        super();

        this.ds = new ListView.DataSource({
            rowHasChanged: function(r1, r2) {
                return r1.name !== r2.name;
            },
            // REVIEW: s1, s2 的返回值不确定，需要再次确认
            sectionHeaderHasChanged: function (s1, s2) {
                return s1 !== s2;
            }
        });

        this.components = {
            '导航': [
                {
                    name: 'TabBar',
                    component: TabBarDemo
                },
                {
                    name: 'Navigator',
                    component: NavigatorDemo
                }
            ],
            '控件': [
                {
                    name: 'Button',
                    component: ButtonDemo
                },
                {
                    name: 'TextInput',
                    component: TextInputDemo
                }
            ],
            '列表': [
                {
                    name: 'ListItem',
                    component: ListItemDemo
                },
                {
                    name: 'Swipeout',
                    component: SwipeoutDemo
                }
            ],
            '其他': [
                {
                    name: 'Badge',
                    component: TabBarDemo
                }
            ]
        };
    }

    _renderRow = (row) => {
        return (
            <ListItem.Label
                onPress={() => {
                    this.props.navigator.push(row.component);
                }}
                labelText={row.name}
            />
        );
    }

    _renderSectionHeader = (sectionData, sectionID, rowId) => {
        return (
            <ListItem.Header
                title={sectionID}
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
                style={styles.container}
                dataSource={this.ds.cloneWithRowsAndSections(this.components)}
                renderSectionHeader={this._renderSectionHeader}
                renderSeparator={this._renderSeparator}
                renderRow={this._renderRow}
            />
        );
    }
}


class  Demo extends Component {
    render() {
        return (
            <Navigator
                initialComponent={DemoListView}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listItemText: {
        color: Color.Black,
        marginHorizontal: 15,
        fontSize: FontSize.Primary
    }
});

export default Demo;
