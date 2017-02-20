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
            this.setNavigation({
                title: '首页'
            });
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

Field       | Description
:-----------|:---------------------------------
activeIndex | 初始化视图在第几个 Tab，从 0 开始

**TabBar.Item**

Field     | Description
:---------|:----------------------------------------
title     | 底部标题
color     | 未选中状态下的标题颜色
tintColor | 选中状态下的标题颜色
icon      | 为选中状态下的 icon 图片
tintIcon  | 选中状态下的 icon 图片
badge     | 角标计数，数字类型，超过 99 会显示 `99+`
onPress   | 点击事件回调函数
