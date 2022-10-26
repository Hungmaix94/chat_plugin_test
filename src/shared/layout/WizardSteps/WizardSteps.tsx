import React, { FC } from 'react';
import './WizardSteps.scss';
import Translate from '../Translation/translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export interface IStepItem {
  translation: string;
  stepNumber: number;
}

interface IWizardSteps {
  stepsArray: IStepItem[];
  currentStep: number;
}

const WizardSteps: FC<IWizardSteps> = ({ stepsArray, currentStep }) => {
  return (
    <div className="wizard-steps">
      {stepsArray.map((item, index) => (
        <div key={index} className={currentStep === item.stepNumber ? 'active' : ''}>
          <Translate onClick={() => {}} contentKey={item.translation} />{' '}
          {index !== stepsArray.length - 1 && <FontAwesomeIcon icon={faArrowRight} />}
        </div>
      ))}
    </div>
  );
};

export default WizardSteps;
