export interface IObjectConstructionType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IObjectConstructionType> = {
  isActive: false,
};
