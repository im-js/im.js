/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 用户设置页面
 */
import { observer } from 'mobx-react/native';
import React from 'react';
import {
    ScrollView,
    Switch,
} from 'react-native';

import {
    ListItem
} from '../../UiLibrary';

import {
    profileStore
} from '../storeSingleton.js';

@observer
class Setting extends React.Component {
    state: Object;

    constructor(props: Object) {
        super(props);

        this.state = {
            colorTrueSwitchIsOn: profileStore.userInfo.vibration
        };
    }

    _renderSwitch = () => {
        return (
            <Switch
             onValueChange={(value) => {
                    this.setState({colorTrueSwitchIsOn: value});
                    profileStore.modifyUserInfo('vibration', value);
                 }
             }
             value={this.state.colorTrueSwitchIsOn} />
        );
    }

    render() {
        return (
            <ScrollView>
                <ListItem.Header
                    title="消息提醒设置"
                />
                <ListItem.Label
                    labelText="新消息震动"
                    rightComponent={this._renderSwitch}
                />
            </ScrollView>
        );
    }
}

export default Setting;
