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

import {
    Navigator,
    FontSize,
    Color
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
                console.log('👀', s1, s2);
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
            ]
        };
    }

    _renderRow = (row) => {
        return (
            <TouchableHighlight
                onPress={() => {
                    this.props.navigator.push(row.component);
                }}
            >
                <View
                    style={styles.listItem}
                >
                    <Text
                        style={styles.listItemText}
                    >{row.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    _renderSectionHeader = (sectionData, sectionID, rowId) => {
        return (
            <View
                style={styles.sectionHeader}
            >
                <Text
                    style={styles.sectionHeaderText}
                >
                    {sectionID}
                </Text>
            </View>
        );
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
          return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: 1
                }}
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
    },
    sectionHeader: {
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: Color.BackgroundGrey
    },
    sectionHeaderText: {
        color: Color.LightBlack,
        fontSize: FontSize.Annotation
    }
});

export default Demo;
