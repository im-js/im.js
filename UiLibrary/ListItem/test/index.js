/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * ListItem 测试文件
 */

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

import {
    Color,
    ListItem
} from '../../index.js';

export default class ListItemDemo extends React.Component {
    static NavigationTitle = 'Item 条目样式';

    constructor(props: Object) {
        super(props);
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <ListItem.Header
                    title="带图标"
                />

                <ListItem.Label
                    icon="http://image-2.plusman.cn/app/im-client/pictures-256.png!icon3x"
                    labelText="相册"
                    onPress={() => {}}
                />

                <ListItem.Separator/>

                <ListItem.Label
                    icon="http://image-2.plusman.cn/app/im-client/wallet-256.png!icon3x"
                    labelText="钱包"
                    rightComponent="100,938"
                    onPress={() => {}}
                />

                <ListItem.Header
                    title="基础样式"
                />

                <ListItem.Label
                    labelText="头像"
                    rightComponent={() => {
                        return (
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: 'http://image-2.plusman.cn/app/im-client/avatar/tuzki_06.jpg'
                                }}
                            />
                        );
                    }}
                    onPress={() => {}}
                />

                <ListItem.Separator/>

                <ListItem.Label
                    labelText="名字"
                    rightComponent="plusman"
                    onPress={() => {}}
                />

                <ListItem.Separator/>

                <ListItem.Label
                    labelText="简介"
                    rightComponent="这是一个不可点击的 Item"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatar: {
        borderWidth: 1,
        borderColor: Color.Grey,
        borderRadius: 6,
        height: 60,
        width: 60
    }
});
