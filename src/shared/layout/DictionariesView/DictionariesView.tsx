import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import TextFormat from 'app/shared/layout/TextFormat';
import Translate, { translate } from 'app/shared/layout/Translation/translate';
import WrapperDynamicColumnTable from 'app/shared/layout/DynamicColumnTable/WrapperDynamicColumnTable';
import {
  renderButton,
  renderGroupDictionariesModalsButtons
} from 'app/shared/layout/DynamicColumnTable/Components/Buttons';
import CollapseWithOverflowText from 'app/shared/layout/Collapse/CollapseWithOverflowText';
import { APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ConfirmDeactivateDialog } from 'app/shared/layout/Dialog/Dialogs';
import { get } from 'lodash';
import { useDispatch } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import { useAppSelector } from 'app/config/store';
import { TRANSLATED_DICTS } from 'app/entities/translate-dict-item/constants';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PageHeader from 'app/shared/layout/PageWrapper/PageHeader';
import { getEntities as getSectionTypes } from "app/entities/section-type/section-type.reducer";
import { getEntities as getSubsectionTypes } from "app/entities/subsection-type/subsection-type.reducer";
import { getEntities as getMaterialTypes } from "app/entities/material-type/material-type.reducer";
import { getEntities as getEquipmentTypes } from "app/entities/equipment-type/equipment-type.reducer";
import {
  getEntities as getEquipmentPropertyTypes
} from "app/entities/equipment-property-type/equipment-property-type.reducer";
import { getEntities as getComponentTypes } from "app/entities/component-type/component-type.reducer";
import {
  getEntities as getComponentPropertyTypes
} from "app/entities/component-property-type/component-property-type.reducer";
import { defaultPagination } from "app/shared/util/pagination.constants";
import { convertCurrency } from "app/shared/util/entity-utils";

export interface IDictionariesViewProps {
  titleId: string;
  translateTitle: string;
  translateCreateNew?: string;
  canCreateNew?: boolean;
  canAdvancedSearch?: boolean;
  getEntities: (any) => void;
  itemPropertyNames: string[];
  defaultVisibleProperties: string[];
  i18nGroupName: string;
  itemList: any[];
  editTranslationPathPrefix: string;
  dynamicDictPrefix: string;
  totalItems: number;
  persistenceKey?: string;
  permanentColumns?: string[];
  loadingItems?: boolean;
  withoutEditing?: boolean;
  vatTypes?: any;
  canBeDeleted?: boolean;
  canEdit?: boolean;
  deletingQuestionTranslate?: any;
  paramNameDeletingQuestion?: string;
  deleteEntityFunction?: any;
  restoreEntityFunction?: any;
  resetEntity: () => void;
  updateSuccess: boolean;
  searchCriteria?: any;
  pathArray?: any;
  setSearchCriteria?: (param) => void;
}

