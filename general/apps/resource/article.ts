import { WalkMeDataItem } from '../../data';
import { ResourceType } from '.';

export interface ArticleData extends WalkMeDataItem {
  Description: string;
  Url: string;
  Type: ResourceType.Article;
}
