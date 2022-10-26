import React, { useContext, useEffect, useMemo } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useDispatch } from 'react-redux';
import Translate from 'app/shared/layout/Translation/translate';
import { isEmpty } from 'lodash';
import { getEntities as getLanguages } from 'app/entities/language/language.reducer';
import { useAppSelector } from 'app/config/store';
import { defaultPagination } from 'app/shared/util/pagination.constants';
import { setLocale as changeLocale } from 'app/shared/reducers/locale';
import { Storage } from 'react-jhipster';
import './LocaleMenu.scss';
import { PreviewContext } from 'app/entities/content-v2/homepage-wrapper';

export const LocaleMenu: React.FC = () => {
  const dispatch = useDispatch();
  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const languages = useAppSelector(state => state.language.entities);
  const language = useMemo(() => languages.find(lang => lang.enumKey === currentLocale), [languages, currentLocale]);
  const isLoading = useMemo(() => isEmpty(language), [language]);

  const composeLocaleChangeHandler = langKey => () => {
    dispatch(changeLocale(langKey));
    Storage.session.set('currentLocale', langKey);
  };

  useEffect(() => {
    if (isEmpty(languages)) {
      dispatch(getLanguages(defaultPagination));
    }
  }, [languages]);

  return isLoading ? (
    <div className="loading no-fixed" />
  ) : (
    <UncontrolledDropdown className="ml-2">
      <DropdownToggle size="sm" id="menu-language-button" className="btn-language">
        {language ? <Translate contentKey={`dynamic.dict_languages.${language.enumKey}.itemTranslation`} /> : undefined}
      </DropdownToggle>
      <DropdownMenu right className="item-menu-dropdown">
        {languages.map(lang => (
          <DropdownItem
            id={`menu-language-${lang.enumKey}-button`}
            key={lang.enumKey}
            value={lang.enumKey}
            onClick={composeLocaleChangeHandler(lang.enumKey)}
          >
            <Translate contentKey={`dynamic.dict_languages.${lang.enumKey}.itemTranslation`} />
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export const LocaleContentMenu: React.FC = () => {
  const dispatch = useDispatch();
  const { locale: currentLocale, setLocale } = useContext(PreviewContext);
  const languages = useAppSelector(state => state.language.entities);
  const language = useMemo(() => languages.find(lang => lang.enumKey === currentLocale), [languages, currentLocale]);
  const isLoading = useMemo(() => isEmpty(language), [language]);

  const composeLocaleChangeHandler = langKey => () => {
    setLocale(langKey);
  };

  useEffect(() => {
    if (isEmpty(languages)) {
      dispatch(getLanguages(defaultPagination));
    }
  }, [languages]);

  return isLoading ? (
    <div className="loading no-fixed" />
  ) : (
    <UncontrolledDropdown className="ml-2">
      <DropdownToggle size="sm" id="menu-language-button" className="btn-language">
        {language ? <Translate contentKey={`dynamic.dict_languages.${language.enumKey}.itemTranslation`} /> : undefined}
      </DropdownToggle>
      <DropdownMenu right className="item-menu-dropdown">
        {languages.map(lang => (
          <DropdownItem
            id={`menu-language-${lang.enumKey}-button`}
            key={lang.enumKey}
            value={lang.enumKey}
            onClick={composeLocaleChangeHandler(lang.enumKey)}
          >
            <Translate contentKey={`dynamic.dict_languages.${lang.enumKey}.itemTranslation`} />
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default LocaleMenu;
