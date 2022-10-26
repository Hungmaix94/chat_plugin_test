import React, { useMemo } from 'react';
import Translate from 'app/shared/layout/Translation/translate';
import './title.scss';

interface ITitleProps {
  contentKeyText?: string;
  isSubtitle?: boolean;
  className?: string;
  text?: string;
  textSize?: any;
  customClassName?: any;
}

export const Title: React.FC<ITitleProps> = ({
  contentKeyText,
  isSubtitle,
  className = '',
  text,
  textSize,
  customClassName,
}: ITitleProps) => {
  const wrapperClassName = useMemo(() => `title-component ${isSubtitle ? 'subtitle' : ''} ${className}`, [isSubtitle]);
  return (
    <div className={`${wrapperClassName} ${customClassName || ''}`} {...(textSize && { style: { fontSize: textSize } })}>
      {contentKeyText ? <Translate contentKey={contentKeyText} /> : text}
    </div>
  );
};
