import { IComponentProperty } from 'app/shared/model/component-property.model';
import { IFinishingMaterial } from 'app/shared/model/finishing-material.model';
import { IUnitType } from 'app/shared/model/unit-type.model';
import { IComponentPropertyOptionType } from 'app/shared/model/component-property-option-type.model';

export interface IComponentPropertyOption {
  id?: number;
  value?: number | null;
  name?: string;
  description?: string | null;
  componentProperty?: IComponentProperty | null;
  finishingMaterial?: IFinishingMaterial | null;
  unitType?: IUnitType | null;
  componentPropertyOptionType?: IComponentPropertyOptionType | null;
  componentPropertyId?: number;
}

export const defaultValue: Readonly<IComponentPropertyOption> = {};
