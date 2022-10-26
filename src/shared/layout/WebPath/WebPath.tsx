import React, { FC } from 'react';
import './WebPath.scss';
import { Link } from 'react-router-dom';
import Translate from '../Translation/translate';

export interface IPathItem {
  translation?: string;
  label?: string;
  path: string;
}

interface IWebPath {
  pathArray: IPathItem[];
}

const WebPath: FC<IWebPath> = ({ pathArray }) => {
  return (
    <div className="web-path">
      {pathArray.map((item, index) => (
        <Link key={index} to={`/${item.path}`}>
          {index !== 0 && <span> / </span>}
          {!!item?.translation && <Translate contentKey={item.translation} />}
          {item?.label}
        </Link>
      ))}
    </div>
  );
};

export default WebPath;
