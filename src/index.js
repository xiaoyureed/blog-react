import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Sider from "./comp/Sider";
import Main from "./comp/Main";

const App = () => {
  return (
      <div className="app">
        {/*<Sider/>*/}
        <Main/>
      </div>
  );
};

// let readMarkdownPromise = new Promise(((resolve, reject) => {
//
// }));
// readMarkdownPromise.then()

// 自定义 pushState/replaceState
// ref: https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate
(function () {
  let _wr = function (type) {
    let orig = window.history[type];
    return function () {
      let rv = orig.apply(this, arguments);
      let e = new Event(type);
      e.arguments = arguments;
      window.dispatchEvent(e);
      return rv;
    };
  };

  window.history.pushState = _wr('pushState');
  window.history.replaceState = _wr('replaceState');
})();

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
