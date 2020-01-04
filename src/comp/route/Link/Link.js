import React from 'react';
import css from './Link.module.css';

class Link extends React.PureComponent {

    handleClick = ev => {
        window.history.pushState(null, '', this.props.to);// trigger 'pushState' event
    };

    render() {
        return (
            <span style={{...this.props.style}} className={css.link} onClick={this.handleClick}>
                {React.Children.map(this.props.children, child => child)}
            </span>
        );
    }

}

export default Link;