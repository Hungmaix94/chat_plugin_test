import { IEquipmentProperty } from 'app/shared/model/equipment-property.model';
import { IFinishingMaterial } from 'app/shared/model/finishing-material.model';
import { IUnitType } from 'app/shared/model/unit-type.model';
import { IEquipmentPropertyOptionType } from 'app/shared/model/equipment-property-option-type.model';

export interface IEquipmentPropertyOption {
  id?: number;
  value?: number | null;
  name?: string;
  description?: string | null;
  equipmentProperty?: IEquipmentProperty | null;
  finishingMaterial?: IFinishingMaterial | null;
  unitType?: IUnitType | null;
  equipmentPropertyOptionType?: IEquipmentPropertyOptionType | null;
}

export const defaultValue: Readonly<IEquipmentPropertyOption> = {};
