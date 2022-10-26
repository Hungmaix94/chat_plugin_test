import { IComponents } from 'app/shared/model/component.model';
import { IEquipmentType } from 'app/shared/model/equipment-type.model';

export interface IEquipment {
  id?: number;
  component?: IComponents;
  equipmentType?: IEquipmentType;
  equipmentTypeId?: any;
  equipmentProperties?: any;
}

export const defaultValue: Readonly<IEquipment> = {};
