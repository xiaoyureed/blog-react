import HelloComp from './Hello';

# Hello, world!

## 诞生记录

👉 俺原来的博客地址在这里 [XiaoYu's Blog](https://xiaoyureed.github.io)

👉 这个博客使用 create-react-app + mdx 完成, 主要是为了 react 练练手 (手里有锤子, 就想到处找钉子 😂)

👉 记录实现过程如下:

页面的布局是怎么简单怎么来, 就分了两大块, 用到了 [Flex 布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

其次是 markdown 到 页面的渲染, 有很多不错的类库 像 [showdownjs](https://github.com/showdownjs/showdown), [remarkable](https://github.com/jonschlinkert/remarkable), [markdown-toc](https://github.com/jonschlinkert/markdown-toc), [markdown-it](https://github.com/markdown-it/markdown-it), [MDX](https://mdxjs.com/), 都可以选用, 由于看重 mdx 可以在 md 中插入 react 组件的特性, 最终选择了 [mdx](https://github.com/frontarm/create-react-blog)

在整合 create-react-app 和 mdx 时碰到问题, 参考 https://frontarm.com/james-k-nelson/mdx-with-create-react-app/

试试插入 react component:

编写组件 HelloComp.js

```
import React from 'react';

const HelloComp = () => (
    <div style={{
      color: 'red',
    }}>hello comp</div>
);

export default HelloComp;
```

在 md 中使用

```
import HelloComp from './HelloComp';

...
....

<HelloComp/>
```

呈现效果如下👇👇👇

<HelloComp/>

## Tips

```
# 本地预览调试
yarn start

# 新建文章: mdx 目录下
# 完成后, 需要在 mdx/index.js 中导入

# 部署 (真实代码即主分支无需commit也可部署)
yarn deploy

```

gh-pages 包怎么使用?

```
# 安装
yarn add --dev gh-pages

# 在 package.json 中配置 访问url (即 homepage 字段)
# 添加 npm scripts
# "predeploy": "yarn build"
# "deploy": "gh-pages -d build",

```

