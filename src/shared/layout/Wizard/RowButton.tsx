import ButtonLoading from 'app/shared/layout/ButtonLoading/ButtonLoading';
import Translate from 'app/shared/layout/Translation/translate';
import React from 'react';
import { Button } from 'reactstrap';

interface IRowButton {
  hideBack?: boolean;
  hideNext?: boolean;
  onMoveType: (item) => void;
  isSave?: boolean;
  withoutSave?: boolean;
  readOnly?: boolean;
  updating?: boolean;
  withCancel?: boolean;
  onClickCancel?: () => void;
  isLast?: boolean;
  wrapperClassName?: string;
}

export default function RowButton({
  hideBack,
  isSave,
  onMoveType,
  readOnly,
  updating = false,
  withoutSave,
  withCancel,
  onClickCancel,
  hideNext,
  isLast,
  wrapperClassName = '',
}: IRowButton) {
  const onClickBtn = type => () => {
    onMoveType(type);
  };

  return (
    <div
      style={{
        marginTop: '16px',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '15px',
      }}
      className={`d-flex mt-3 align-items-end flex-gap-1 ${wrapperClassName}`}
    >
      {withCancel && (
        <Button type="button" color="only-border" className="btn-default-size btn-row btn-back-left mr-auto" onClick={onClickCancel}>
          <Translate contentKey="entity.action.cancel" />
        </Button>
      )}
      {!hideBack && (
        <Button
          disabled={hideBack}
          type="button"
          color="second-type"
          className={`btn-default-size btn-row ${isSave && 'btn-back-left'}`}
          onClick={onClickBtn('back')}
        >
          <Translate contentKey="entity.action.previous" />
        </Button>
      )}

      {!withoutSave && (
        <ButtonLoading
          updating={updating}
          disabled={updating}
          classNames={'btn-default-size'}
          text={`entity.action.save`}
          id={'special-entity-save'}
          onClick={onClickBtn('save')}
        />
      )}

      {!readOnly && !isLast && (
        <ButtonLoading
          updating={updating}
          disabled={updating || hideNext}
          classNames={'btn-default-size'}
          text={`entity.action.next`}
          id={'special-entity'}
          onClick={onClickBtn('next')}
        />
      )}
    </div>
  );
}
