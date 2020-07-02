import { APPS } from '.';

export declare enum PLAY_INITIATORS {
  NONE = 0,
  WIDGET = 1,
  API = 2,
  LAUNCHER = 3,
  TASK = 4,
  BRANCHING = 5,
  AUTOSTART = 6,
  PERMALINK = 7,
  BBCODE = 8,
  CHAT_AGENT = 9, // Could be LivePerson or other chat vendors
  SHOUTOUT = 10,
  WALKTHRU = 11,
  STEP = 12,
  ATTENTION_GRABBER = 13,
  FLOW_STEP = 14,
  COURSE = 15,
  CUSTOMIZATION = 16,
  RESTART_SWT = 17,
}

export type APP_INITIATOR = {
  type: PLAY_INITIATORS | number;
  appType: APPS | string;
  objectId: number | string;
};
