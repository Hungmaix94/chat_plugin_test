export interface IInvoiceAggregate {
  id?: number;
  vatRate?: number;
  netAmount?: number;
  vatValue?: number;
  newVatRate?: number;
  newAmount?: number;
  newVatValue?: number;
}

export const defaultValue: Readonly<IInvoiceAggregate> = {};
