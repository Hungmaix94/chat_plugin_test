export interface ISectionType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<ISectionType> = {
  isActive: false,
};
