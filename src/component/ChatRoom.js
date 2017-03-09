/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 聊天室
 */

 import uuid from 'uuid';
 import React, { Component } from 'react';
 import {
   StyleSheet,
   ListView,
   Image,
   Text,
   TextInput,
   KeyboardAvoidingView,
   View
 } from 'react-native';

 export default class ChatRoom extends Component {
     firstEnter: number;
     ds: Object;
     rows: Object[];
     state: Object;
     chatListView: Object;

     constructor () {
         super();

         this.firstEnter = 0;
         this.ds = new ListView.DataSource({
             rowHasChanged: (r1, r2) => {
                 return r1.uuid !== r2.uuid;
             }
         });

         // this.socket.on('connect', () =>{
             // this.socket.emit('registry', {
                 // userId: 'rnTuzki',
                 // avatar: 'https://s-media-cache-ak0.pinimg.com/736x/0a/b7/71/0ab771acf45a361273eeb170d5834d09.jpg',
                 // socketId: this.socket.id
             // });
         // });

         this.rows = [
             {
                 role: 'others',
                 content: 'Bang! I\'am tuzki! Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. The defaults are different, with flexDirection defaulting to column instead of row, and the flex parameter only supporting a single number. ',
                 avatar: 'https://s-media-cache-ak0.pinimg.com/236x/25/a1/71/25a171d9d10fb45329db5cce3613d1b3.jpg',
                 uuid: 'DA5BC26F-9CE7-444C-9F12-7E669C65AB81'
             },
             {
                 role: 'myself',
                 content: 'hi,💕,I\'am plusman! ',
                 avatar: 'https://s-media-cache-ak0.pinimg.com/736x/0a/b7/71/0ab771acf45a361273eeb170d5834d09.jpg',
                 uuid: '060E2685-2EDB-4DDA-A6D3-999BED6F6A79'
             },
         ];

         this.state = {
             dataSource: this.ds.cloneWithRows(this.rows),
             textInputHeight: 40,
             inputValue: ''
         };

         // 监听消息发送
         // this.socket.on('message',  (data) => {
             // this.rows.push({
                 // role: 'others',
                 // content: data.content,
                 // avatar: data.avatar,
                 // uuid: data.uuid
             // });

             // this.setState({
                 // dataSource: this.ds.cloneWithRows(this.rows)
             // });
         // });

     }

     _scrollToBottom () {
         let scrollProperties = this.chatListView.scrollProperties;
         // 如果组件没有挂载完全，则不进行内容偏移
         if (!scrollProperties.visibleLength) { return; }

         let offsetY = scrollProperties.contentLength - scrollProperties.visibleLength;
         this.chatListView.scrollTo({
             y: offsetY > 0 ? offsetY : 0,
             animated: !(++this.firstEnter < 3)
         });
     }

     render() {
         return (
           <View style={styles.container}>
             <KeyboardAvoidingView
                 behavior="padding"
                 style={styles.KeyboardAvoidingView}
                 keyboardVerticalOffset={this.props.keyboardVerticalOffset || 64}
             >
                 <ListView
                     ref={(reference) => { this.chatListView = reference; }}
                     dataSource={this.state.dataSource}
                     onLayout={
                         (event) => {
                             this._scrollToBottom();
                         }
                     }
                     onContentSizeChange={
                         (event) => {
                             this._scrollToBottom();
                         }
                     }
                     renderRow={ (rowData) =>
                         <MessageCell
                             role={rowData.role}
                             content={rowData.content}
                             avatar={rowData.avatar}
                         />
                     }
                 />

                 <TextInput
                     style={[styles.input, {
                         height: Math.max(40, this.state.textInputHeight < 180 ? this.state.textInputHeight : 180 )
                     }]}
                     multiline={true}
                     controlled={true}
                     returnKeyType="send"
                     value={this.state.inputValue}
                     placeholder="Type here to send message"
                     blurOnSubmit={true}
                     // autoFocus={true}
                     keepKeyboardPersistent={true}
                     // ios only
                     enablesReturnKeyAutomatically={true}
                     onContentSizeChange={
                         (event) => {
                             this.setState({textInputHeight: event.nativeEvent.contentSize.height});
                         }
                     }
                     onSubmitEditing={
                         (event) => {
                             // this.socket.emit('peerMessage', {
                                 // content: this.state.inputValue,
                                 // from: 'rnTuzki',
                                 // to: 'webTuzki'
                             // });

                             this.rows.push({
                                 role: 'myself',
                                 content: this.state.inputValue,
                                 avatar: 'https://s-media-cache-ak0.pinimg.com/736x/0a/b7/71/0ab771acf45a361273eeb170d5834d09.jpg',
                                 uuid: uuid.v4()
                             });

                             this.setState({
                                 dataSource: this.ds.cloneWithRows(this.rows)
                             });

                             this.setState({ inputValue: '' });
                         }
                     }
                     onChangeText={ (text) => {
                             this.setState({ inputValue: text });
                     }}
                 />
             </KeyboardAvoidingView>
           </View>
         );
     }
 }

 class MessageCell extends Component {
     render() {
         let differentStyle = {};
         if (this.props.role === 'myself') {
             differentStyle = {
                 flexDirection: 'row-reverse',
                 backgroundColor: '#92E649'
             };
         } else {
             differentStyle = {
                 flexDirection: 'row',
                 backgroundColor: '#FFFFFF'
             };
         }

         return (
             <View style={[styles.messageCell, {flexDirection: differentStyle.flexDirection}]}>
                 <Image
                     source={{
                         uri: this.props.avatar
                     }}
                     style={styles.avatar}
                 />
                 <View
                     style={[styles.contentView, {backgroundColor: differentStyle.backgroundColor}]}
                 >
                     <Text style={styles.messageCellText}>{this.props.content}</Text>
                 </View>
                 <View style={styles.endBlankBlock} />
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'flex-start',
         alignItems: 'stretch',
         backgroundColor: '#E6E6E6'
     },
     KeyboardAvoidingView: {
         flex: 1
     },
     input: {
         fontSize: 17,
         padding: 10,
         borderWidth: 1,
         borderColor: '#E0E0E1'
     },
     messageCell: {
         // backgroundColor: '#4682b4',
         marginTop: 5,
         marginBottom: 5,
     },
     messageCellText: {
         // backgroundColor: '#4682b4',
         fontSize: 14
     },
     avatar: {
         borderRadius: 4,
         margin: 5,
         width: 40,
         height: 40
     },
     contentView: {
         borderRadius: 4,
         padding: 4,
         overflow: 'hidden',
         flex: 1,
         margin: 5,
         justifyContent: 'center'
     },
     endBlankBlock: {
         margin: 5,
         width: 50,
         height: 40
     }
 });
