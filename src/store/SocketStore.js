/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * Socket 管理，消息中继站
 */
import { observable, computed, toJS } from 'mobx';

import config from '../config.js';
import io from 'socket.io-client';

export default class SocketStore {
    @observable socketId = null;
    sessionListMap = observable.map();
    socket: Object;

    constructor() {
        // 强制指定使用 websocket 作为传输通道
        this.socket = io(config.server, {
            transports: ['websocket']
        });

        this.socket.on('connect', () => {
            this.socketId = this.socket.id;
        });

        this.socket.on('message' , (data) => {
            let payload = {
                avatar: data.ext.avatar,
                name: data.ext.name,
                latestTime: data.ext.displayTime,
                latestMessage: data.msg.content,
                from: data.from
            };

            this.sessionListMap.set(String(data.from), payload);
        });
    }

    @computed get sessionList(): Array<Object> {
        return [...this.sessionListMap.values()].sort(function(a, b) {
            return b.timestamp - a.timestamp;
        });
    }
}
