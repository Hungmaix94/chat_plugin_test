export interface IInvoiceDetail {
  id?: number;
  positionOrder?: number;
  detailName?: string;
  detailDescription?: string;
  newDetailDescription?: string;
  detailPrice?: number;
  newDetailPrice?: number;
  quantity?: number;
  newQuantity?: number;
  unitMeasure?: string;
  discount?: number;
  invoiceId?: number;
  vatId?: number;
  newVatId?: number;
  vatValue?: number;
  newVatValue?: number;
}

export const defaultValue: Readonly<IInvoiceDetail> = {};
