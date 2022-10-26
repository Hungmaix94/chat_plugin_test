import React, { FC, useState } from 'react';
import { Collapse } from 'reactstrap';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IItems {
  value: number;
}

export interface ICollapseTdProps {
  items: IItems[];
}

const CollapseItem: FC<ICollapseTdProps> = ({ items }: ICollapseTdProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <>
      <div onClick={onClick} style={{ padding: 0 }}>
        <span>{items?.[0]?.value}</span>
        <span>
          {items.length > 1 &&
            (isOpen ? (
              <FontAwesomeIcon icon={faSortUp} className="text-primary" />
            ) : (
              <FontAwesomeIcon icon={faSortDown} className="text-primary" />
            ))}
        </span>
      </div>
      {items.length > 1 && (
        <Collapse isOpen={isOpen}>
          {items?.slice(1)?.map((item, i) => (
            <span key={i}>
              {item.value}
              <br />
            </span>
          ))}
        </Collapse>
      )}
    </>
  );
};

export default CollapseItem;
