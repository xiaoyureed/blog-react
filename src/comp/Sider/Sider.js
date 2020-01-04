import React from 'react';
import css from './Sider.module.css';
import avatar from '../../assets/avatar.jpeg';
import items from "../../configs/itemConfig";

class Sider extends React.Component {
  state = {
      hoverItemIndex: '',
  };

  handleMouseOver = ev => {
      this.setState({
          hoverItemIndex: ev.target.dataset.key,// ev.target.dataset.key is a string
      })
  };

  handleMouseOut = ev => {
      this.setState({
          hoverItemIndex: '',
      })
  };

  render() {
    const hoverStyle = {
      backgroundColor: 'white',
    };

    return (
        <div className={css.container}>
          <div className={css.head}>
              <img className={css.avatar} src={avatar} alt=""/>
          </div>
          <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
              {items.map((item, index) => {
                  return (
                      <div data-key={index} key={index} className={css.item}
                           style={parseInt(this.state.hoverItemIndex) === index ? hoverStyle : null}>
                          {item}
                      </div>
                  );
              })}
          </div>
        </div>
    );
  }
}

export default Sider;
