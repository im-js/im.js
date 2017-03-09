/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * 我的页面
 */

 import {observer} from 'mobx-react/native';
 import React, { Component } from 'react';
 import {
     TouchableHighlight,
     ScrollView,
     StyleSheet,
     Image,
     View,
     Text
 } from 'react-native';

import profileStore from '../store/profileStore.js';
import Profile from './Profile.js';

 @observer
 class Setting extends Component {
     constructor() {
         super();
     }

     render() {
         return (
             <ScrollView
                 style={styles.container}
             >
                 <View style={styles.space20} />

                 <TouchableHighlight
                     onPress={() => {
                         this.props.navigator.push(Profile);
                     }}
                 >
                     <View
                         style={[styles.cell]}
                     >
                         <View
                             style={styles.leftBox}
                         >
                             <Image
                                 source={{
                                     uri: 'http://image-2.plusman.cn/app/im-client/avatar/tuzki_06.jpg'
                                 }}
                                 style={styles.avatar}
                             />
                             <View
                                 style={styles.userInfo}
                             >
                                 <Text
                                     style={styles.name}
                                 >
                                     {'plusman'}
                                 </Text>

                                 <Text
                                     style={styles.info}
                                 >
                                     手机号: {'18667903755'}
                                 </Text>
                             </View>
                         </View>

                         <View style={styles.rightBox}>
                             <Image
                                 style={styles.arrow}
                                 source={{
                                     uri: 'http://image-2.plusman.cn/app/im-client/arrow.png'
                                 }}
                             />
                         </View>

                     </View>
                 </TouchableHighlight>
             </ScrollView>
         );
     }

     componentWillUnmount() {
         console.log('Setting componentWillUnmount');
     }

     componentWillMount() {
         console.log('Setting componentWillMount');
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#E6E6E6'
     },
     space20: {
         height: 20
     },
     cell: {
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderColor: '#DDDDE1',
         flexDirection: 'row',
         alignItems: 'stretch',
         justifyContent: 'space-between'
     },
     avatar: {
         borderWidth: 1,
         borderColor: '#A6A6A6',
         borderRadius: 6,
         margin: 10,
         height: 60,
         width: 60
     },
     leftBox: {
         flexDirection: 'row',
         alignItems: 'stretch'
     },
     rightBox: {
         justifyContent: 'center'
     },
     userInfo: {
         justifyContent: 'space-around',
         marginVertical: 10
     },
     name: {
         fontSize: 16,
         fontWeight: '500'
     },
     info: {
         fontSize: 14
     },
     arrow: {
         width: 20,
         height: 20,
         marginRight: 10
     }
 });

 export default Setting;
