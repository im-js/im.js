/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * TabBar 示例页面
 */
import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';

import {
    Color,
    TabBar,
} from '../../index.js';

class TabDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('TabDemo ' + this.props.content + ' was created');
    }

    componentWillMount() {
        console.log(this.props.name, 'will Mount');
    }

    componentWillUnmount() {
        console.log(this.props.name, 'will UnMount');
    }

    render() {
        console.log(this.props.name, 'is rendering');

        return (
            <View
                style={[
                    styles.container,
                    styles.tabDemoContainer
                ]}
            >
                <Text
                    style={styles.text}
                >
                    {this.props.content}
                </Text>
            </View>
        );
    }
}

class TabDemoTextInput extends React.Component {
    componentWillMount() {
        console.log(this.props.name, 'will Mount');
    }

    componentWillUnmount() {
        console.log(this.props.name, 'will UnMount');
    }

    render() {
        console.log(this.props.name, 'is rendering');

        return (
            <View
                style={[
                    styles.container,
                    styles.tabDemoContainerInput
                ]}
            >
                <TextInput
                    style={styles.textInput}
                    placeholder="输入点什么，然后切换下 Tab"
                    underlineColorAndroid="#FFF"
                />

                <Text
                    style={styles.text}
                >
                    同理，如果是一个长列表，也会保留滚动状态。{'\n'}
                    这也是一个 navigator 组件交互示例
                </Text>
            </View>
        );
    }
}

class TabBarExample extends React.Component {
    static NavigationTitle = '首页';
    state: Object;
    _tabDemoTextInput: Object;

    constructor (props: Object) {
        super(props);

        this.state = {
            unReadMessageCount: 95
        };
    }

    render() {
        return (
            <TabBar
                // 指定序号来选定首页渲染视图，默认为 0
                // activeIndex={2}
            >
                <TabBar.Item
                    title="首页"
                    color="#999"
                    tintColor="#FB3F16"
                    icon="https://f.souche.com/ic_main_home.png"
                    tintIcon="https://f.souche.com/ic_main_home_sel.png"
                    onPress={() => {
                        this.props.navigator.setNavigationTitle('首页');
                    }}
                >
                    <TabDemo
                        content="首页，截获 tab 点击事件"
                        name="首页"
                    />
                </TabBar.Item>

                <TabBar.Item
                    title="消息"
                    color="#999"
                    tintColor="#FB3F16"
                    icon="https://f.souche.com/ic_main_msg.png"
                    tintIcon="https://f.souche.com/ic_main_msg_sel.png"
                    badge={this.state.unReadMessageCount}
                    onPress={() => {
                        let unReadMessageCount = this.state.unReadMessageCount + 1;
                        this.setState({
                            unReadMessageCount: unReadMessageCount
                        });

                        this.props.navigator.setNavigationTitle(`消息未读(${unReadMessageCount})`);
                    }}
                >
                    <TabDemo
                        content="消息，每次点击增加一次计数，同时每个 Tab 页是懒加载的"
                        name="消息页面"
                    />
                </TabBar.Item>

                <TabBar.Item
                    title="我的"
                    color="#999"
                    tintColor="#FB3F16"
                    icon="https://f.souche.com/ic_main_mine.png"
                    tintIcon="https://f.souche.com/ic_main_mine_sel.png"
                    onPress={() => {
                        this.props.navigator.setNavigationTitle('我的');
                    }}
                >
                    <TabDemoTextInput
                        name="我的页面"
                    />
                </TabBar.Item>
            </TabBar>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackgroundGrey
    },
    tabDemoContainer: {
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    tabDemoContainerInput: {
        alignItems: 'stretch'
    },
    text: {
        fontSize: 16,
        textAlign: 'center'
    },
    textInput: {
        marginTop: 30,
        fontSize: 16,
        height: 40,
        padding: 5,
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        marginBottom: 20
    }
});

export default TabBarExample;
