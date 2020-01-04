import React from 'react';
import css from './Head.module.css';
import avatar from "../../assets/head.png";
import items from "../../configs/itemConfig";
import Link from "../route/Link";

class Head extends React.PureComponent {
  state = {
    hoverItemIndex: '',
  };

  handleMouseOver = ev => {
    this.setState({
      hoverItemIndex: ev.target.closest('div').dataset.key,// ev.target.dataset.key is a string
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
      color: '#2e2e2e',
    };

    return (
        <div className={css.container}>
          <img className={css.avatar} src={avatar} alt=""/>
          <div className={css.items} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
            {items.map((item, index) => {
              return (
                  <div data-key={index} key={index} className={css.item}
                       style={parseInt(this.state.hoverItemIndex) === index ? hoverStyle : null}>
                    <Link to={`#/items/${item.hash}`}>{item.name}</Link>
                  </div>
              );
            })}
          </div>
        </div>
    );
  }
}

export default Head;
