export interface IContactFormStatus {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IContactFormStatus> = {
  isActive: false,
};
