import React from 'react';
import PropTypes from 'prop-types';

const HighLightItem = ({
  key, className, highlightStr, color,
}) => {
  let realColor = color;
  let style = {};
  let render = null;
  let text = highlightStr;
  if (highlightStr instanceof Array) {
    if (typeof highlightStr[1] === 'string') [, realColor] = highlightStr;
    else if (typeof highlightStr[1] === 'object') {
      style = highlightStr[1] || {};
    } else if (typeof highlightStr[1] === 'function') {
      [, render] = highlightStr;
    }
    [text] = highlightStr;
  }
  return (
    <span
      key={key}
      className={className}
      style={{
        color: realColor,
        ...style,
      }}
    >
      {render ? render(text) : text}
    </span>
  );
};
HighLightItem.propTypes = {
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  highlightStr: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([
      PropTypes.string,
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.shape({}),
      ]),
    ]),
  ]),
  color: PropTypes.string,
};

const processHighlightStr = (str = '') => {
  const keyWordsReg = new RegExp(
    [
      '(\\$)',
      '(\\()',
      '(\\))',
      '(\\*)',
      '(\\+)',
      '(\\.)',
      '(\\[)',
      '(\\])',
      '(\\?)',
      '(\\\\)',
      '(\\^)',
      '(\\{)',
      '(\\})',
      '(\\|)',
    ].join('|'),
    'g',
  );
  return str.replace(keyWordsReg, match => `\\${match}`);
};
const KeywordsHighlight = ({
  str,
  keywords,
  highlightClassName,
  normalClassName,
  regExpOption,
  highlightColor,
  normalColor,
}) => {
  let key = 0;
  const elementArr = [];
  let newKeywords = keywords;
  if (keywords instanceof Array) {
    newKeywords = keywords
      .filter(
        keyword => keyword instanceof RegExp || keyword[0] instanceof RegExp,
      )
      .map(keyword => {
        let reg = null;
        if (keyword instanceof RegExp) {
          reg = keyword;
          return str.match(reg).filter(m => !!m) || [];
        }
        [reg] = keyword;
        return (
          str
            .match(reg)
            .filter(m => !!m)
            .map(m => [m].concat([keyword[1]])) || []
        );
      })
      .flat()
      .concat(
        keywords.filter(keyword => {
          if (keyword instanceof Array && keyword.length === 2) {
            return !!keyword[0];
          }
          if (typeof keyword === 'string') {
            return !!keyword;
          }
          return false;
        }),
      );
  }
  if (newKeywords instanceof Array) {
    if (newKeywords.length === 0) {
      elementArr.push(
        <HighLightItem
          key={1}
          highlightStr={str}
          className={normalClassName}
          color={normalColor}
        />,
      );
      return elementArr;
    }
    const regExp = new RegExp(
      `(${newKeywords
        .map(highlightStr => processHighlightStr(
          highlightStr instanceof Array
            ? `${highlightStr[0]}`
            : `${highlightStr}`,
        ))
        .sort(
          (strA, strB) => (strB instanceof Array ? strB[0].length : strB.length)
            - (strA instanceof Array ? strA[0].length : strA.length),
        )
        .join('|')})`,
      regExpOption,
    );
    const offsetMatches = [];
    let match = regExp.exec(str);
    while (match) {
      offsetMatches.push(match);
      match = regExp.exec(str);
    }
    offsetMatches.forEach((offsetMatch, index) => {
      if (index === 0) {
        elementArr.push(
          <HighLightItem
            key={key}
            className={normalClassName}
            highlightStr={str.substring(0, offsetMatch.index)}
            color={normalColor}
          />,
        );
        key += 1;
      }
      const offset = offsetMatch.index;
      const matchText = offsetMatch[0];
      const keywordItem = newKeywords.find(
        keyItem => keyItem === matchText || keyItem[0] === matchText,
      );
      elementArr.push(
        <HighLightItem
          key={key}
          className={highlightClassName}
          highlightStr={keywordItem}
          color={highlightColor}
        />,
      );
      key += 1;
      if (index < offsetMatches.length - 1) {
        const nextOffset = offsetMatches[index + 1].index;
        elementArr.push(
          <HighLightItem
            key={key}
            className={normalClassName}
            highlightStr={str.substring(offset + matchText.length, nextOffset)}
            color={normalColor}
          />,
        );
      } else {
        elementArr.push(
          <HighLightItem
            key={key}
            className={normalClassName}
            highlightStr={str.substr(offset + matchText.length)}
            color={normalColor}
          />,
        );
      }
      key += 1;
    });
  } else {
    // keywords is String
    if (!keywords) {
      return (
        <HighLightItem
          key={1}
          className={normalClassName}
          highlightStr={str}
          color={normalColor}
        />
      );
    }
    const regExp = new RegExp(keywords, regExpOption);
    const strArr = str.split(regExp);
    strArr.forEach((item, index) => {
      elementArr.push(
        <HighLightItem
          key={key}
          className={normalClassName}
          highlightStr={item}
          color={normalColor}
        />,
      );
      key += 1;
      if (index < strArr.length - 1) {
        elementArr.push(
          <HighLightItem
            key={key}
            className={highlightClassName}
            highlightStr={keywords}
            color={highlightColor}
          />,
        );
        key += 1;
      }
    });
  }
  return elementArr;
};

KeywordsHighlight.propTypes = {
  str: PropTypes.string,
  keywords: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
      PropTypes.arrayOf([
        PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func,
          PropTypes.shape({}),
        ]),
      ]),
    ]),
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
export default KeywordsHighlight;
