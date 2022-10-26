import React, { createContext, FC, useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './stepper.scss';
import { Col, Row } from "reactstrap";

interface IStepper {
  tabs?: ITabs[];
  childrenTab?: any;
  tabsWithCol?: boolean;
}

interface ITabs {
  key?: any;
  label?: any;
  component?: any;
}

interface IStepperContext {
  tabs?: any;
  tabIndex?: any;
  setTabIndex?: any;
}

export const StepperContext = createContext<IStepperContext>({});

const Stepper: FC<IStepper> = ({ tabs, childrenTab, tabsWithCol = false }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabsRender = <div className="tab-list-wrapper">
    <TabList>
      {tabs.map((e, i) => (
        <Tab key={i} className={`react-tabs__tab ${tabIndex >= i ? 'stepper' : ''} `}>
          <div>
            {i > 0 && <FontAwesomeIcon className={'stepper-icon'} icon={faArrowRight}/>} {e?.label}
          </div>
        </Tab>
      ))}
    </TabList>
    {childrenTab}
  </div>;

  const renderTabs = () => tabs.map((e, i) => (
    <TabPanel key={i}>{e.component}</TabPanel>
  ));

  return (
    <StepperContext.Provider value={{ tabIndex, setTabIndex, tabs }}>
      <Tabs selectedIndex={tabIndex} className={'stepper-sections'} onSelect={() => {
      }}>
        {tabsRender}
        {
          tabsWithCol ?
            <Row className="justify-content-center">
              <Col xs={12} lg={10} xl={8}>
                {renderTabs()}
              </Col>
            </Row>
            :
            renderTabs()
        }
      </Tabs>
    </StepperContext.Provider>
  );
};

export default Stepper;
