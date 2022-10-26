import { IUnitType } from 'app/shared/model/unit-type.model';

export interface IFinishingMaterialPrice {
  id?: number;
  netSellingPrice?: number;
  netPurchasingPrice?: number;
  wastePercent?: number;
  unitType?: IUnitType;
  unitTypeId?: number;
}

export const defaultValue: Readonly<IFinishingMaterialPrice> = {};
