/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 Souche.com, all rights
 * reserved.
 *
 * TabBarItem
 */

import React, {
    Component,
    PropTypes
} from 'react';

export default class TabBarItem extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        tintColor: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        tintIcon: PropTypes.string.isRequired,
        selected: PropTypes.bool,
        badge: PropTypes.number,
        onPress: PropTypes.func
    }

    static defaultProps = {
        selected: false
    }

    render() {
        return React.Children.only(this.props.children);
    }
}
