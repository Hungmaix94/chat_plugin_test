import { ISystemService } from 'app/shared/model/system-service.model';

export interface IService {
  id?: number;
  name?: string;
  description?: string | null;
  validFrom?: string;
  validTo?: string | null;
  imagePath?: string;
  imageUrl?: string;
  systemService?: ISystemService;
  systemServiceId?: number;
  isActive?: boolean;
}

export const defaultValue: Readonly<IService> = {};
