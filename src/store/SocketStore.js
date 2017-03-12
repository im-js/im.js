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
import { observable, computed } from 'mobx';
import config from '../config.js';
import io from 'socket.io-client';

const moment = require('moment');
require('moment/locale/zh-cn');
moment.locale('zh-cn');

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

        this.socket.on('message' , (payload) => {
            let sessionItem = this._formatPayload(payload);
            this.sessionListMap.set(String(sessionItem.key), sessionItem);
        });
    }

    pushLocalePayload(payload: Object) {
        let sessionItem = this._formatPayload(payload);
        this.sessionListMap.set(String(sessionItem.key), sessionItem);
    }

    _formatPayload (payload) {
        let sessionItem;
        if (payload.localeExt) {
            let toInfo = payload.localeExt.toInfo;
            sessionItem = {
                avatar: toInfo.avatar,
                name: toInfo.name,
                latestMessage: payload.msg.content,
                timestamp: +(new Date()),
                key: `${payload.from}-${payload.to}`,
                toInfo: toInfo
            };
        } else {
            let ext = payload.ext;
            sessionItem = {
                avatar: ext.avatar,
                name: ext.name,
                latestMessage: payload.msg.content,
                timestamp: ext.timestamp,
                key: `${payload.to}-${payload.from}`,
                toInfo: {
                    userId: payload.from,
                    avatar: ext.avatar,
                    name: ext.name
                }
            };
        }

        return sessionItem;
    }

    @computed get sessionList(): Array<Object> {
        return [...this.sessionListMap.values()].sort(function(a, b) {
            return b.timestamp - a.timestamp;
        }).map(function (item) {
            item.latestTime = moment(item.timestamp).startOf('minute').fromNow();
            return item;
        });
    }
}
