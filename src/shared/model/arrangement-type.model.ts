export interface IArrangementType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IArrangementType> = {
  isActive: false,
};
