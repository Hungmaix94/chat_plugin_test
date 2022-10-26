export interface IUnitType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IUnitType> = {
  isActive: false,
};
