export interface IComponentMaterialOptionType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IComponentMaterialOptionType> = {
  isActive: false,
};
