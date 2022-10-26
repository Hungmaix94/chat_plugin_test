import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale from './locale';
import authentication from './authentication';
import applicationProfile from './application-profile';

import administration from 'app/modules/administration/administration.reducer';
import userManagement from 'app/modules/administration/user-management/user-management.reducer';
import arrangement from 'app/modules/administration/arrangement/arrangement.reducer';
import register from 'app/modules/account/register/register.reducer';
import activate from 'app/modules/account/activate/activate.reducer';
import password from 'app/modules/account/password/password.reducer';
import settings from 'app/modules/account/settings/settings.reducer';
import passwordReset from 'app/modules/account/password-reset/password-reset.reducer';
import translateDictItem from 'app/entities/translate-dict-item/translate-dict-item.reducer';
import language from 'app/entities/language/language.reducer';
import initPassword from 'app/modules/account/activate/init-password.reducer';
import materialType from 'app/entities/material-type/material-type.reducer';
import providerTransaction from 'app/modules/administration/arrangement/provider-transaction.reducer';

// prettier-ignore
import offerType from 'app/entities/offer-type/offer-type.reducer';
// prettier-ignore
import offerPriority from 'app/entities/offer-priority/offer-priority.reducer';
// prettier-ignore
import systemService from 'app/entities/system-service/system-service.reducer';
// prettier-ignore
import offer from 'app/entities/offer/offer.reducer';
// prettier-ignore
import service from 'app/entities/service/service.reducer';
// prettier-ignore
import promotion from 'app/entities/promotion/promotion.reducer';
// prettier-ignore
import content from 'app/entities/content-v2/content.reducer';
// prettier-ignore
import pageType from 'app/entities/page-type/page-type.reducer';
// prettier-ignore
import contentType from 'app/entities/content-type/content-type.reducer';
// prettier-ignore
import preferredContactType from 'app/entities/preferred-contact-type/preferred-contact-type.reducer';
// prettier-ignore
import contactFormStatus from 'app/entities/contact-form-status/contact-form-status.reducer';
// prettier-ignore
import contactForm from 'app/entities/contact-form/contact-form.reducer';
// prettier-ignore
import unitType from 'app/entities/unit-type/unit-type.reducer';
// prettier-ignore
import project from 'app/entities/project/project.reducer';
// prettier-ignore
import projectSeason from 'app/entities/project-season/project-season.reducer';
// prettier-ignore
import projectType from 'app/entities/project-type/project-type.reducer';
// prettier-ignore
import section from 'app/entities/section/section.reducer';
// prettier-ignore
import sectionType from 'app/entities/section-type/section-type.reducer';
// prettier-ignore
import subsection from 'app/entities/subsection/subsection.reducer';
// prettier-ignore
import subsectionType from 'app/entities/subsection-type/subsection-type.reducer';
// prettier-ignore
import component from 'app/entities/components/component.reducer';
// prettier-ignore
import componentType from 'app/entities/component-type/component-type.reducer';
// prettier-ignore
import equipment from 'app/entities/equipment/equipment.reducer';
// prettier-ignore
import equipmentType from 'app/entities/equipment-type/equipment-type.reducer';
// prettier-ignore
import arrangementType from 'app/entities/arrangement-type/arrangement-type.reducer';
// prettier-ignore
import arrangementDetail from 'app/entities/arrangement-details/arrangement-detail.reducer';
// prettier-ignore
import componentProperty from 'app/entities/component-property/component-property.reducer';
// prettier-ignore
import componentPropertyType from 'app/entities/component-property-type/component-property-type.reducer';
// prettier-ignore
import componentPropertyOption from 'app/entities/component-property-option/component-property-option.reducer';
// prettier-ignore
import componentPropertyOptionType
  from 'app/entities/component-property-option-type/component-property-option-type.reducer';
// prettier-ignore
import equipmentProperty from 'app/entities/equipment-property/equipment-property.reducer';
// prettier-ignore
import equipmentPropertyType from 'app/entities/equipment-property-type/equipment-property-type.reducer';
// prettier-ignore
import equipmentPropertyOption from 'app/entities/equipment-property-option/equipment-property-option.reducer';
// prettier-ignore
import equipmentPropertyOptionType
  from 'app/entities/equipment-property-option-type/equipment-property-option-type.reducer';
import country from 'app/entities/country/country.reducer';
// prettier-ignore
import order from 'app/entities/order/order.reducer';
// prettier-ignore
import orderStatusType from 'app/entities/order-status-type/order-status-type.reducer';
// prettier-ignore
import globalParam from 'app/entities/global-param/global-param.reducer';
import vatType from 'app/entities/vat-type/vat-type.reducer';
import invoice from 'app/entities/invoice/invoice.reducer';
// prettier-ignore
import priceType from 'app/entities/price-type/price-type.reducer';
import vat from 'app/entities/vat/vat.reducer';
// prettier-ignore
import propertyOptionTypePrice from 'app/entities/property-option-type-price/property-option-type-price.reducer';
import objectConstructionType from 'app/entities/object-construction-type/object-construction-type.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const rootReducer = {
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  translateDictItem,
  language,
  offerType,
  offerPriority,
  systemService,
  offer,
  service,
  promotion,
  content,
  pageType,
  contentType,
  preferredContactType,
  contactFormStatus,
  contactForm,
  project,
  projectSeason,
  projectType,
  section,
  sectionType,
  subsection,
  subsectionType,
  component,
  componentType,
  equipment,
  equipmentType,
  materialType,
  unitType,
  arrangement,
  arrangementType,
  arrangementDetail,
  componentProperty,
  componentPropertyType,
  componentPropertyOption,
  componentPropertyOptionType,
  equipmentProperty,
  equipmentPropertyType,
  equipmentPropertyOption,
  equipmentPropertyOptionType,
  country,
  order,
  providerTransaction,
  orderStatusType,
  globalParam,
  priceType,
  propertyOptionTypePrice,
  objectConstructionType,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  initPassword,
  invoice,
  vatType,
  vat,
  loadingBar,
};

export default rootReducer;
