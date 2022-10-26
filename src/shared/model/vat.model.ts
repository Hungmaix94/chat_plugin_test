export interface IVat {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
  vatRate?: number;
  vatTypeId?: number;
}

export const defaultValue: Readonly<IVat> = {
  isActive: false,
};
