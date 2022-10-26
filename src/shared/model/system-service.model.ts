export interface ISystemService {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<ISystemService> = {
  isActive: false,
};