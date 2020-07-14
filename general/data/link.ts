export type WalkMeLink = WalkMeNewLink & {
  RelatedObjectId: number;
  groupId: number;
  Id: number;
};

export type WalkMeNewLink = {
  DeployableID: number;
  DeployableType: number;
  OrderIndex: number;
  Settings: any;
};
