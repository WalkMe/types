import { TypeContainer } from '../apps';

export declare type ContentCollection = {
  [type in TypeName]?: Array<ContentItem>;
};
export interface ContentItem {
  /** The type name */
  type: TypeName | string;
  /** The item id (deployable id) */
  id: number | string;
  /** The item title */
  title: string;
  /** The item description */
  description: string;
  /** Keywords describing the item */
  keywords?: Array<string>;
  /**
        * A property bag for the item
        * Example:
        * {
          visible: true,
          accessible: true,
          isInternal: false
        }
        */
  properties: ContentProperties | any;
  /** Child items in case of collection */
  childNodes?: Array<ContentItem> | TypeContainer<ContentItem, any>;
}
export interface ContentProperties {
  /**
   * For - tabs
   */
  tabType?: TabType;
  /**
   * For - Search result icon
   */
  knowledgeBaseType?: string;
  /**
   * For - Search result
   */
  isInternal?: string;
  /**
   * For - Search result / Shuttle url field
   */
  url?: string;
  /**
   * For - tasks
   */
  isCompleted?: boolean;
  isCrossedOff?: boolean;
  isDisabled?: boolean;
}

export declare enum TabType {
  Help = 'help',
  Tasks = 'tasks',
}
export interface DataOptions {
  /**
   * Defines weather the API should return data that was segmented out
   * Default: false
   */
  segmentation?: boolean;
  /**
   * If defined, the API will return only items for the defined types
   */
  types?: Array<TypeName | string>;
  /**
   * Forces new data to be fetched from the cdn / server.
   * Default: false
   */
  refresh?: boolean;
}
export declare type ContentObject = object;

export enum TypeName {
  Unknown = 'unknown',
  SmartTipSet = 'smartTipSet',
  Video = 'video',
  Article = 'article',
  Content = 'content',
  Launcher = 'launcher',
  ShoutOut = 'shoutOut',
  Shuttle = 'shuttle',
  SmartWalkThru = 'smartwalkthru',
  Survey = 'survey',
  Task = 'task',
  Course = 'course',
  Lesson = 'lesson',
  Walkthru = 'walkthru',
  Category = 'category',
  Tab = 'tab',
  Experiments = 'experiments',
  SearchProviderUrl = 'searchProviderUrl',
  Tag = 'tag',
  TrackedElement = 'trackedElement',
  TrackedPage = 'trackedPage',
  SupportItem = 'support',
  SearchResult = 'searchResult',
  HelpDesk = 'helpDesk',
  Folder = 'folder',
  BusinessSolution = 'swtOrSTSet',
}

export enum TypeId {
  Unknown = -1,
  Walkthru = 0,
  Task = 1,
  Launcher = 2,
  LabelGroup = 3,
  Survey = 4,
  AbExperiment = 5,
  Category = 6,
  Content = 7,
  Collection = 8,
  Shuttle = 9,
  Tag = 10,
  ShoutOut = 14,
  ConditionBlock = 17,
  BusinessSolution = 19,
  SmartTipSet = 19,
  SmartWalkThru = 19,
  Lesson = 20,
  Course = 21,
  TrackedPage = 22,
  Spotlight = 23,
  Tooltip = 24,
  TrackedElement = 25,
  SearchProviderUrl = 26,
  Space = 27,
  Folder = 28,
  ActionBot = 29,
  ActionBotConversation = 30,
  Menu = 31,
}
export declare type playByIdOptions = {
  subItemId?: number;
};
