import { IEquipmentType } from 'app/shared/model/equipment-type.model';

export interface IEquipmentPropertyType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
  equipmentType?: IEquipmentType;
  equipmentTypeId?: number | null;
}

export const defaultValue: Readonly<IEquipmentPropertyType> = {
  isActive: false,
};