const DictionariesView: React.FC<IDictionariesViewProps> = (props: IDictionariesViewProps) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();
  const [deletingEntityData, setDeletingEntityData] = useState(null);
  const countryDict = useAppSelector(state => state.translateDictItem.dictEnums[TRANSLATED_DICTS.COUNTRIES]);
  const currencyDict = useAppSelector(state => state.translateDictItem.dictEnums[TRANSLATED_DICTS.CURRENCIES]);
  const sectionTypeDict = useAppSelector(state => state.sectionType.entities);
  const subsectionTypeDict = useAppSelector(state => state.subsectionType.entities);
  const componentTypeDict = useAppSelector(state => state.componentType.entities);
  const componentPropertyTypeDict = useAppSelector(state => state.componentPropertyType.entities);
  const equipmentTypeDict = useAppSelector(state => state.equipmentType.entities);
  const equipmentPropertyTypeDict = useAppSelector(state => state.equipmentPropertyType.entities);
  const materialTypeDict = useAppSelector(state => state.materialType.entities);
  const canEdit = get(props, 'canEdit', true);
  const deactivateModalParams = useMemo(() => props.paramNameDeletingQuestion === 'enumKey'
    ? translate(`dynamic.${props.dynamicDictPrefix}.${deletingEntityData?.enumKey}.itemTranslation`)
    : get(deletingEntityData, props.paramNameDeletingQuestion, ''), [props.paramNameDeletingQuestion, props.dynamicDictPrefix, deletingEntityData]);

  useEffect(() => {
    return () => dispatch(props.resetEntity());
  }, []);
  const pathArray = useMemo(
    () => {
      if (!props?.pathArray) {
        return [
          { path: 'admin/dashboard', translation: 'global.menu.admin.mainPage' },
          { path: 'admin/dict', translation: 'global.menu.admin.dictionaries' },
          { path: '', translation: props.translateTitle },
        ]
      } else {
        return props?.pathArray;
      }
    },
    [props?.pathArray]
  );

  useEffect(() => {
    if (props.itemPropertyNames.includes('sectionTypeId')) {
      dispatch(getSectionTypes({ ...defaultPagination }));
    }
    if (props.itemPropertyNames.includes('subsectionTypeId')) {
      dispatch(getSubsectionTypes({ ...defaultPagination }));
    }
    if (props.itemPropertyNames.includes('componentTypeId')) {
      dispatch(getComponentTypes({ ...defaultPagination }));
    }
    if (props.itemPropertyNames.includes('componentPropertyTypeId')) {
      dispatch(getComponentPropertyTypes({ ...defaultPagination }));
    }
    if (props.itemPropertyNames.includes('equipmentTypeId')) {
      dispatch(getEquipmentTypes({ ...defaultPagination }));
    }
    if (props.itemPropertyNames.includes('equipmentPropertyTypeId')) {
      dispatch(getEquipmentPropertyTypes({ ...defaultPagination }));
    }
    if (props.itemPropertyNames.includes('materialTypeId')) {
      dispatch(getMaterialTypes({ ...defaultPagination }));
    }
  }, [props.itemPropertyNames?.length]);

  const getEntities = params => {
    dispatch(props.getEntities(params));
  };

  const openDeleteEntityPopup = entity => event => {
    event.stopPropagation();
    setDeletingEntityData(entity);
  };

  const onCloseDeleteEntityPopup = () => {
    setDeletingEntityData(null);
  };

  const removeEntity = () => {
    dispatch(props.deleteEntityFunction(deletingEntityData.id));
    onCloseDeleteEntityPopup();
  };

  // eslint-disable-next-line complexity
  const renderTableCell = (dictionariesItemType, fieldId) => {
    const value = dictionariesItemType[fieldId];
    let isOff = false;
    let switchValue = null;
    switch (fieldId) {
      case 'price':
        return (
          <td key={fieldId} className="white-space-pre">
            {convertCurrency(value)}
          </td>
        );
      case 'enumKey':
        return (
          <td key={fieldId}>
            <Link to={`${match.url}/${dictionariesItemType.id}`} className="text-primary">
              {dictionariesItemType.enumKey}
            </Link>
          </td>
        );
      case 'itemTranslation':
        return (
          <td key={fieldId}>
            <Translate
              contentKey={`dynamic.${props.dynamicDictPrefix}.${dictionariesItemType.enumKey}.itemTranslation`}/>
          </td>
        );
      case 'currencyId':
        switchValue = (currencyDict || []).find(item => item.id === value);
        return <td key={fieldId}>{switchValue?.currAbbreviation}</td>;
      case 'sectionTypeId':
        switchValue = (sectionTypeDict || []).find(item => item.id === value);
        isOff = !switchValue?.isActive;
        return <td key={fieldId} className={isOff ? 'inactive' : ''}>
          {
            switchValue && <>
              <Translate
                contentKey={`dynamic.${TRANSLATED_DICTS.SECTION_TYPES}.${switchValue?.enumKey}.itemTranslation`}/>
              {isOff && <Translate className="ml-1" contentKey="off"/>}
            </>
          }
        </td>;
      case 'subsectionTypeId':
        switchValue = (subsectionTypeDict || []).find(item => item.id === value);
        isOff = !switchValue?.isActive;

        return <td key={fieldId} className={isOff ? 'inactive' : ''}>
          {
            switchValue && <>
              <Translate
                contentKey={`dynamic.${TRANSLATED_DICTS.SUBSECTION_TYPES}.${switchValue?.enumKey}.itemTranslation`}/>
              {isOff && <Translate className="ml-1" contentKey="off"/>}
            </>
          }
        </td>;
      case 'componentTypeId':
        switchValue = (componentTypeDict || []).find(item => item.id === value);
        isOff = !switchValue?.isActive;

        return <td key={fieldId} className={isOff ? 'inactive' : ''}>
          {
            switchValue && <>
              <Translate
                contentKey={`dynamic.${TRANSLATED_DICTS.COMPONENT_TYPES}.${switchValue?.enumKey}.itemTranslation`}/>
              {isOff && <Translate className="ml-1" contentKey="off"/>}
            </>
          }
        </td>;
      case 'componentPropertyTypeId':
        switchValue = (componentPropertyTypeDict || []).find(item => item.id === value);
        isOff = !switchValue?.isActive;

        return <td key={fieldId} className={isOff ? 'inactive' : ''}>
          {
            switchValue && <>
              <Translate
                contentKey={`dynamic.${TRANSLATED_DICTS.COMPONENT_PROPERTY_TYPES}.${switchValue?.enumKey}.itemTranslation`}/>
              {isOff && <Translate className="ml-1" contentKey="off"/>}
            </>
          }
        </td>;
      case 'materialTypeId':
        switchValue = (materialTypeDict || []).find(item => item.id === value) || null;
        isOff = !switchValue?.isActive;

        return <td key={fieldId} className={isOff ? 'inactive' : ''}>
          {
            switchValue && <>
              <Translate
                contentKey={`dynamic.${TRANSLATED_DICTS.MATERIAL_TYPES}.${switchValue?.enumKey}.itemTranslation`}/>
              {isOff && <Translate className="ml-1" contentKey="off"/>}
            </>
          }
        </td>;
      case 'equipmentTypeId':
        switchValue = (equipmentTypeDict || []).find(item => item.id === value);
        isOff = !switchValue?.isActive;

        return <td key={fieldId} className={isOff ? 'inactive' : ''}>
          {
            switchValue && <>
              <Translate
                contentKey={`dynamic.${TRANSLATED_DICTS.EQUIPMENT_TYPES}.${switchValue?.enumKey}.itemTranslation`}/>
              {isOff && <Translate className="ml-1" contentKey="off"/>}
            </>
          }
        </td>;
      case 'equipmentPropertyTypeId':
        switchValue = (equipmentPropertyTypeDict || []).find(item => item.id === value);
        isOff = !switchValue?.isActive;

        return <td key={fieldId} className={isOff ? 'inactive' : ''}>
          {
            switchValue && <>
              <Translate
                contentKey={`dynamic.${TRANSLATED_DICTS.EQUIPMENT_PROPERTY_TYPES}.${switchValue?.enumKey}.itemTranslation`}/>
              {isOff && <Translate className="ml-1" contentKey="off"/>}
            </>
          }
        </td>;
      case 'country':
        switchValue = countryDict.find(co => co.id === dictionariesItemType.countryId);
        return (
          <td key={fieldId}>
            {switchValue ? (
              <Link to={`country/${dictionariesItemType.countryId}`}>
                {translate(`dynamic.${TRANSLATED_DICTS.COUNTRIES}.${switchValue?.enumKey}.itemTranslation`)}
              </Link>
            ) : (
              ''
            )}
          </td>
        )
      case (fieldId === 'createdDate' || fieldId === 'validFrom' || fieldId === 'validTo') && value:
        return (
          <td key={fieldId} className="text-nowrap">
            {value && <TextFormat type="date" value={value} format={APP_LOCAL_DATE_FORMAT}/>}
          </td>
        );
      default:
        if (typeof value === 'boolean') {
          return (
            <td key={fieldId} className={value ? 'text-success' : 'text-danger'}>
              <Translate contentKey={`${props.i18nGroupName}.${fieldId}Status.${value.toString()}`}/>
            </td>
          );
        }
        if (fieldId.includes('Description')) {
          switchValue = translate(`dynamic.${props.dynamicDictPrefix}.${dictionariesItemType.enumKey}.translateDescription`);
          return (
            <CollapseWithOverflowText key={fieldId} text={switchValue}>
              <Translate
                contentKey={`dynamic.${props.dynamicDictPrefix}.${dictionariesItemType.enumKey}.translateDescription`}/>
            </CollapseWithOverflowText>
          );
        } else return (
          <CollapseWithOverflowText key={fieldId} text={value}>
            {value}
          </CollapseWithOverflowText>
        );
    }
  };

  const onRestore = id => event => {
    event.stopPropagation();
    dispatch(props.restoreEntityFunction(id));
  };

  const renderActionCell = dictionariesItemType => {
    const editPath = props.withoutEditing ? null : `${match.url}/${dictionariesItemType.id}/edit`;
    const editId = props.withoutEditing ? null : `dictionaries-table-edit-dictionary-${dictionariesItemType.id}`;
    const editTranslationPath = `/admin/dict/translation/${props.editTranslationPathPrefix}/${dictionariesItemType.id}/edit`;
    const editTranslationId = `dictionaries-table-editTranslation-dictionary-${dictionariesItemType.id}`;
    const deleteId = `dictionaries-table-delete-dictionary-${dictionariesItemType.id}`;
    const withDeleted = dictionariesItemType?.isActive && props.canBeDeleted;
    return (
      <div key="entity-actions" className="d-flex">
        {canEdit
          ? renderGroupDictionariesModalsButtons(
            editPath,
            editId,
            editTranslationPath,
            editTranslationId,
            withDeleted,
            openDeleteEntityPopup(dictionariesItemType),
            deleteId
          )
          : null}

        {!dictionariesItemType.isActive &&
          props.restoreEntityFunction &&
          renderButton(
            onRestore(dictionariesItemType.id),
            'entity.action.restore',
            faCheckCircle,
            'color-bg',
            `restore-${dictionariesItemType.id}`,
            true
          )}
      </div>
    );
  };

  const handleOnClickNew = () => {
    history.push(`${match.url}/new`);
  };

  const composeOnClickTableRow = entity => () => {
    history.push(`${match.url}/${entity.id}`);
  };

  return (
    <div className="app-page-size page-with-table-wrapper">
      <Row className="justify-content-center">
        <Col xs={12}>
          <PageHeader
            titleContentKey={props.translateTitle}
            subTitleContentKey={`${props.i18nGroupName}.home.subtitle`}
            pathArray={pathArray}
          />
          {props.canCreateNew && (
            <div className="d-flex justify-content-end align-items-start flex-wrap">
              <Button id="table-button-create-new" onClick={handleOnClickNew} color="first-type"
                      className="btn-default-size">
                <Translate contentKey={props.translateCreateNew}/>
              </Button>
            </div>
          )}
          <WrapperDynamicColumnTable
            composeOnClickTableRow={composeOnClickTableRow}
            totalItems={props.totalItems}
            itemPropertyNames={props.itemPropertyNames}
            items={[...props.itemList]}
            renderTableCell={renderTableCell}
            i18nGroupName={props.i18nGroupName}
            defaultVisibleProperties={props.defaultVisibleProperties}
            persistenceKey={props.persistenceKey}
            permanentColumns={props.permanentColumns}
            renderActionCell={renderActionCell}
            loadingItems={props.loadingItems}
            translateEmptyTable={`${props.i18nGroupName}.home.notFound`}
            isBottomPageSize
            updateSuccess={props.updateSuccess}
            searchCriteria={props.searchCriteria}
            getEntities={getEntities}
            setSearchCriteria={props.setSearchCriteria}
            fieldIdListWithoutSorting={['itemTranslation', 'translateDescription']}
          />
          <ConfirmDeactivateDialog
            translateDeleteQuestion={props.deletingQuestionTranslate}
            toggleClose={onCloseDeleteEntityPopup}
            onValidSubmit={removeEntity}
            paramsDeleteDialog={deactivateModalParams}
            isOpen={!!deletingEntityData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default DictionariesView;
