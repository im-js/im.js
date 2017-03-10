/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * App 入口文件
 */

import { observer } from 'mobx-react/native';
import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View
} from 'react-native';

import {
    Navigator
} from '../UiLibrary';

import {
    profileStore
} from './storeSingleton.js';

import Login from './component/Login.js';
import TabBarIndex from './component/TabBarIndex.js';

@observer
class ImClient extends React.Component {
    state: Object;

    constructor(props: Object) {
        super(props);
    }

    render() {
        if (profileStore.isTryRestoreFromStorage) {
            if (profileStore.userInfo) {
                return (
                    <Navigator
                        initialComponent={TabBarIndex}
                    />
                );
            } else {
                return (
                    <Login/>
                );
            }
        } else {
            // TODO: 思考下如何做 loading 全局覆盖
            return (
                <ActivityIndicator
                    style={styles.activityIndicatorContainer}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        flex: 1
    }
});

export default ImClient;
