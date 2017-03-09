# im-client
## 运行项目
安装依赖
```shell
npm install
```
运行
```shell
react-native run-ios
// or
react-native run-android
```

## im-server
im 服务端项目地址：[im-server](https://github.com/plusmancn/im-server)

## 开发模式切换
通过更改 `app.json` 的 `appMode` 字段，进行组件调试模式（`UiLibrary`）和 Im 模式（`ImClient`）的切换。  
所有基础组件在 `UiLibrary` 文件夹，与业务无关，[组件库文档地址](https://github.com/plusmancn/im-client/blob/master/UiLibrary/README.md)。  
Im 功能代码在 `src` 文件夹内。

## 开发笔记
详细记录了开发过程中的思考 [点击进入博客](https://github.com/plusmancn/plusmancn.github.com)
