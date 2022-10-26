import React, { useEffect, useMemo, useState } from 'react';
import './WizardWarpper.scss';
import { Carousel, CarouselItem } from 'reactstrap';

export interface IStep {
  contentKey?: string;
  id?: any;
  component: React.ReactElement;
}

interface IWizardWrapper {
  stepsArray: IStep[];
  title?: string;
  bottomTitleChildren?: React.ReactNode;
  titleSize?: string;
  headerComponent?: React.ReactNode;
  titleStyle?: any;
  onChangeIndex?: any;
  currentStep?: any;
  classNames?: string;
}

const WizardWrapper: React.FC<IWizardWrapper> = ({ stepsArray, onChangeIndex, currentStep, classNames = '' }: IWizardWrapper) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const classNamesWrapper = useMemo(() => `wizard-wrapper-container ${classNames}`, [classNames]);

  useEffect(() => {
    setActiveIndex(currentStep);
  }, [currentStep]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === stepsArray.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    onChangeIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? stepsArray.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    onChangeIndex(nextIndex);
  };

  const slides = stepsArray.map((item, index) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={index}>
        {React.cloneElement(item.component, {
          index: activeIndex,
          onClickNext: next,
          onClickPrev: previous,
          stepsLength: stepsArray.length,
        })}
      </CarouselItem>
    );
  });

  return (
    <div className={classNamesWrapper}>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} autoPlay={false} interval={false} keyboard={false}>
        {slides}
      </Carousel>
    </div>
  );
};
export default WizardWrapper;
