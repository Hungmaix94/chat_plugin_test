import { IComponentMaterialOption } from 'app/shared/model/component-material-option.model';

export interface IComponentMaterialSuboption {
  id?: number;
  psdImageLayerName?: string;
  componentMaterialOption?: IComponentMaterialOption;
  finishingMaterial?: IComponentMaterialOption;
}

export const defaultValue: Readonly<IComponentMaterialSuboption> = {};
