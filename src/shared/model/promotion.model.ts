export interface IPromotion {
  id?: number;
  promotionValue?: number;
  name?: string;
  nameEn?: string;
  description?: string | null;
  descriptionEn?: string | null;
  validFrom?: string;
  validTo?: string | null;
  isActive?: boolean;
  status?: boolean;
  arrangementIds?: any;
}

export const defaultValue: Readonly<IPromotion> = {};
