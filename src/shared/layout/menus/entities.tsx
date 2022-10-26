import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-component';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="asterisk" to="/organization-structure-type">
      <Translate contentKey="global.menu.entities.organizationStructureType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/med-facility-type">
      <Translate contentKey="global.menu.entities.medFacilityType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/role">
      <Translate contentKey="global.menu.entities.role" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/country">
      <Translate contentKey="global.menu.entities.country" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/organization-structure">
      <Translate contentKey="global.menu.entities.organizationStructure" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/customer">
      <Translate contentKey="global.menu.entities.customer" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/department-address">
      <Translate contentKey="global.menu.entities.departmentAddress" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/medical-equipment-type">
      <Translate contentKey="global.menu.entities.medicalEquipmentType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/medical-equipment-attribute-type">
      <Translate contentKey="global.menu.entities.medicalEquipmentAttributeType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/medical-equipment-sort-type">
      <Translate contentKey="global.menu.entities.medicalEquipmentSortType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/medical-equipment-status-type">
      <Translate contentKey="global.menu.entities.medicalEquipmentStatusType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/device-version-type">
      <Translate contentKey="global.menu.entities.deviceVersionType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/device-status-type">
      <Translate contentKey="global.menu.entities.deviceStatusType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/medical-equipment">
      <Translate contentKey="global.menu.entities.medicalEquipment" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/sensor">
      <Translate contentKey="global.menu.entities.sensor" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/beacon">
      <Translate contentKey="global.menu.entities.beacon" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/device-alert-param">
      <Translate contentKey="global.menu.entities.deviceAlertParam" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/alert-type">
      <Translate contentKey="global.menu.entities.alertType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/device-raw-data">
      <Translate contentKey="global.menu.entities.deviceRawData" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/device-alert-detected">
      <Translate contentKey="global.menu.entities.deviceAlertDetected" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/contact-form">
      <Translate contentKey="global.menu.entities.contactForm" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/contact-form-type">
      <Translate contentKey="global.menu.entities.contactFormType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/contact-form-status">
      <Translate contentKey="global.menu.entities.contactFormStatus" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/patient-status">
      <Translate contentKey="global.menu.entities.patientStatus" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/patient-type">
      <Translate contentKey="global.menu.entities.patientType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/patient-details">
      <Translate contentKey="global.menu.entities.patientDetail" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/inventory-report">
      <Translate contentKey="global.menu.entities.inventoryReport" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/offer-type">
      <Translate contentKey="global.menu.entities.offerType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/offer-priority">
      <Translate contentKey="global.menu.entities.offerPriority" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/system-service">
      <Translate contentKey="global.menu.entities.systemService" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/offer">
      <Translate contentKey="global.menu.entities.offer" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/service">
      <Translate contentKey="global.menu.entities.service" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/promotion">
      <Translate contentKey="global.menu.entities.promotion" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/content">
      <Translate contentKey="global.menu.entities.content" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/page-type">
      <Translate contentKey="global.menu.entities.pageType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/content-type">
      <Translate contentKey="global.menu.entities.contentType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/preferred-contact-type">
      <Translate contentKey="global.menu.entities.preferredContactType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/unit-type">
      <Translate contentKey="global.menu.entities.unitType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/project">
      <Translate contentKey="global.menu.entities.project" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/project-season">
      <Translate contentKey="global.menu.entities.projectSeason" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/project-type">
      <Translate contentKey="global.menu.entities.projectType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/section">
      <Translate contentKey="global.menu.entities.section" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/section-type">
      <Translate contentKey="global.menu.entities.sectionType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/subsection">
      <Translate contentKey="global.menu.entities.subsection" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/subsection-type">
      <Translate contentKey="global.menu.entities.subsectionType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component">
      <Translate contentKey="global.menu.entities.component" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component-type">
      <Translate contentKey="global.menu.entities.componentType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component-material-option">
      <Translate contentKey="global.menu.entities.componentMaterialOption" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component-material-option-type">
      <Translate contentKey="global.menu.entities.componentMaterialOptionType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component-material-suboption">
      <Translate contentKey="global.menu.entities.componentMaterialSuboption" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/equipment">
      <Translate contentKey="global.menu.entities.equipment" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/equipment-type">
      <Translate contentKey="global.menu.entities.equipmentType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/equipment-material-option">
      <Translate contentKey="global.menu.entities.equipmentMaterialOption" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/arrangement">
      <Translate contentKey="global.menu.entities.arrangement" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/arrangement-type">
      <Translate contentKey="global.menu.entities.arrangementType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/arrangement-details">
      <Translate contentKey="global.menu.entities.arrangementDetail" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/components">
      <Translate contentKey="global.menu.entities.components" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component-property">
      <Translate contentKey="global.menu.entities.componentProperty" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component-property-type">
      <Translate contentKey="global.menu.entities.componentPropertyType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component-property-option">
      <Translate contentKey="global.menu.entities.componentPropertyOption" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/component-property-option-type">
      <Translate contentKey="global.menu.entities.componentPropertyOptionType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/equipment-property">
      <Translate contentKey="global.menu.entities.equipmentProperty" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/equipment-property-type">
      <Translate contentKey="global.menu.entities.equipmentPropertyType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/equipment-property-option">
      <Translate contentKey="global.menu.entities.equipmentPropertyOption" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/equipment-property-option-type">
      <Translate contentKey="global.menu.entities.equipmentPropertyOptionType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/order">
      <Translate contentKey="global.menu.entities.order" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/order-status-type">
      <Translate contentKey="global.menu.entities.orderStatusType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/global-param">
      <Translate contentKey="global.menu.entities.globalParam" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/price-type">
      <Translate contentKey="global.menu.entities.priceType" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/property-option-type-price">
      <Translate contentKey="global.menu.entities.propertyOptionTypePrice" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/object-construction-type">
      <Translate contentKey="global.menu.entities.objectConstructionType" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
