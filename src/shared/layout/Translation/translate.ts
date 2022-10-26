import React, { FC, useEffect, useState } from 'react';
import { get } from 'lodash';
import sanitizeHtml from 'sanitize-html';
import { ITranslateProps } from 'react-jhipster/lib/src/language/translate';
import { TranslatorContext } from 'react-jhipster';
import { useAppSelector } from 'app/config/store';

const REACT_ELEMENT = Symbol.for('react.element');
const isFlattenable = value => {
  const type = typeof value;
  return type === 'string' || type === 'number';
};
const flatten = array => {
  if (array.every(isFlattenable)) {
    return array.join('');
  }
  return array;
};
const toTemplate = string => {
  const expressionRe = /{{\s?\w+\s?}}/g;
  const match = string.match(expressionRe) || [];
  return [string.split(expressionRe)].concat(match);
};
const normalizeValue = (value, key) => {
  if (value == null || ['boolean', 'string', 'number'].includes(typeof value)) {
    return value;
  }
  if (value.$$typeof === REACT_ELEMENT) {
    return React.cloneElement(value, { key });
  }
};
/**
 * Adapted from https://github.com/bloodyowl/react-translate
 * licenced under The MIT License (MIT) Copyright (c) 2014 Matthias Le Brun
 */
const render = (string, values) => {
  if (!values || !string) {
    return string;
  }
  const _a = toTemplate(string);
  const parts = _a[0];
  const expressions = _a.slice(1);
  return flatten(
    parts.reduce((acc, item, index, array) => {
      if (index === array.length - 1) {
        return acc.concat([item]);
      }
      const match = expressions[index] && expressions[index].match(/{{\s?(\w+)\s?}}/);
      const value = match != null ? values[match[1]] : null;
      return acc.concat([item, normalizeValue(value, index)]);
    }, [])
  );
};
/**
 * A dirty find to split non standard keys and find data from json
 * @param obj json object
 * @param path path to find
 * @param placeholder is placeholder
 */
const deepFindDirty = (obj, path, placeholder) => {
  const paths = path.split('.');
  let current = obj;
  if (placeholder) {
    // dirty fix for placeholders, the json files needs to be corrected
    paths[paths.length - 2] = paths[paths.length - 2] + '.' + paths[paths.length - 1];
    paths.pop();
  }
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    }
    current = current[paths[i]];
  }
  return current;
};
const showMissingOrDefault = (key, children) => {
  const renderInnerTextForMissingKeys = TranslatorContext.context.renderInnerTextForMissingKeys;
  if (renderInnerTextForMissingKeys && children && ['string', 'object'].includes(typeof children)) {
    return children;
  }
  return /^error./.test(key)
    ? TranslatorContext.context.missingTranslationMsg + '[' + key + ']'
    : doTranslate('error.missingTranslation', { key }, undefined).content;
};

const doTranslate = (key, interpolate, children, locale = null) => {
  const translationData = TranslatorContext.context.translations;
  const currentLocale = locale ? locale : TranslatorContext.context.locale || TranslatorContext.context.defaultLocale;
  const data = translationData[currentLocale];
  // If there is no translation data, it means it hasn’t loaded yet, so return no content
  if (!Object.keys(translationData).length) {
    return {
      content: null,
    };
  }
  const preRender = data ? get(data, key) || deepFindDirty(data, key, true) : null;
  const preSanitize = render(preRender, interpolate) || showMissingOrDefault(key, children);
  if (/<[a-z][\s\S]*>/i.test(preSanitize)) {
    // String contains HTML tags. Allow only a super restricted set of tags and attributes
    const content = sanitizeHtml(preSanitize, {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'br', 'hr'],
      allowedAttributes: {
        a: ['href', 'target'],
      },
    });
    return {
      content,
      html: true,
    };
  }
  return {
    content: preSanitize,
    html: false,
  };
};

/**
 * Translates the given key using provided i18n values
 */
interface ITranslateExtendProps extends ITranslateProps {
  className?: string;
  onClick?: any;
}

const Translate: FC<ITranslateExtendProps> = ({
  contentKey,
  interpolate,
  children,
  className = '',
  component = 'span',
  onClick,
}: ITranslateExtendProps) => {
  const translations = useAppSelector(state => state.translateDictItem.dynamicTranslations);
  const [processed, setProcessed] = useState(doTranslate(contentKey, interpolate, children));

  useEffect(() => {
    const currentLocale = TranslatorContext.context.locale || TranslatorContext.context.defaultLocale;
    const prevLocale = TranslatorContext.context.previousLocale;
    if (currentLocale !== prevLocale) {
      setProcessed(doTranslate(contentKey, interpolate, children));
    }
  }, [
    TranslatorContext.context.locale,
    TranslatorContext.context.defaultLocale,
    TranslatorContext.context.previousLocale,
    translations,
    interpolate,
    contentKey,
  ]);

  if (processed.html) {
    return React.createElement(component, { dangerouslySetInnerHTML: { __html: processed.content, onClick }, className });
  } else {
    return React.createElement(component, className ? { className } : null, processed.content);
  }
};

export const translate = (
  contentKey: string,
  interpolate?: any,
  children?: string | JSX.Element | Array<string | JSX.Element>,
  locale = null
) => {
  const translation = doTranslate(contentKey, interpolate, children, locale);
  if (translation.html) {
    return React.createElement('span', { dangerouslySetInnerHTML: { __html: translation.content } });
  } else {
    return translation.content;
  }
};
export default Translate;
