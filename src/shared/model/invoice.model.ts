import { Moment } from 'moment';
import { IInvoiceDetail } from 'app/shared/model/invoice-detail.model';
import { IInvoiceAggregate } from 'app/shared/model/invoice-aggregate.model';

export interface IInvoice {
  id?: number;
  invoiceId?: number;
  invoiceNumber?: string;
  newInvoiceNumber?: string;
  invoiceDate?: Moment;
  newInvoiceDate?: Moment;
  dueDate?: Moment;
  newDueDate?: Moment;
  serviceDate?: Moment;
  newServiceDate?: Moment;
  createPlace?: string;
  bankAccountNo?: string;
  newBankAccountNo?: string;
  currAbbreviation?: string;
  invoicePath?: string;
  isPaid?: boolean;
  paidDate?: Moment;
  isProforma?: boolean;
  invoiceDetails?: IInvoiceDetail[];
  correctingInvoiceDetails?: IInvoiceDetail[];
  customerCustomerName?: string;
  customerId?: number;
  paymentId?: number;
  invoiceAggregates?: IInvoiceAggregate[];
  correctingInvoiceAggregates?: IInvoiceAggregate[];
  reason?: string;
  newVatId?: number;
  newDetailDescription?: string;
  newDetailPrice?: number;
  newQuantity?: number;
  invoiceFullPath?: string;
  newInvoiceFullPath?: string;
  isCorrected?: boolean;
  correctingInvoice?: any;
  proformaInvoiceNumber?: string;
  proformaInvoiceId?: number;
  providerTransactions?: any;
  isActive?: any;
  reservationStatus?: any;
}

export const updatableCorrectingFields = [
  // 'id',
  'newBankAccountNo',
  'newVatId',
  'reason',
  'newDueDate',
  'newServiceDate',
  // 'newDetailPrice',
  // 'newDetailDescription',
  // 'newQuantity',
  'newDetails'
];
export const defaultValue: Readonly<IInvoice> = {
  isPaid: false,
  isProforma: false
};

export interface IInvoiceEntity {
  originalInvoice?: IInvoice;
  correctingInvoice?: IInvoice;
  previousCorrectingInvoice?: IInvoice;
}

export const defaultValueEntity: Readonly<IInvoiceEntity> = {};
