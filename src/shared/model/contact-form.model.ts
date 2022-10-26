import { IPreferredContactType } from 'app/shared/model/preferred-contact-type.model';
import { IContactFormStatus } from 'app/shared/model/contact-form-status.model';

export interface IContactForm {
  id?: number;
  contactNumber?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  messageContent?: string;
  rejectionReason?: string | null;
  preferredContactType?: IPreferredContactType;
  contactFormStatus?: IContactFormStatus;
  contactFormStatusId?: number;
  preferredContactTypeId?: number;
  preferredTimeTo?: string;
  preferredTimeFrom?: string;
  preferredDateTo?: any;
  preferredDateFrom?: any;
}

export const defaultValue: Readonly<IContactForm> = {};
