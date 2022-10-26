import { IEquipmentPropertyType } from 'app/shared/model/equipment-property-type.model';
import { IPropertyOptionTypePrice } from 'app/shared/model/property-option-type-price.model';

export interface IEquipmentPropertyOptionType {
  id?: number;
  price?: number | null;
  imagePath?: string | null;
  imageUrl?: string | null;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
  equipmentPropertyType?: IEquipmentPropertyType | null;
  equipmentPropertyTypeId?: string | number;
  propertyOptionTypePrice?: IPropertyOptionTypePrice;
}

export const defaultValue: Readonly<IEquipmentPropertyOptionType> = {
  isActive: false,
};
