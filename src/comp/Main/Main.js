import React from 'react';
import css from './Main.module.css';
import toc from 'markdown-toc'
import namePathMapping from '../../assets/md'
import Link from "../route/Link";
import Header from "../Head";
import MdxContent from "../MdxContent";
import articleRouteMap from "../../assets/mdx";
import About from '../items/About';
import Book from '../items/Book';
import Movie from '../items/Movie/Movie';
import Music from '../items/Music';
import Tool from '../items/Tool';

// ref: https://www.jianshu.com/p/91c360d96e44
// then 里面返回 Promise, 会等到Promise 里的动作执行完才进入下一个then
namePathMapping.map(md => fetch(md.name).then(resp => resp.text()).then(text => {
  let result = {
    name: md.name,
    mdContent: text,
  };
  // console.log(result)
  return result;
}));

class Main extends React.PureComponent {
  state = {
    hash: window.location.hash,
  };

  componentDidMount() {
    // 注册 pushState 处理器
    window.addEventListener('pushState', () => {
      this.setState({
        hash: window.location.hash,
      });
    });
    // 注册 navigation 处理器
    window.addEventListener('popstate', () => {
      this.setState({
        hash: window.location.hash,
      });
    });
  }

  render() {
    // Current content, default to article catalog
    let Current = () => (
        <div className={css.table}>
          {Object.keys(articleRouteMap).map((name, index) => (
              <div key={index} className={css.item}>
                <Link to={`#/mds/${name}`}>
                  {name}
                </Link>
              </div>
          ))}
        </div>
    );

    let hash = this.state.hash;
    let articleHash = hash.replace(/#\/mds\//g, target => '');
    if (articleHash !== '') {
      const Article = articleRouteMap[articleHash];
      Current = () => (
          <MdxContent>
            <Article/>
          </MdxContent>
      );
    }
    let itemHash = hash.replace(/#\/items\//g, target => '');
    if (itemHash === 'me') {
      Current = About;
    } else if (itemHash === 'books') {
      Current = Book;
    } else if (itemHash === 'movies') {
      Current = Movie;
    } else if (itemHash === 'musics') {
      Current = Music;
    } else if (itemHash === 'tools') {
      Current = Tool;
    }

    return (
        <div className={css.main}>
          <Header />
          <Current/>
        </div>
    );
  }
}

export default Main;
