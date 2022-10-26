import React, { FC, ReactNode, useState } from 'react';
import { Collapse } from 'reactstrap';
import './collapseWithOverflowText.scss';

export interface ICollapseWithOverflowTextProps {
  id?: string;
  text: string;
  children?: ReactNode;
  viewText?: string;
}

const CollapseText: FC<ICollapseWithOverflowTextProps> = ({ id, text, children, viewText }: ICollapseWithOverflowTextProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isTooLong = text && text.length > 30;

  const handleSetIsOpen = event => {
    setIsOpen(prev => !prev);
  };

  return (
    <div key={id} id={id} style={{ maxWidth: '100%' }} className={!isTooLong ? 'text-nowrap' : ''}>
      {isTooLong ? (
        <div style={{ position: 'relative' }}>
          <button type="button" className={`btn-collapse-overflow`} onClick={handleSetIsOpen}>
            <div className={`text-truncate collapse-text ${isOpen && 'isOpen'}`}>{viewText || children}</div>
            <Collapse isOpen={isOpen}>
              <div className="text-left">{children}</div>
            </Collapse>
          </button>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default CollapseText;
