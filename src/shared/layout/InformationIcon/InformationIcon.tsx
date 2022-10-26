import Translate from "app/shared/layout/Translation/translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { UncontrolledTooltip } from "reactstrap";
import React, { FC } from "react";
import "./InformationIcon.scss";

interface IInformationIcon {
  textContentKey?: string;
  tooltipContentKey: string;
  idIcon: string;
  type?: 'information' | 'add-more';
  onClick?: () => void;
}

export const InformationIcon: FC<IInformationIcon> = (
  {
    textContentKey,
    tooltipContentKey,
    idIcon,
    onClick,
    type = 'information'
  }: IInformationIcon) => {
  const data = type === 'information' ? { icon: faCircleInfo, className: 'information-icon' } : {
    icon: faPlus,
    className: 'btn-add-more'
  }
  return (
    <>
      {
        textContentKey && <Translate contentKey={textContentKey} className={'mr-1'}/>
      }
      <FontAwesomeIcon onClick={onClick} icon={data.icon} className={data.className} id={idIcon}/>
      <UncontrolledTooltip
        arrowClassName={'tooltip-con--arrow'}
        innerClassName="tooltip-icon"
        placement="top"
        target={idIcon}
      >
        <Translate contentKey={tooltipContentKey}/>
      </UncontrolledTooltip>
    </>
  )
}
