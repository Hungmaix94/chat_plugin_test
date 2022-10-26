import { IEquipment } from 'app/shared/model/equipment.model';
import { IEquipmentPropertyType } from 'app/shared/model/equipment-property-type.model';

export interface IEquipmentProperty {
  id?: number;
  equipment?: IEquipment;
  equipmentPropertyType?: IEquipmentPropertyType;
}

export const defaultValue: Readonly<IEquipmentProperty> = {};
