export interface PublishData {
  Id: number;
  IsModified: boolean;
  LastDeployStatusChangeDate: MSJSONDate;
  PublishStatus: PublishStatus;
}

export enum PublishStatus {
  Draft = 1,
  Published = 2,
  ReadyToDelete = 3,
  Deleted = 4,
  Archived = 5,
}

/**
 * https://stackoverflow.com/questions/206384/how-do-i-format-a-microsoft-json-date
 * Date in the format '/Date(1590504489000)/'
 * use new Date(parseInt(jsonDate.substr(6))) to parse.
 */
export type MSJSONDate = string;
