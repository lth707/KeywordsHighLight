import React from 'react';
import PropTypes from 'prop-types';

const HighLightItem = ({
  key, className, highlightStr, color,
}) => (
  <span
    key={key}
    className={className}
    style={{
      color: highlightStr.highlightColor || color,
      ...(highlightStr.style || {}),
    }}
  >
    {typeof highlightStr.render === 'function'
      ? highlightStr.render()
      : highlightStr.keyword || highlightStr}
  </span>
);
HighLightItem.propTypes = {
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  highlightStr: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        keyword: PropTypes.string,
        highlightColor: PropTypes.string,
        style: PropTypes.shape({}),
        className: PropTypes.string,
      }),
    ),
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
  const newKeywords = keywords instanceof Array
    ? keywords.filter(highlightStr => {
      if (highlightStr && typeof highlightStr === 'object') {
        return !!highlightStr.keyword;
      }
      if (typeof highlightStr === 'string') {
        return !!highlightStr;
      }
      return false;
    })
    : keywords;
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
          typeof highlightStr === 'object'
            ? `${highlightStr.keyword}`
            : `${highlightStr}`,
        ))
        .sort(
          (strA, strB) => (typeof strB === 'object' ? strB.keyword.length : strB.length)
            - (typeof strA === 'object' ? strA.keyword.length : strA.length),
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
        keyItem => keyItem.keyword === matchText || keyItem === matchText,
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
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          keyword: PropTypes.string,
          highlightColor: PropTypes.string,
          style: PropTypes.shape({}),
          className: PropTypes.string,
          render: PropTypes.func,
        }),
      ),
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
