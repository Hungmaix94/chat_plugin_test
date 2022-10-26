export interface IUser {
  id?: any;
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  activated?: boolean;
  isActive?: boolean;
  langKey?: string;
  authorities?: any[];
  createdBy?: string;
  createdDate?: Date | null;
  lastModifiedBy?: string;
  lastModifiedDate?: Date | null;
  password?: string;
  languageId?: number;
  roleIds?: any[];
  phones?: any[];
}

export const defaultValue: Readonly<IUser> = {
  id: '',
  login: '',
  firstName: '',
  lastName: '',
  email: '',
  activated: true,
  langKey: '',
  authorities: [],
  roleIds: [],
  createdBy: '',
  createdDate: null,
  lastModifiedBy: '',
  lastModifiedDate: null,
  password: '',
};
