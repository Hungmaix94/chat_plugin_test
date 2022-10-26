import { IComponentType } from 'app/shared/model/component-type.model';

export interface IEquipmentType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
  componentType?: IComponentType | null;
  componentTypeId?: string | null;
}

export const defaultValue: Readonly<IEquipmentType> = {
  isActive: false,
};
