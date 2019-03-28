# KeywordsHighLight

> 多关键字高亮的 react 组件，正则关键字也能高亮

# How To Use

npm install -S keywordhighlight

```jsx
import React from 'react';
import { render } from 'react-dom';
import KeywordsHighlight from 'keywordhighlight';

render(
  <KeywordsHighlight
    str="字符串 stringObject 的 replace() 方法执行的是查找并替换的操作。它将在 stringObject 中查找与 regexp 相匹配的子字符串，然后用 replacement 来替换这些子串。如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义。如下表所示，它说明从模式匹配得到的字符串将用于替换。"
    keywords={[
      'stringObject',
      '替换',
      {
        keyword: '查找',
        style: { fontWeight: 700 },
        render: (text, item) => (
          <span style={{ ...item.style, color: 'yellow' }}>{text}</span>
        ),
      },
      { keyword: 'regexp' },
      { keyword: '$', highlightColor: 'red', style: { fontWeight: 700 } },
    ]}
  />,
  document.getElementById('app')
);
```

# params

```jsx
KeywordsHighlight.propTypes = {
  str: PropTypes.string,
  keywords: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          keyword: PropTypes.string,
          highlightColor: PropTypes.string,
          style: PropTypes.shape({}),
          className: PropTypes.string,
          render: PropTypes.func,
        })
      ),
    ])
  ),
  highlightClassName: PropTypes.string,
  normalClassName: PropTypes.string,
  regExpOption: PropTypes.string,
  highlightColor: PropTypes.string,
  normalColor: PropTypes.string,
};
KeywordsHighlight.defaultProps = {
  str: '',
  keywords: [],
  highlightClassName: '',
  normalClassName: '',
  regExpOption: 'gi',
  highlightColor: '#00c1de',
};
```

# run effect

![run effect](https://github.com/lth707/KeywordsHighLight/blob/master/%E8%BF%90%E8%A1%8C%E6%95%88%E6%9E%9C.png)
