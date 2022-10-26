import { IComponentType } from 'app/shared/model/component-type.model';

export interface IComponentPropertyType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
  componentType?: IComponentType;
  componentTypeId?: string | number;
}

export const defaultValue: Readonly<IComponentPropertyType> = {
  isActive: false,
};
