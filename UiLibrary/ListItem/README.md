# ListItem
> ListItem 元素集

## Usage
```javascript
<ListItem.Label
    icon="http://image-2.plusman.cn/app/im-client/pictures-256.png!icon3x"
    labelText="相册"
    onPress={() => {}}
/>
```

## ListItem.Label

Filed          | Type               | Description
:--------------|:-------------------|:--------------------------------------------
style          | React.Style        | 外框样式
icon           | String URL         | 可选，图标地址
iconStyle      | React.Style        | 可选，图标样式
labelText      | String             | 可选：label 标题
labelStyle     | React.Style        | 可选 label 样式
rightComponent | Function OR String | 可选，右侧组件
textStyle      | React.Style        | 可选，当 `rightComponent` 为 `String` 时生效
onPress        | Function           | 可选，点击事件回调



## ListItem.Header

Filed | Type   | Description
:-----|:-------|:-----------
title | String | 文本标题


## ListItem.Separator

Filed           | Type   | Description
:---------------|:-------|:--------------
backgroundColor | String | 背景色
lineHeight      | Number | 分割线高度
lineColor       | String | 分割线颜色
paddingLeft     | Number | 分割线左内补白

## ListItem.Arrow

Filed | Type        | Description
:-----|:------------|:------------
style | React.Style | 箭头图标样式
