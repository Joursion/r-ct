/**
 * Created by m on 16-4-1.
 */
'use strict';

import React, { Component, ProTypes } from 'react';

export default class Avatar extends Component {
    render() {
        let { width, height, src, style } = this.props;
        return (
            <img style = { Object.assign({
                width,
                height
            },style)} src = { src } />
        )
    }
}