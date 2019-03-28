import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const HighLightItem = ({ key, className, highlightStr }) => (
  <span key={key} className={className}>
    {highlightStr}
  </span>
);
HighLightItem.propTypes = {
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  highlightStr: PropTypes.string,
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
}) => {
  let key = 0;
  const elementArr = [];
  if (keywords && keywords.length && keywords instanceof Array) {
    if (keywords.filter(highlightStr => highlightStr !== '').length === 0) {
      elementArr.push(
        <HighLightItem
          key={1}
          highlightStr={keywords}
          className={normalClassName}
        />,
      );
      return elementArr;
    }
    const regExp = new RegExp(
      `(${keywords
        .filter(highlightStr => highlightStr !== '')
        .map(highlightStr => processHighlightStr(`${highlightStr}`))
        .sort((strA, strB) => strB.length - strA.length)
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
          />,
        );
        key += 1;
      }
      const offset = offsetMatch.index;
      const matchText = offsetMatch[0];
      elementArr.push(
        <HighLightItem
          key={key}
          className={highlightClassName}
          highlightStr={matchText}
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
          />,
        );
      } else {
        elementArr.push(
          <HighLightItem
            key={key}
            className={normalClassName}
            highlightStr={str.substr(offset + matchText.length)}
          />,
        );
      }
      key += 1;
    });
  } else {
    // keywords is String
    const regExp = new RegExp(keywords, regExpOption);
    const strArr = str.split(regExp);
    strArr.forEach((item, index) => {
      elementArr.push(
        <HighLightItem
          key={key}
          className={normalClassName}
          highlightStr={item}
        />,
      );
      key += 1;
      if (index < strArr.length - 1) {
        elementArr.push(
          <HighLightItem
            key={key}
            className={highlightClassName}
            highlightStr={keywords}
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
  keywords: PropTypes.arrayOf(PropTypes.string),
  highlightClassName: PropTypes.string,
  normalClassName: PropTypes.string,
  regExpOption: PropTypes.string,
};
KeywordsHighlight.defaultProps = {
  str: '',
  keywords: [],
  highlightClassName: 'highlight-str',
  normalClassName: '',
  regExpOption: 'gi',
};
export default KeywordsHighlight;
