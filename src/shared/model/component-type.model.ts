import { ISubsectionType } from 'app/shared/model/subsection-type.model';

export interface IComponentType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
  subsectionType?: ISubsectionType | null;
  subsectionTypeId?: string | null;
  hasEquipment?: boolean;
}

export const defaultValue: Readonly<IComponentType> = {
  isActive: false,
};
