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
    @observable userInfo = null;
    STORAGE_KEY = 'USER_INFO';

    async _restoreUserInfoFromStorage () {
        let value = await AsyncStorage.getItem(this.STORAGE_KEY);
        this.userInfo = value ? JSON.parse(value) : value;
    }

    async login(name, phone, socketId = '') {
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

    async logout(userId) {
        let result = await fetchLocal(config.server + `/v1/user/${userId}/status`, {
            method: 'delete',
        });

        if (result.success) {
            await AsyncStorage.removeItem(this.STORAGE_KEY);
        }

        return result;
    }
}
export default new ProfileStore();
