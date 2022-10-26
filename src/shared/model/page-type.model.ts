export interface IPageType {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IPageType> = {
  isActive: false,
};
