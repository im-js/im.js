# TabBar
> 支持视图缓存、懒加载

## Usage
```javascript
<TabBar
    // 指定序号来选定首页渲染视图，默认为 0
    // activeIndex={2}
>
    <TabBar.Item
        title="首页"
        color="#999"
        tintColor="#FB3F16"
        icon="https://f.souche.com/ic_main_home.png"
        tintIcon="https://f.souche.com/ic_main_home_sel.png"
        badge={32}
        onPress={() => {
            Alert.alert('首页 Tab 被点击', '可在此处与 navigator 通讯');
        }}
    >
        {Your Component}
    </TabBar.Item>

    ...more...
</TabBar>
```

## Options
**TabBar**

Field       | Type   | Description
:-----------|:-------|:---------------------------------
activeIndex | Number | 初始化视图在第几个 Tab，从 0 开始

**TabBar.Item**

Field     | Type       | Description
:---------|:-----------|:----------------------------------------
title     | String     | 底部标题
color     | String     | 未选中状态下的标题颜色
tintColor | String     | 选中状态下的标题颜色
icon      | String URL | 为选中状态下的 icon 图片
tintIcon  | String URL | 选中状态下的 icon 图片
badge     | Number     | 角标计数，数字类型，超过 99 会显示 `99+`
onPress   | Function   | 点击事件回调函数
