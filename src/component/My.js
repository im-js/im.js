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

import {
    profileStore
} from '../storeSingleton.js';

import Profile from './Profile.js';

 @observer
 class Setting extends Component {
     constructor(props: Object) {
         super(props);
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
                                     uri: profileStore.userInfo.avatar
                                 }}
                                 style={styles.avatar}
                             />
                             <View
                                 style={styles.userInfo}
                             >
                                 <Text
                                     style={styles.name}
                                 >
                                     {profileStore.userInfo.name}
                                 </Text>

                                 <Text
                                     style={styles.info}
                                 >
                                     手机号: {profileStore.userInfo.phone}
                                 </Text>
                             </View>
                         </View>
                     </View>
                 </TouchableHighlight>
             </ScrollView>
         );
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
     }
 });

 export default Setting;
