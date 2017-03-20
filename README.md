# im.js
>一个基于 react-native + mobx + socket.io + node 的仿微信 JS-Wechat。

## 示例

## 运行项目
> react-native 在 debug 和 release 模式之间的性能差距是惊人的。

安装依赖
```shell
npm install
```
进入开发模式
```shell
react-native run-ios
// or
react-native run-android
```

## im.js.server
> 基于 socket.io + koa2 + [cloverx](https://github.com/clover-x/cloverx)(自用 RestuFul 框架)

im 服务端项目地址：[im.js.server](https://github.com/plusmancn/im.js.server)

服务端用到了 [cloverx-doc](https://github.com/clover-x/cloverx-doc) 来生成 `Swagger` 在线调试文档，[cloverx-doc](https://github.com/clover-x/cloverx-doc) 还自带了一个输出格式化器，用来保证 `Api` 接口输出的一致性，纯手撸的，有兴趣可以看下。

## 组件库
> 开发本项目的时候，要求自己尽量手写基础组件，基础组件与业务无关，可通用

组件库地址：[UiLibrary](https://github.com/plusmancn/im.js/blob/master/UiLibrary/README.md)


## 组件调试
通过更改 `app.json` 的 `appMode` 字段，进行组件调试模式（`UiLibrary`）和 Im 模式（`ImClient`）的切换。  

## 开发笔记
> 详细记录了开发过程中的思考 [点击进入博客](https://github.com/plusmancn/plusmancn.github.com)  


## TODO

**计划中**  

- [x] 应用内离线消息，基于 `Reids` 实现。
- [ ] 消息 `payload` 传输时使用 `protobuf` 序列化
- [ ] 当 `rn-0.43` 发布的时候，使用 `FlatList` 和 `SectionList` 替换 `ListView`
- [ ] `ListView` 替换完成后，进行群聊开发
- [ ] 公众号菜单以及对应后台 `Dashboard` 开发
- [ ] 服务器 https 化

**或许会做**  

- [ ] 集成微信登录
- [ ] 集成一个第三方推送服务

**Bug 列表**
- [ ] 会话列表，消息如果以 `\n` 结尾，会造成多行问题。


# 技术文档
## 消息体格式约定
**txt**  
```javascript
{
    from: String('用户ID'),
    to: String('用户ID'),
    uuid: '消息唯一UUID',
    msg: {
        type: 'txt',
        content: '文本内容',
    },
    ext: {
        avatar: String('用户头像地址'),
        name: String('用户姓名'),
        timestamp: timestamp(毫秒), // 可使用 moment().startOf('minute').fromNow() 格式化
    },
    // 不参与网络传输，本地传递拓展字段位置
    localeExt: {
    }
}
```

## 消息 ACK

## 离线消息机制
基于 `Redis` 实现，单用户离线队列命名规则为 `offline:queue:userId:${userId}`，存储结构为 `Lists`。

当用户上线时候，客户端向服务器发送 `user:online` 事件，服务器以数组的形式返回对应用户的离线消息。

## 用户状态裁决
AppState 状态与 socket 状态

State      | background | inactive | active
:----------|:-----------|:---------|:-------
socket-ios | disconnect | connect  | connect
