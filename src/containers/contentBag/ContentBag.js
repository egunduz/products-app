import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./ContentBag.css"

/** this component helps uniforming content sections */
export default class ContentBag extends Component {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.element
    }

    render() {
        const {title, children} = this.props;
        return (
            <div id="ContentBag" className='contentBag'>
                {title && <div className="title">{title}</div>}
                <div className="body">{children}</div>
            </div>
        )
    }
}
