# Button
> 按钮组

## Usage
```javascript
<Button>
    纯文字
</Button>
```

## Options

Field         | Type          | Description
:-------------|:--------------|:-----------------------------------
children      | React.Element | 子元素
onPress       | Function      | 可选：点击事件
isWithOutLine | Boolean       | 可选，默认 `true`; 是否展示边框
style         | React.Style   | 可选, 外框样式
textStyle     | React.Style   | 可选，children 为字符串时的文本样式
disabled      | Boolean       | 可选，默认 false；是否禁用组件
