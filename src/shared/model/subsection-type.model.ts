import { ISectionType } from 'app/shared/model/section-type.model';

export interface ISubsectionType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
  sectionType?: ISectionType;
  sectionTypeId?: number | string;
}

export const defaultValue: Readonly<ISubsectionType> = {
  isActive: false,
};
