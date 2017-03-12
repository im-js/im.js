/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * Socket 管理
 */
import { observable } from 'mobx';

import config from '../config.js';
import io from 'socket.io-client';

export default class SocketStore {
    @observable socketId = null;
    socket: Object;

    constructor() {
        // 强制指定使用 websocket 作为传输通道
        this.socket = io(config.server, {
            transports: ['websocket']
        });

        this.socket.on('connect', () => {
            this.socketId = this.socket.id;
        });
    }

    // 频道订阅
}
