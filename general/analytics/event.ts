import { APP_INITIATOR } from './initiators';

export type AnalyticsEvent = {
  type: string;
  data: AnalyticsEventData;
};

export interface AnalyticsEventData {
  type: string;
  oId?: number | string;
  oName?: string;
  pInit?: APP_INITIATOR;
  [key: string]: any;
}
