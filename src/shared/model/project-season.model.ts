export interface IProjectSeason {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IProjectSeason> = {
  isActive: false,
};