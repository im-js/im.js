# Navigator
>页面导航组件，基于 `NavigationExperimental` 的封装，使用体验更加接近原生。

## Usage
```javascript
<Navigator
    initialComponent={YourComponent}
/>
```

## Options

Field            | Type            | Description
:----------------|:----------------|:---------------------------------------
initialComponent | React.Component | 初始化组件
hackBackAndroid  | Boolean         | 可选，默认 `true`; 是否处理安卓返回按钮
isShowHeader     | Boolean         | 可选，默认 `true`; 是否展示导航栏
style            | React.Style     | 可选，导航栏样式

## this.props.navigator
在导航栈内的组件，可以通过访问，`this.props.navigator` 属性，来获取当前导航栏，该对象提供如下方法，来改变导航栏状态。

**push**  
推入视图

Field                | Type            | Description
:--------------------|:----------------|:---------------------------------
component            | React.Component | 组件
title                | String          | 导航栏标题
renderRightComponent | Function        | 可选；右侧组件渲染函数
isShowHeader         | Boolean         | 可选，默认 `true`; 是否展示导航栏

**pop**  
视图弹出，无参数

**setNavigationTitle**  
设置导航栏标题

Field | Type   | Description
:-----|:-------|:-----------
title | String | 导航栏标题

另外可以通过设置组件的 `NavigationTitle`  属性来设置导航栏标题，例如
```javascript
class Demo extends React.Component {
    static NavigationTitle = "导航栏标题";
}
```

**setRenderRightCompoent**  
参数同 `push` 方法的 `renderRightComponent`

**toogleNavigationHeader**  
切换导航栏，显示或者隐藏，影响 `isShowHeader` 变量
