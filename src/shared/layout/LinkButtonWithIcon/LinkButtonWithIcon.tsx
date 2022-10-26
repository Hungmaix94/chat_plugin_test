import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LinkButtonWithIcon.scss';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';

interface ILinkButtonWithIcon {
  path: string;
  icon: any;
  iconImage?: any;
  contentKeyText: string;
  className?: string;
  type?: any;
}

export const LinkButtonWithIcon: React.FC<ILinkButtonWithIcon> = ({
  path,
  icon,
  iconImage,
  contentKeyText,
  className = '',
  ...props
}: ILinkButtonWithIcon) => {
  return (
    <Link to={path} className={`link-button-with-icon ${className}`} {...props}>
      {icon ? <FontAwesomeIcon icon={icon} /> : iconImage && <img alt="icon" src={iconImage} />}
      <Translate contentKey={contentKeyText} />
    </Link>
  );
};
