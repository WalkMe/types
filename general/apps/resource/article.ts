import { WalkMeDataItem } from '../../data';
import { ResourceType, ResourceDataItem } from '.';

export interface ArticleData extends ResourceDataItem {
  Type: ResourceType.Article;
}
