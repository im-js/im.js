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

## 开发模式切换
通过更改 `app.json` 的 `appMode` 字段，进行组件调试模式（`UiLibrary`）和 Im 模式（`ImClient`）的切换。  
所有基础组件在 `UiLibrary` 文件夹，与业务无关。  
Im 功能代码在 `src` 文件夹内。
