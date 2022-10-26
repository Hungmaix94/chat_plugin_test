import React, { FC } from 'react';
import Translate from 'app/shared/layout/Translation/translate';
import { Button } from 'reactstrap';

export interface IButtonLoadingProps {
  updating: boolean;
  disabled: boolean;
  text?: string;
  type?: any;
  color?: string;
  id?: string;
  isSuccess?: boolean;
  classNames?: string;
  onClick?: any;
}

const ButtonLoading: FC<IButtonLoadingProps> = ({
  updating,
  text = 'entity.action.save',
  type = 'submit',
  color = 'first-type',
  id = 'save-entity',
  classNames = '',
  disabled = updating,
  onClick,
}: IButtonLoadingProps) => {
  return (
    <Button
      color={color}
      id={id}
      type={type}
      className={`btn-multiple-state ${updating ? 'show-spinner' : ''} ${disabled ? 'disabled' : ''} ${classNames}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="spinner d-inline-block">
        <span className="bounce1" />
        <span className="bounce2" />
        <span className="bounce3" />
      </span>
      <span className="icon success">
        <i className="simple-icon-check" />
      </span>
      <span className="icon fail">
        <i className="simple-icon-exclamation" />
      </span>
      <Translate className="label" contentKey={text}>
        Save
      </Translate>
    </Button>
  );
};

export default ButtonLoading;
