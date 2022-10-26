export interface IGlobalParam {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IGlobalParam> = {
  isActive: false,
};
