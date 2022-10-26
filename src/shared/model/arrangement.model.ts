import { IArrangementType } from 'app/shared/model/arrangement-type.model';
import { IProject } from 'app/shared/model/project.model';

export interface IArrangement {
  id?: number;
  arrangementName?: string;
  isActive?: boolean;
  vatTypeId?: any;
  currencyId?: any;
  arrangementType?: IArrangementType;
  price?: any;
  arrangementTypeId?: any;
  project?: IProject;
  projectId?: any;
  projectSeasonId?: any;
  arrangementDetails?: IArrangementDetails [];
  offerArrangements?: any[];
  uuid?: string;
}

export interface IArrangementDetails {
  id?: number;
  price?: number;
  equipmentPropertyOptionId?: string;
  componentPropertyOptionId?: boolean;
}

export const defaultValue: Readonly<IArrangement> = {
  isActive: false,
  arrangementDetails: []
};
