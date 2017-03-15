# react-native-wechat
>一个基于 react-native + socket.io + node 的仿微信 JS-IM

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

## im-server
> 基于 socket.io + koa2 + cloverx(自用 RestuFul 框架)

im 服务端项目地址：[im-server](https://github.com/plusmancn/im-server)

服务端用到了 [cloverx-doc](https://github.com/clover-x/cloverx-doc) 来生成 `Swagger` 在线调试文档，[cloverx-doc](https://github.com/clover-x/cloverx-doc) 还自带了一个输出格式化器，用来保证 `Api` 接口输出的一致性，纯手撸的，有兴趣可以看下。

## 组件库
> 开发本项目的时候，要求自己尽量手写基础组件，基础组件与业务无关，可通用

组件库地址：[UiLibrary](https://github.com/plusmancn/im-client/blob/master/UiLibrary/README.md)


## 组件调试
通过更改 `app.json` 的 `appMode` 字段，进行组件调试模式（`UiLibrary`）和 Im 模式（`ImClient`）的切换。  

## 开发笔记
> 详细记录了开发过程中的思考 [点击进入博客](https://github.com/plusmancn/plusmancn.github.com)  


## TODO

**计划中**  

- [x] 应用内离线消息
- [ ] 当 `rn-0.43` 发布的时候，使用 `FlatList` 和 `SectionList` 替换 `ListView`
- [ ] `ListView` 替换完成后，进行群聊开发
- [ ] 公众号菜单以及对应后台 `Dashboard` 开发

**或许会做**  

- [ ] 集成微信登录
- [ ] 集成一个第三方推送服务
