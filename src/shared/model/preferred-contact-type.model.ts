export interface IPreferredContactType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IPreferredContactType> = {
  isActive: false,
};
