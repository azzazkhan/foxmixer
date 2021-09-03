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
  address: string;
  code: string;
  mix: string;
  payout_1: Payout | null;
  payout_2?: Payout;
  payout_3?: Payout;
}

export interface State {
  payoutSettingsPopupOpened: boolean;
  couponCodePopupOpened: boolean;
  payoutMethod: PayoutMethod;
  widgets: Widget[];
  result: Result;
}
