import { ISection } from 'app/shared/model/section.model';
import { ISubsectionType } from 'app/shared/model/subsection-type.model';
import { IComponents } from "app/shared/model/component.model";

export interface ISubsection {
  id?: number;
  section?: ISection;
  subsectionType?: ISubsectionType;
  components?: IComponents[];
  subsectionTypeId?: any;
}

export const defaultValue: Readonly<ISubsection> = {};
