import { IPriceType } from 'app/shared/model/price-type.model';

export interface IPropertyOptionTypePrice {
  id?: number;
  netSellingPrice?: number | null;
  netPurchasingPrice?: number | null;
  wastePercent?: number | null;
  priceType?: IPriceType | null;
  priceTypeId?: number | string;
}

export const defaultValue: Readonly<IPropertyOptionTypePrice> = {};
