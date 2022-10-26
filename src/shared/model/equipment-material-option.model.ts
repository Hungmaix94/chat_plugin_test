import { IEquipment } from 'app/shared/model/equipment.model';
import { IFinishingMaterial } from 'app/shared/model/finishing-material.model';

export interface IEquipmentMaterialOption {
  id?: number;
  psdImageLayerName?: string;
  equipment?: IEquipment;
  finishingMaterial?: IFinishingMaterial;
}

export const defaultValue: Readonly<IEquipmentMaterialOption> = {};
