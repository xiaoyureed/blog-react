import React, {lazy, Component, Suspense} from 'react';
import css from './MdxContent.module.css';

class MdxContent extends React.PureComponent {
  render() {
    return (
        <div className={css.container}>
          {React.Children.map(this.props.children, child => child)}
        </div>
    );
  }
}

export default MdxContent;