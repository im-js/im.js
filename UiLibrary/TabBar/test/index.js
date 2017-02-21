/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * Description
 */
 import React from 'react';
 import {
     StyleSheet,
     TextInput,
     Text,
     View,
     Alert
 } from 'react-native';

 import {
     Color,
     TabBar
 } from '../../index.js';

 class TabDemo extends React.Component {
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
                     同理，如果是一个长列表，也会保留滚动状态。
                 </Text>
             </View>
         );
     }
 }

 class TabBarExample extends React.Component {
     static navigation = {
         title: {
             text: '首页'
         }
     };

     constructor (props) {
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
                         Alert.alert('首页 Tab 被点击', '可在此处与 navigator 通讯');
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
                         this.setState({
                             unReadMessageCount: this.state.unReadMessageCount + 1
                         });
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
         backgroundColor: Color.G3,
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
