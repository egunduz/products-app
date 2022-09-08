import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './CoreLayout.css';

/**
 * This is the outher container holding sub pages
 * It imports necessary css libs and will define some constatns in the future time
 */
export default class CoreLayout extends Component {
    static propTypes = {
        id: PropTypes.string,
        children: PropTypes.element
    }

    render() {
        return (
            <section className = "coreLayout" id={this.props.id || "CoreLayout"}>
                {this.props.children}
            </section>
        )
    }
}
