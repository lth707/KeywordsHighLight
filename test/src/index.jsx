import React from 'react';
import { render } from 'react-dom';
import KeywordsHighlight from 'KeywordsHighlight';


// 加载组件到 DOM 元素 mountNode
render(
  <KeywordsHighlight
    str="字符串 stringObject 的 replace() 方法执行的是查找并替换的操作。它将在 stringObject 中查找与 regexp 相匹配的子字符串，然后用 replacement 来替换这些子串。如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义。如下表所示，它说明从模式匹配得到的字符串将用于替换。"
    keywords={['stringObject', '替换', 'regexp']}
  />,
  document.getElementById('app'),
);
