import { IComponents } from 'app/shared/model/component.model';
import { IComponentPropertyType } from 'app/shared/model/component-property-type.model';

export interface IComponentProperty {
  componentPropertyOptions?: any;
  id?: number;
  component?: IComponents;
  componentPropertyType?: IComponentPropertyType;
  componentPropertyTypeId?: any;
}

export const defaultValue: Readonly<IComponentProperty> = {};
