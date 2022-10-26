import { useContext } from 'react';
import { translate } from 'app/shared/layout/Translation/translate';
import { PreviewContext } from 'app/entities/content-v2/homepage-wrapper';

export const usePageTypes = () => {
  const { locale } = useContext(PreviewContext);
  return {
    HOME_PAGE: {
      icon: 'HOME_PAGE.png',
      path: 'home-page',
      translateKey: 'homepage',
      id: 1,
      sections: {
        MARKETING: {
          key: 'marketing',
          id: 1,
          steps: [
            {
              type: 'multi',
              subSteps: [
                {
                  contentKey: 'homepage.section1.text',
                  contentTextDefault: `${translate('home.homePage.header.title', null, null, locale)}`,
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section1.text1',
                  contentTextDefault: translate('home.homePage.header.subtitle', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
            {
              contentKey: 'homepage.section1.image',
              imagePath: '../../../../content/images/headerBg.png',
              type: 'image',
              key: 2,
            },
            {
              contentKey: 'homepage.section1.image1',
              imagePath: '../../../../content/images/winterBg.png',
              type: 'image',
              key: 3,
            },
          ],
        },
        MAINPART: {
          key: 'mainpart',
          id: 2,
          steps: [
            {
              contentKey: 'homepage.section2.image1',
              imagePath: '../../../../content/images/home/informationPart1.png',
              type: 'image',
              key: 0,
            },
            {
              contentKey: 'homepage.section2.text1',
              contentTextDefault: translate('home.homePage.informationPart.firstText', null, null, locale),
              type: 'editor',
              key: 1,
            },
            {
              contentKey: 'homepage.section2.image2',
              imagePath: '../../../../content/images/home/informationPart2.png',
              type: 'image',
              key: 2,
            },
            {
              contentKey: 'homepage.section2.text2',
              contentTextDefault: translate('home.homePage.informationPart.secondText', null, null, locale),
              type: 'editor',
              key: 3,
            },
            {
              contentKey: 'homepage.section2.image3',
              imagePath: '../../../../content/images/home/informationPart3.png',
              type: 'image',
              key: 4,
            },
            {
              contentKey: 'homepage.section2.text3',
              contentTextDefault: translate('home.homePage.informationPart.lastText', null, null, locale),
              type: 'editor',
              key: 5,
            },
            {
              contentKey: 'homepage.section3.image1',
              imagePath: '../../../../content/images/home/Mask Group (3).png',
              type: 'image',
              key: 6,
            },
            {
              contentKey: 'homepage.section3.image2',
              imagePath: '../../../../content/images/home/Mask Group (5).png',
              type: 'image',
              key: 7,
            },
            {
              contentKey: 'homepage.section3.image3',
              imagePath: '../../../../content/images/home/Mask Group (7).png',
              type: 'image',
              key: 8,
            },
            {
              contentKey: 'homepage.section3.image4',
              imagePath: '../../../../content/images/home/Mask Group (4).png',
              type: 'image',
              key: 9,
            },
            {
              contentKey: 'homepage.section3.image5',
              imagePath: '../../../../content/images/home/Mask Group (6).png',
              type: 'image',
              key: 10,
            },
            {
              contentKey: 'homepage.section3.image6',
              imagePath: '../../../../content/images/home/Mask Group (8).png',
              type: 'image',
              key: 11,
            },
            {
              type: 'multi',
              key: 'checkOffer',
              subSteps: [
                {
                  contentKey: 'homepage.section3.text1',
                  contentTextDefault: translate('home.homePage.offerPart.checkOffer.description', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section3.text5',
                  contentTextDefault: translate('home.homePage.offerPart.checkOffer.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section3.text6',
                  contentTextDefault: translate('home.homePage.offerPart.checkOffer.text', null, null, locale),
                  type: 'textarea',
                },
              ],
            },

            {
              type: 'multi',
              key: 'configHome',
              subSteps: [
                {
                  contentKey: 'homepage.section3.text2',
                  contentTextDefault: translate('home.homePage.offerPart.configHome.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section3.text7',
                  contentTextDefault: translate('home.homePage.offerPart.configHome.text', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
            {
              type: 'multi',
              key: 'email',
              subSteps: [
                {
                  contentKey: 'homepage.section3.text3',
                  contentTextDefault: translate('home.homePage.offerPart.email.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section3.text8',
                  contentTextDefault: translate('home.homePage.offerPart.email.text', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        FOOTER: {
          key: 'footer',
          id: 3,
          steps: [
            {
              contentKey: 'homepage.section4.text1',
              contentTextDefault: 'PRO ECO Modules Sp.z o.o.\n ul. Wojska Polskiego 7 lok.9\n11-010 Barczewo',
              type: 'editor',
            },
            {
              type: 'multi',
              key: 'documents',
              subSteps: [
                {
                  contentKey: 'homepage.section4.text2',
                  contentTextDefault: translate('footer.documents', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text3',
                  contentTextDefault: translate('footer.privacyPolicy', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text4',
                  contentTextDefault: translate('footer.termsOfService', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text5',
                  contentTextDefault: translate('footer.licenseAgreement', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
            {
              type: 'multi',
              key: 'importants',
              subSteps: [
                {
                  contentKey: 'homepage.section4.text6',
                  contentTextDefault: translate('footer.importantLinks', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text7',
                  contentTextDefault: translate('footer.privacyPolicy', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text8',
                  contentTextDefault: translate('footer.designServices', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text9',
                  contentTextDefault: translate('footer.smartHomes', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
            {
              type: 'multi',
              key: 'contacts',
              subSteps: [
                {
                  contentKey: 'homepage.section4.text10',
                  contentTextDefault: translate('footer.contact', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text11',
                  contentTextDefault: translate('footer.showHouses', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text12',
                  contentTextDefault: translate('footer.cooperation', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'homepage.section4.text13',
                  contentTextDefault: translate('footer.forMedia', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
          ],
        },
      },
    },
    SERVICE: {
      translateKey: 'services',
      icon: 'SERVICE.png',
      path: 'service',
      id: 2,
      sections: {
        ARCHITECTURAL_DESIGN: {
          key: 'ARCHITECTURAL_DESIGN',
          id: 1,
          steps: [
            {
              contentKey: 'services.section1.image',
              imagePath: 'content/images/service-page/image.png',
              type: 'image',
            },
            {
              type: 'multi',
              key: 'ARCHITECTURAL_DESIGN',
              subSteps: [
                {
                  contentKey: 'services.section1.text',
                  contentTextDefault: translate('home.services.card1.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'services.section1.text1',
                  contentTextDefault: translate('home.services.card1.subtitle', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        INTERIOR_DESIGN: {
          key: 'INTERIOR_DESIGN',
          id: 2,
          steps: [
            {
              type: 'multi',
              key: 'INTERIOR_DESIGN1',
              subSteps: [
                {
                  contentKey: 'services.section2.text',
                  contentTextDefault: translate('home.services.card2.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'services.section2.text1',
                  contentTextDefault: translate('home.services.card2.subtitle', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
            {
              type: 'multi',
              key: 'INTERIOR_DESIGN2',
              subSteps: [
                {
                  contentKey: 'services.section2.text2',
                  contentTextDefault: translate('home.services.card3.title', null, null, locale),

                  type: 'textarea',
                },
                {
                  contentKey: 'services.section2.text3',
                  contentTextDefault: translate('home.services.card3.subtitle', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
            {
              type: 'multi',
              key: 'INTERIOR_DESIGN3',
              subSteps: [
                {
                  contentKey: 'services.section2.text4',
                  contentTextDefault: translate('home.services.card4.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'services.section2.text5',
                  contentTextDefault: translate('home.services.card4.subtitle', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        SMART_HOUSE: {
          key: 'SMART_HOUSE',
          id: 3,
          steps: [
            {
              type: 'multi',
              key: 'INFORMATION',
              subSteps: [
                {
                  contentKey: 'services.section3.text',
                  contentTextDefault: translate('home.services.card5.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'services.section3.text1',
                  contentTextDefault: translate('home.services.card5.subtitle', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
            {
              contentKey: 'services.section3.image',
              imagePath: 'content/images/service-page/image.png',
              type: 'image',
            },
          ],
        },
      },
    },
    ABOUT_US: {
      translateKey: 'aboutUs',
      icon: 'ABOUT_US.png',
      path: 'about-us',
      id: 3,
      sections: {
        INFORMATION: {
          key: 'INFORMATION',
          id: 1,
          steps: [
            {
              type: 'multi',
              key: 'INFORMATION',
              subSteps: [
                {
                  contentKey: 'aboutUs.section1.text',
                  contentTextDefault: translate('home.aboutUs.sectionOne.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'aboutUs.section1.text1',
                  contentTextDefault: translate('home.aboutUs.sectionOne.text', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
            {
              contentKey: 'aboutUs.section1.image',
              imagePath: 'content/images/about-us/top.png',
              type: 'image',
            },
          ],
        },
        OURTEAM: {
          key: 'OURTEAM',
          id: 2,
          steps: [
            {
              contentKey: 'aboutUs.section2.image',
              type: 'image',
              imagePath: 'content/images/about-us/person1.png',
            },
            {
              contentKey: 'aboutUs.section2.image1',
              type: 'image',
              imagePath: 'content/images/about-us/person2.png',
            },
            {
              type: 'multi',
              key: 'OURTEAM',
              subSteps: [
                {
                  contentKey: 'aboutUs.section2.text',
                  contentTextDefault: translate('home.aboutUs.sectionTwo.title', null, null, locale),
                  type: 'textarea',
                },
                {
                  contentKey: 'aboutUs.section2.text1',
                  contentTextDefault: translate('home.aboutUs.sectionTwo.text', null, null, locale),
                  type: 'textarea',
                },
              ],
            },
          ],
        },
      },
    },
  };
};
