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

// 加载组件
import TabBar from './TabBar/test/index.js'

class Demo extends Component {
    constructor() {
        super();

        this.ds = new ListView.DataSource({
            rowHasChanged: function(r1, r2) {
                return r1.name !== r2.name;
            }
        });

        this.components = [
            {
                name: 'TabBar',
                compoent: TabBar
            }
        ];
    }

    _renderRow(row) {
        return (
            <TouchableHighlight
                onPress={() => {
                }}
            >
                <View
                    style={styles.listItem}
                >
                    <Text

                    >{row.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.ds.cloneWithRows(this.components)}
                renderRow={this._renderRow}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1
    },
    listItem: {
        backgroundColor: '#fff'
    }
});

export default Demo;
