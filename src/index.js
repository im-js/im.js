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

import TabBarIndex from './component/TabBarIndex.js';

class ImClient extends React.Component {
    render() {
        return (
            <Navigator
                initialComponent={TabBarIndex}
            />
        );
    }
}

export default ImClient;
