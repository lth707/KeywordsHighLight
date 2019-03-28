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
    str="321字符串 stringObject 的 replace() 方法执行的是查找并替换的操作。它将在 stringObject 中查找与 regexp 相匹配的子字符串，然后用 replacement 来替换这些子串。如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义。如下表所示，它说明从模式匹配得到的字符串将用于替换。123"
    keywords={[
      /stringObject/,
      '替换',
      ['查找', text => <span style={{ color: 'yellow' }}>{text}</span>],
      [/replacement|匹配/, text => <span style={{ color: 'gray' }}>{text}</span>],
      ['regexp', 'green'],
      ['$', { fontWeight: 700, color: 'red' }],
      [/\d+/, 'orange'],
    ]}
  />,
  document.getElementById('app'),
);
```

# params

```jsx
 * str:为输入文本
 * keywords:是一个数组，数组元素可以是如下4种类型
    1 string|RegExp：要高亮的关键字或正则表达式。
    2 [string|RegExp,string]:第一个元素为要高亮的关键字或正则表达式，第二个元素为高亮颜色。
    3 [string|RegExp,object]:第一个元素为要高亮的关键字或正则表达式，第二个元素为高亮元素的style。
    3 [string|RegExp,fun]:第一个元素为要高亮的关键字或正则表达式，第二个元素高亮元素的render函数。
 * highlightClassName:高亮元素的全局类名。
 * normalClassName: 不高亮元素的全局类名。
 * highlightColor: 高亮元素的全局颜色。
 * normalColor: 不高亮元素的全局颜色。
 * regExpOption: 正则表达式的flags,默认gi。
 > 注意：RegExp不支持flags参数。
```

# run effect

![run effect](https://github.com/lth707/KeywordsHighLight/blob/master/%E8%BF%90%E8%A1%8C%E6%95%88%E6%9E%9C.png)
