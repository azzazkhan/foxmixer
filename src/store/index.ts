import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface Widget {
  payoutAddress: String;
  payoutDelay: Number;
  payoutAmount: Number; // If percentage then limit to 100%
}

interface State {
  payoutMethod: "percentages" | "amounts";
  widgets: Widget[];
}

const store = new Vuex.Store({
  state: {
    payoutSettingsPopupOpened: false,
    couponCodePopupOpened: false,
    payoutMethod: "percentage",
    widgets: [
      {
        number: 1,
        address: "",
        delay: 12,
        percent: 100,
        amount: ""
      }
    ]
  },
  mutations: {
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
    addWidget(state) {
      state.widgets.push({
        number: state.widgets.length,
        address: "",
        delay: 16,
        percent: 0,
        amount: ""
      });
    },
    removeWidget(state) {
      state.widgets.pop();
    }
  },
  getters: {
    widgetCount: (state) => {
      return state.widgets.length
    },
    widgetByIndex: (state) => (index: number) => {
      return state.widgets[index]
    }
  }
});

export default store;
