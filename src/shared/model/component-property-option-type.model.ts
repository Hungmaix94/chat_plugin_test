import { IComponentPropertyType } from 'app/shared/model/component-property-type.model';
import { IPropertyOptionTypePrice } from 'app/shared/model/property-option-type-price.model';

export interface IComponentPropertyOptionType {
  id?: number;
  price?: number | null;
  imagePath?: string | null;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
  componentPropertyType?: IComponentPropertyType | null;
  componentPropertyTypeId?: string | number;
  materialTypeId?: string | number;
  propertyOptionTypePrice?: IPropertyOptionTypePrice;
  imageUrl?: string | null;
}

export const defaultValue: Readonly<IComponentPropertyOptionType> = {
  isActive: false,
};
