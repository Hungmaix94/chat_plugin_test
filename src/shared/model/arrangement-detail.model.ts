import { IArrangement } from 'app/shared/model/arrangement.model';
import { IFinishingMaterial } from 'app/shared/model/finishing-material.model';

export interface IArrangementDetails {
  id?: number;
  arrangement?: IArrangement;
  finishingMaterial?: IFinishingMaterial;
}

export const defaultValue: Readonly<IArrangementDetails> = {};
