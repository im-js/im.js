/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * Android 入口文件
 */

import {
    AppRegistry,
} from 'react-native';

import ImClient from './src/index.js';
import Demo from './UiLibrary/Demo.js';

const APP_INFO = require('./app.json');

if (APP_INFO.appMode === 'ImClient') {
    AppRegistry.registerComponent('ImClient', () => ImClient);
} else if (APP_INFO.appMode === 'UiLibrary') {
    AppRegistry.registerComponent('ImClient', () => Demo);
}
