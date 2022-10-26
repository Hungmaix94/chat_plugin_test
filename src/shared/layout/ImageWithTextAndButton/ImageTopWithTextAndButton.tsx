import React, { FC } from 'react';
import Translate from 'app/shared/layout/Translation/translate';
import { Button } from 'reactstrap';
import './ImageTopWithTextAndButton.scss';

interface IImageTopWithTextAndButton {
  title?: string;
  titleTranslate?: any;
  dotText: string[];
  imgSrc: string;
  onClickButton: any;
  additionalText?: string;
}

const ImageTopWithTextAndButton: FC<IImageTopWithTextAndButton> = ({
  title,
  titleTranslate,
  dotText,
  imgSrc,
  onClickButton,
  additionalText,
}: IImageTopWithTextAndButton) => {
  return (
    <div className="image-top-with-text-and-button">
      <div>
        <img src={imgSrc} alt="image" />
      </div>
      <div>
        <div className="title">{title ? <Translate contentKey={title} /> : titleTranslate}</div>
        <ul className="with-dot">
          {additionalText && <Translate contentKey={additionalText} />}
          {dotText.map((item, i) => (
            <li key={i}>
              <Translate contentKey={item} />
            </li>
          ))}
        </ul>
        <div className="mt-auto w-100">
          <Button onClick={onClickButton} color="first-type" className="mt-4" id="stepper-button-next" type="submit">
            <Translate contentKey={'proEcoApp.content.btnSelect'} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageTopWithTextAndButton;
