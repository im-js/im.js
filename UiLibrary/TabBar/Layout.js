/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 Souche.com, all rights
 * reserved.
 *
 *
 * 尺寸配置
 */

import {
     Platform
} from 'react-native';

export default {
    tabBarHeight: Platform.OS === 'ios' ? 49 : 55
};
