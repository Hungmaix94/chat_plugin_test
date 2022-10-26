import './footer.scss';

import React, { useContext } from 'react';
import { useAppSelector } from 'app/config/store';
import { Link } from 'react-router-dom';
import { PreviewContext, selectorValue } from 'app/entities/content-v2/homepage-wrapper';
import { translate } from 'app/shared/layout/Translation/translate';

const Footer = () => {
  const { isPreview, currentStep, locale, onChangeStep } = useContext(PreviewContext);

  const homepageData = useAppSelector(state => state.content.homepage);
  const contentData = useAppSelector(state => state.content.entities);

  const text1 = selectorValue(
    homepageData,
    contentData,
    'homepage.section4.text1',
    'PRO ECO Modules Sp.z o.o.\n ul. Wojska Polskiego 7 lok.9\n11-010 Barczewo'
  );
  const text2 = selectorValue(homepageData, contentData, 'homepage.section4.text2', translate('footer.documents', null, null, locale));
  const text3 = selectorValue(homepageData, contentData, 'homepage.section4.text3', translate('footer.privacyPolicy', null, null, locale));
  const text4 = selectorValue(homepageData, contentData, 'homepage.section4.text4', translate('footer.termsOfService', null, null, locale));
  const text5 = selectorValue(
    homepageData,
    contentData,
    'homepage.section4.text5',
    translate('footer.licenseAgreement', null, null, locale)
  );
  const text6 = selectorValue(homepageData, contentData, 'homepage.section4.text6', translate('footer.importantLinks', null, null, locale));
  const text7 = selectorValue(homepageData, contentData, 'homepage.section4.text7', translate('footer.privacyPolicy', null, null, locale));
  const text8 = selectorValue(homepageData, contentData, 'homepage.section4.text8', translate('footer.designServices', null, null, locale));
  const text9 = selectorValue(homepageData, contentData, 'homepage.section4.text9', translate('footer.smartHomes', null, null, locale));
  const text10 = selectorValue(homepageData, contentData, 'homepage.section4.text10', translate('footer.contact', null, null, locale));
  const text11 = selectorValue(homepageData, contentData, 'homepage.section4.text11', translate('footer.showHouses', null, null, locale));
  const text12 = selectorValue(homepageData, contentData, 'homepage.section4.text12', translate('footer.cooperation', null, null, locale));
  const text13 = selectorValue(homepageData, contentData, 'homepage.section4.text13', translate('footer.forMedia', null, null, locale));

  return (
    <div className={`footer ${isPreview ? 'preview' : ''}`}>
      <div>
        <div className="address">
          <img alt="logo-light" src="../../../../content/images/logo_light.png" />
          <div className={`${isPreview && currentStep === 0 ? 'current-editor' : ''}`} onClick={onChangeStep(0)}>
            {text1}
          </div>
        </div>
        <div className={`${isPreview && currentStep === 1 ? 'current-editor' : ''}`} onClick={onChangeStep(1)}>
          <div className="link-header">{text2}</div>
          <Link to={`/`}>{text3} </Link>
          <Link to={`/`}>{text4} </Link>
          <Link to={`/`}>{text5} </Link>
        </div>
        <div className={`${isPreview && currentStep === 2 ? 'current-editor' : ''}`} onClick={onChangeStep(2)}>
          <div className="link-header">{text6}</div>
          <Link to={`/`}>{text7} </Link>
          <Link to={`/`}>{text8} </Link>
          <Link to={`/`}>{text9} </Link>
        </div>
        <div className={`${isPreview && currentStep === 3 ? 'current-editor' : ''}`} onClick={onChangeStep(3)}>
          <div className="link-header">{text10}</div>
          <Link to={`/`}>{text11} </Link>
          <Link to={`/`}>{text12} </Link>
          <Link to={`/`}>{text13} </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
