/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 用户信息
 */

import { observable } from 'mobx';
import config from '../config.js';
import fetchLocal from '../util/fetchLocal.js';

import {
    AsyncStorage
} from 'react-native';

class ProfileStore {
    @observable userInfo: any = null;
    @observable isTryRestoreFromStorage = false;
    STORAGE_KEY = 'IM_USER_INFO';

    constructor() {
        this._restoreUserInfoFromStorage();
    }

    async _restoreUserInfoFromStorage () {
        let value = await AsyncStorage.getItem(this.STORAGE_KEY);
        this.userInfo = value ? JSON.parse(value) : value;

        // 执行完毕
        this.isTryRestoreFromStorage = true;
    }

    async login(name: string, phone: string, socketId: string = '') {
        let result = await fetchLocal(config.server + '/v1/user', {
            method: 'POST',
            body: JSON.stringify({
                name,
                phone,
                socketId
            })
        });

        if (result.success) {
            this.userInfo = result.data;
            AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.userInfo));
        }

        return result;
    }

    async logout(userId: string) {
        let result = await fetchLocal(config.server + `/v1/user/${userId}/status`, {
            method: 'delete',
        });
        if (result.success) {
            await AsyncStorage.removeItem(this.STORAGE_KEY);
            // 清空 userInfo
            this.userInfo = null;
        }

        return result;
    }
}
export default ProfileStore;
