export interface IPriceType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IPriceType> = {
  isActive: false,
};
