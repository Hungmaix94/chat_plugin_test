import { ISubsection } from 'app/shared/model/subsection.model';
import { IComponentType } from 'app/shared/model/component-type.model';
import { IEquipment } from "app/shared/model/equipment.model";

export interface IComponents {
  id?: number;
  subsection?: ISubsection;
  componentType?: IComponentType;
  componentProperties?: any;
  equipments?: IEquipment[];
  componentTypeId?: any;
}

export const defaultValue: Readonly<IComponents> = {};
