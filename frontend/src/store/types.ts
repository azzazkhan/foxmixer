export declare type PayoutMethod = "percentage" | "amount";

export interface Widget {
  number: number;
  address: string;
  delay: number;
  amount: string;
  percentage: number;
}

export interface Payout {
  address: string;
  delay: number;
  amount?: number | string;
  percentage?: number;
  time: string;
  timestamp: number;
}

export interface Result {
  loaded: boolean;
  address: string;
  code: string;
  mix: string;
  payout_1: Payout | null;
  payout_2?: Payout;
  payout_3?: Payout;
  created: string;
  created_min: string;
  expiry: string;
}

export interface Loader {
  loading: boolean;
  text?: string;
}

export interface State {
  payoutSettingsPopupOpened: boolean;
  couponCodePopupOpened: boolean;
  loader: Loader;
  payoutMethod: PayoutMethod;
  generated: boolean;
  widgets: Widget[];
  result: Result;
}
