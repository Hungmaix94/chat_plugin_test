import { IPageType } from 'app/shared/model/page-type.model';
import { IContentType } from 'app/shared/model/content-type.model';

export interface IContent {
  id?: number;
  contentKey?: string;
  contentText?: string | null;
  imagePath?: string | null;
  pageType?: IPageType;
  contentType?: IContentType;
}

export const defaultValue: Readonly<IContent> = {};
