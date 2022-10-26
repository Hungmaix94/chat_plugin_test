import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheckCircle, faGlobeEurope, faPencilAlt, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { translate } from 'app/shared/layout/Translation/translate';
import './buttons.scss';
import { default as DeleteIcon } from 'app/shared/layout/Icon/DeleteIcon';
import EditIcon from 'app/shared/layout/Icon/EditIcon';
import { useHistory } from 'react-router';

export const addButton = { title: 'entity.action.add', icon: faPlus, iconClassName: 'text-secondary' };
export const acceptButton = { title: 'entity.action.accept', icon: faCheckCircle, iconClassName: 'text-success' };
export const rejectButton = { title: 'entity.action.reject', icon: faTimesCircle, iconClassName: 'text-danger' };
export const deleteButton = { title: 'entity.action.delete', icon: 'trash', iconClassName: 'color-bg' };
export const deactivateButton = { title: 'entity.action.deactivate', icon: faTimesCircle, iconClassName: 'color-bg' };
export const editButton = { title: 'entity.action.edit', icon: faPencilAlt, iconClassName: 'color-bg' };
export const downloadButton = { title: 'entity.action.download', icon: faAngleDown, iconClassName: 'primary-color-bg' };
export const editTranslationButton = {
  title: 'entity.action.editTranslation',
  icon: faGlobeEurope,
};

export const renderButton = (onClick, title, icon, iconClassName = '', id, isFontAwesome) => (
  <Button
    id={id}
    color="link"
    className={`p-0 mr-2 action-button ${iconClassName}`}
    style={{ lineHeight: 1.125 }}
    title={translate(title)}
    onClick={onClick}
  >
    {isFontAwesome ? <FontAwesomeIcon icon={icon} /> : icon}
  </Button>
);

export const renderLinkButton = (path, title, icon, id, className, notFontAwesome?) => (
  <Link id={id} className={`mr-2 ${className ? className : ''} action-button`} to={path} title={translate(title)}>
    {notFontAwesome ? icon : <FontAwesomeIcon icon={icon} />}
  </Link>
);
export const renderDeactivateButton = (onClick, id) =>
  renderButton(onClick, deactivateButton.title, <DeleteIcon />, deactivateButton.iconClassName, id, false);

export const renderEditButton = (path, id) => {
  const history = useHistory();
  const onClick = event => {
    event.stopPropagation();
    history.push(path);
  };
  return renderButton(onClick, editButton.title, <EditIcon />, editButton.iconClassName, id, false);
};
export const renderEditTranslationButton = (path, id) => {
  const history = useHistory();
  const onClick = event => {
    event.stopPropagation();
    history.push(path);
  };
  return renderButton(onClick, editTranslationButton.title, editTranslationButton.icon, 'color-bg', id, true);
};

export const renderGroupDictionariesModalsButtons = (
  editPath,
  editId,
  editTranslationPath,
  editTranslationId,
  canBeDeleted,
  onClickOpenDeleteModal,
  deleteId
) => (
  <>
    {editPath && editId && renderEditButton(editPath, editId)}
    {editTranslationPath && editTranslationId && renderEditTranslationButton(editTranslationPath, editTranslationId)}
    {canBeDeleted && renderDeactivateButton(onClickOpenDeleteModal, deleteId)}
  </>
);
