import Vue from "vue";
import Vuex from "vuex";
import {Result, State} from "./types";

Vue.use(Vuex);

const store = new Vuex.Store<State>({
  state: {
    payoutSettingsPopupOpened: false,
    couponCodePopupOpened: false,
    payoutMethod: "percentage", // percentage | amount
    loader: {
      loading: false,
      text: undefined
    },
    widgets: [
      {
        number: 1, // Current number of widget
        address: "",
        delay: 12,
        percentage: 100,
        amount: ""
      }
    ],
    result: {
      address: "",
      code: "",
      mix: "",
      payout_1: null
    }
  },
  mutations: {
    // Single widget specific mutations
    setWidgetAddress(state, widget: {index: number; address: string}) {
      state.widgets[widget.index].address = widget.address;
    },
    setWidgetDelay(state, widget: {index: number; delay: number}) {
      state.widgets[widget.index].delay = widget.delay;
    },
    setWidgetPercentage(state, widget: {index: number; percentage: number}) {
      state.widgets[widget.index].percentage = widget.percentage;
    },
    setWidgetAmount(state, widget: {index: number; amount: number}) {
      state.widgets[widget.index].amount = widget.amount.toString();
    },
    // Global widget mutations
    setPayoutMethod(state, method: "percentage" | "amount") {
      state.payoutMethod = method;
    },
    toggleSettingsPopup(state, opened?: boolean) {
      // If new state is provided the assign that else inverse the current state
      state.payoutSettingsPopupOpened =
        typeof opened === "boolean" ? opened : !state.payoutSettingsPopupOpened;
    },
    toggleCouponPopup(state, opened?: boolean) {
      // If new state is provided the assign that else inverse the current state
      state.couponCodePopupOpened =
        typeof opened === "boolean" ? opened : !state.couponCodePopupOpened;
    },
    // Widget manipulation mutations
    addWidget(state) {
      const percentage = state.widgets.length == 2 ? 12 : 16;

      state.widgets.length < 3 &&
        state.widgets.push({
          number: state.widgets.length + 1,
          address: "",
          delay: 16,
          percentage,
          amount: ""
        });
    },
    removeWidget(state) {
      state.widgets.length > 1 && state.widgets.pop();
    },
    setResult(state, result: Result) {
      state.result = result;
    },
    setLoader(state, loading?: boolean, text?: string) {
      state.loader.loading = typeof loading === "boolean" ? loading : !state.loader.loading;
      state.loader.text = text ?? undefined;
    }
  },
  getters: {
    totalWidgets: (state) => {
      return state.widgets.length;
    },
    widgetByIndex: (state) => (index: number) => {
      return state.widgets[index];
    },
    totalPercentage: (state) =>
      state.widgets.map((widget) => widget.percentage).reduce((p, c) => p + c, 0),
    percentages: (state) => state.widgets.map((widget) => widget.percentage),
    totalAmount: (state) =>
      state.widgets.map((widget) => parseFloat(widget.amount)).reduce((p, c) => p + c, 0),
    bitcoinAddress: (state) => state.result.address
  }
});

export default store;
