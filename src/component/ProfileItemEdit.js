/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 单条目编辑页
 */

import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    ScrollView,
    TextInput
} from 'react-native';

export default class ProfileItemEdit extends Component {
    state: Object;

    constructor() {
        super();

        this.state = {
            value: ''
        };
    }

    save () {
        Alert.alert('点击保存');
    }

    componentWillMount() {
        this.setState({
            value: this.props.fieldValue
        });
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <TextInput
                    style={styles.textInput}
                    value={this.state.value}
                    onChangeText={ (text) => {
                        if (this.props.fieldValue === text || !text) {
                            this.props.store.isRightButtonDisable = true;
                        } else {
                            this.props.store.isRightButtonDisable = false;
                        }

                        this.setState({
                            value: text
                        });
                    }}
                    autoFocus={true}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6'
    },
    textInput: {
        marginTop: 20,
        height: 40,
        borderWidth: 1,
        borderColor: '#DDDDE1',
        backgroundColor: '#FFF',
        padding: 10
    }
});
