import { IOfferType } from 'app/shared/model/offer-type.model';
import { IOfferPriority } from 'app/shared/model/offer-priority.model';

export interface IOffer {
  id?: number;
  name?: string;
  nameEn?: string;
  description?: string | null;
  descriptionEn?: string | null;
  validFrom?: string;
  validTo?: string | null;
  imagePath?: string;
  imageUrl?: string;
  offerType?: IOfferType;
  offerPriority?: IOfferPriority;
  isActive?: boolean;
  offerPriorityId?: number;
  offerTypeId?: number;
  vatTypeId?: number;
  offerArrangements?: any;
}

export const defaultValue: Readonly<IOffer> = {};
