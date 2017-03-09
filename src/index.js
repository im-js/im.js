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

import React from 'react';

import {
    Navigator
} from '../UiLibrary';

import {
    profileStore
} from './storeSingleton.js';

import Login from './component/Login.js';
import TabBarIndex from './component/TabBarIndex.js';

class ImClient extends React.Component {
    render() {
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
    }
}

export default ImClient;
