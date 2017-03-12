/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 全局单例模型
 */

import ProfileStore from './store/ProfileStore.js';
import SocketStore from './store/SocketStore.js';

const socketStore = new SocketStore();
const profileStore = new ProfileStore(socketStore);

export {
    socketStore,
    profileStore
};
