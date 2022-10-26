export interface IMaterialType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IMaterialType> = {
  isActive: false,
};
