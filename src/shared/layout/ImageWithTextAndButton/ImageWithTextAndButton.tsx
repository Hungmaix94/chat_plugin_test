import React, { FC } from 'react';
import Translate from 'app/shared/layout/Translation/translate';
import { Button } from 'reactstrap';
import './ImageWithTextAndButton.scss';

interface IImageWithTextAndButton {
  title?: string;
  titleTranslate?: any;
  dotText?: string[];
  imgSrc: string;
  onClickButton: any;
  additionalText?: string;
}

const ImageWithTextAndButton: FC<IImageWithTextAndButton> = ({
  title,
  titleTranslate,
  dotText,
  imgSrc,
  onClickButton,
  additionalText,
}: IImageWithTextAndButton) => {
  return (
    <div className="image-with-text-and-button">
      <div>
        <div className="title">{title ? <Translate contentKey={title} /> : titleTranslate}</div>
        <ul className="with-dot">
          {additionalText && <Translate contentKey={additionalText} />}
          {dotText?.map((item, i) => (
            <li key={i}>
              <Translate contentKey={item} />
            </li>
          ))}
        </ul>
        <div className="mt-auto w-100">
          <Button onClick={onClickButton} className="btn-third-only-border mt-3" id="stepper-button-next" type="submit">
            <Translate contentKey={'proEcoApp.content.btnSelect'} />
          </Button>
        </div>
      </div>
      <div>
        <img src={imgSrc} alt="image" />
      </div>
    </div>
  );
};

export default ImageWithTextAndButton;
