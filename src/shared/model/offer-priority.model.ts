export interface IOfferPriority {
  id?: number;
  name?: string;
  description?: string | null;
  enumKey?: string;
  isActive?: boolean;
}

export const defaultValue: Readonly<IOfferPriority> = {
  isActive: false,
};
