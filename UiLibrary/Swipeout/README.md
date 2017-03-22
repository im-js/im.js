# Swipeout


## Usage
```javascript
<Swipeout
    {...options}
>
    ......
</Swipeout>
```

## Options
**ButtonDesc 定义**  
```javascript
{
    title: String('标题文案'),
    type: Enum('Delete', 'Cancel'),
    onPress: Function('点击回调')
}
```

Field        | Type            | Description
:------------|:----------------|:----------------
rightButtons | `Array<ButtonDesc>` | 右侧按钮组
