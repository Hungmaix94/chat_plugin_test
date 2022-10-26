import React, { useEffect, useState } from 'react';
import Translate, { translate } from 'app/shared/layout/Translation/translate';

import FormGenerator from 'app/shared/layout/FormGenerator/FormGenerator';
import { compact, omit } from 'lodash';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useRole } from 'app/shared/hooks/useRole';
import { convertEnumKey } from "app/shared/util/entity-utils";

export interface IBasicFormDictionariesProps {
  isNew?: boolean;
  isSave?: boolean;
  isReadOnly?: boolean;
  updateSuccess?: boolean;
  updating?: boolean;
  createEntity?: any;
  updateEntity?: any;
  dictionaryEntity: any;
  translationPath: string;
  entityPath: string;
  i18nGroupPrefix: string;
  isDescription?: boolean;
  additionalFields?: any;
  isModal?: boolean;
  afterSuccess?: (id: string) => void;
  formRef?: any;
  children?: any;
  customSave?: (values) => void;
  titleFields?: string;
  number?: number;
}

const BasicFormDictionaries: React.FC<IBasicFormDictionariesProps> = ({
  isNew,
  isSave,
  isReadOnly,
  createEntity,
  updateEntity,
  updateSuccess,
  dictionaryEntity,
  isModal,
  afterSuccess,
  formRef,
  translationPath,
  entityPath,
  i18nGroupPrefix,
  updating,
  isDescription = true,
  additionalFields,
  children,
  customSave,
  titleFields = '',
  number,
}: IBasicFormDictionariesProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSystem, isAdmin } = useRole();
  const [enumKey, setEnumKey] = useState(null);

  const onChangeName = (event) => {
    if (isNew) {
      setEnumKey(convertEnumKey(event.target.value))
    }
    return event;
  }

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = (event,  values) => {
      if (customSave) {
        customSave(values);
      } else {
        const entity = {
          ...dictionaryEntity,
          ...values,
        };
        if (isNew) {
          dispatch(createEntity(omit({ ...entity, isActive: true }, ['id'])));
        } else {
          dispatch(updateEntity(entity));
        }
      }
  };

  const handleClose = () => {
    if (isModal) {
      afterSuccess(dictionaryEntity.id);
    } else history.push(isNew ? `/admin/dict/translation/${translationPath}/${dictionaryEntity.id}/new` : `/admin/dict/${entityPath}`);
  };

  const fieldDescription = isDescription
    ? {
        readOnly: isReadOnly,
        name: 'description',
        type: 'textarea',
        textareaLengthMax: 200,
        id: `${i18nGroupPrefix}-description`,
        label: <Translate contentKey={`proEcoApp.${i18nGroupPrefix}.description`}>description</Translate>,
        validate: {
          required: { value: true, errorMessage: translate('entity.validation.required') },
          maxLength: { value: 200, errorMessage: translate('entity.validation.maxlength', { max: 200 }) },
        },
      }
    : null;

  const defaultFields = [
    {
      readOnly: isReadOnly,
      name: 'name',
      id: `${i18nGroupPrefix}-name`,
      label: <Translate contentKey={`proEcoApp.${i18nGroupPrefix}.name`}>Name</Translate>,
      onChange: onChangeName,
      validate: {
        required: { value: true, errorMessage: translate('entity.validation.required') },
        maxLength: { value: 50, errorMessage: translate('entity.validation.maxlength', { max: 50 }) },
      },
    },
    fieldDescription,
    {
      type: 'hidden',
      name: 'enumKey',
      label: <Translate contentKey={`proEcoApp.${i18nGroupPrefix}.enumKey`}>Enum Key</Translate>,
      id: `${i18nGroupPrefix}-enumKey`,
      value: enumKey,
      readOnly: true,
      validate: {
        required: { value: true, errorMessage: translate('entity.validation.required') },
        maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) },
      },
    },
  ];

  const fields = additionalFields
    ? [
        ...defaultFields.filter(defaultField => !additionalFields.find(additionalField => additionalField.name === defaultField.name)),
        ...additionalFields,
      ]
    : defaultFields;

  return (
    <FormGenerator
      model={isNew ? {} : dictionaryEntity}
      fields={compact([...fields])}
      onValidSubmit={saveEntity}
      isNew={isNew}
      isSave={isSave}
      onlyBackButton={!isSystem && !isAdmin}
      pathButtonEdit={`/admin/dict/${entityPath}/${dictionaryEntity.id}/edit`}
      {...(!isModal && { pathButtonBack: `/admin/dict/${entityPath}` })}
      updating={updating}
      forwardedRef={formRef}
      isButtonsCenter
      titleFields={titleFields}
      number={number}
    >
      {children}
    </FormGenerator>
  );
};

export default BasicFormDictionaries;
