import React, { useEffect, useState } from 'react';
import './VerticalStepper.scss';
import Translate from 'app/shared/layout/Translation/translate';
import { Title } from 'app/shared/layout/PageTitle/Title';
import { Button } from 'reactstrap';

interface IVerticalStepper {
  steps?: any;
  translatePath?: string;
  currentStep?: any;
  title?: string;
  titleSize?: any;
  bottomTitleChildren?: any;
  topTitleChildren?: React.ReactNode;
  titleButton?: string;
  onClickEndButton?: any;
  onClickStep?: any;
  hideEndButton?: boolean;
  maxStep?: any;
}
export default function VerticalStepper(props: IVerticalStepper) {
  const {
    steps = [],
    translatePath,
    currentStep,
    title,
    titleSize,
    hideEndButton,
    bottomTitleChildren,
    titleButton,
    onClickEndButton,
    onClickStep,
    maxStep,
    topTitleChildren,
  } = props;

  const [maxNext, setMaxNext] = useState(maxStep || 0);

  useEffect(() => {
    if (maxNext < currentStep) {
      setMaxNext(currentStep);
    }
  }, [currentStep]);

  const onSubmit = () => onClickEndButton(currentStep);
  const onHandleStep = st => () => st <= maxNext && onClickStep(st);

  return (
    <div className="pl-4">
      <div className="mb-4">
        {topTitleChildren}
        <Title contentKeyText={title} className="text-left" customClassName="title-stepper" {...(titleSize && { textSize: titleSize })} />
        {bottomTitleChildren}
      </div>
      <div className="steps">
        {steps.map((e, i) => {
          const isCurrent = currentStep === e.step;
          return (
            <div key={e.id} className={`step ${isCurrent ? 'active-step' : ''}`} onClick={onHandleStep(e.step)}>
              <div className="number">{e.step + 1}</div>
              <div className={`header hand ${isCurrent ? 'font-weight-bold' : ''}`}>
                <Translate contentKey={`${translatePath}.step`} /> {e.step + 1}.
              </div>
              <div>
                <Translate contentKey={`${translatePath}.${e.id}.title`} />
              </div>
            </div>
          );
        })}
      </div>
      {!hideEndButton && (
        <div>
          <Button className="button text-uppercase" id="stepper-button" disabled={maxNext < steps.length - 1} onClick={onSubmit}>
            <Translate contentKey={titleButton || 'entity.action.edit'}>Edit</Translate>
          </Button>
        </div>
      )}
    </div>
  );
}
