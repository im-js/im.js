/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 plusmancn, all rights
 * reserved.
 *
 * @flow
 *
 * ListItem 常用条目
 */

import ListItemHeader from './ListItemHeader.js';
import ListItemSeparator from './ListItemSeparator.js';
import ListItemLabel from './ListItemLabel.js';
import ListItemArrow from './ListItemArrow.js';

export default class ListItem {
    static Header = ListItemHeader;
    static Label = ListItemLabel;
    static Separator = ListItemSeparator;
    static Arrow = ListItemArrow;
}
