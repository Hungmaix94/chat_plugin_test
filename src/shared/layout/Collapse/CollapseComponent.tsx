import React, { FC, useEffect, useState } from 'react';
import { Collapse } from 'reactstrap';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ICollapseComponentProps {
  header: React.ReactNode;
  extraButton?: React.ReactNode;
  btnClassName?: string;
  id: string;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

const CollapseComponent: FC<ICollapseComponentProps> = ({
  extraButton,
  header,
  btnClassName,
  id,
  defaultOpen,
  children,
}: ICollapseComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (defaultOpen) setIsOpen(true);
  }, [defaultOpen]);

  const handleSetIsOpen = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <>
      <div
        id={id}
        className={`${btnClassName || 'btn-collapse'}`}
        onClick={handleSetIsOpen}
        style={{
          padding: 0,
          width: '100%',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {isOpen ? <FontAwesomeIcon icon={faCaretDown} className={'mr-2'} /> : <FontAwesomeIcon icon={faCaretRight} className={'mr-2'} />}
        <div>{header}</div>
      </div>
      {extraButton}
      <Collapse isOpen={isOpen} className={'w-100'}>
        {children}
      </Collapse>
    </>
  );
};

export default CollapseComponent;
