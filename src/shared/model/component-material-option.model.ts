import { IComponents } from 'app/shared/model/component.model';
import { IComponentMaterialOptionType } from 'app/shared/model/component-material-option-type.model';

export interface IComponentMaterialOption {
  id?: number;
  name?: string | null;
  description?: string | null;
  component?: IComponents;
  componentMaterialOptionType?: IComponentMaterialOptionType;
}

export const defaultValue: Readonly<IComponentMaterialOption> = {};
