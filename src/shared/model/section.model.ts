import { IProject } from 'app/shared/model/project.model';
import { ISectionType } from 'app/shared/model/section-type.model';
import { ISubsection } from 'app/shared/model/subsection.model';

export interface ISection {
  id?: number;
  psdImagePath?: string;
  project?: IProject;
  sectionType?: ISectionType;
  subsectionType?: ISubsection;
  sectionTypeId?: number | any;
  subsections?: ISubsection[];
}

export const defaultValue: Readonly<ISection> = {};
