import { IOffer } from 'app/shared/model/offer.model';

export interface IOrder {
  id?: number;
  orderNumber?: string;
  proformaInvoiceId?: number;
  billedDate?: string | null;
  paymentDate?: string | null;
  offer?: IOffer;
  providerPaymentUrl?: string;
  orderStatusTypeId?: any;
}

export const defaultValue: Readonly<IOrder> = {};
