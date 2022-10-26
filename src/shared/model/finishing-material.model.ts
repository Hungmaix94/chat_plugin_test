import { IMaterialType } from 'app/shared/model/material-type.model';
import { IFinishingMaterialPrice } from 'app/shared/model/finishing-material-price.model';

export interface IFinishingMaterial {
  id?: number;
  name?: string;
  description?: string | null;
  imagePath?: string;
  imageName?: string;
  materialType?: IMaterialType;
  isActive?: boolean;
  imageUrl?: string;
  materialTypeId?: string | number;
  finishingMaterialPrice?: IFinishingMaterialPrice;
  unitTypeId?: string | number;
}

export const defaultValue: Readonly<IFinishingMaterial> = {};
