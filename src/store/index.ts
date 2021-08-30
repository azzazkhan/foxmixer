import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    payoutSettingsPopupOpened: false,
    couponCodePopupOpened: false,
    payoutMethod: "percentage", // percentage | amount
    widgets: [
      {
        number: 1, // Current number of widget
        address: "",
        delay: 12,
        percentage: 100,
        amount: ""
      }
    ]
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
      state.widgets.length < 3 &&
        state.widgets.push({
          number: state.widgets.length + 1,
          address: "",
          delay: 16,
          percentage: 0,
          amount: ""
        });
    },
    removeWidget(state) {
      state.widgets.length > 1 && state.widgets.pop();
    }
  },
  getters: {
    totalWidgets: (state) => {
      return state.widgets.length;
    },
    widgetByIndex: (state) => (index: number) => {
      return state.widgets[index];
    }
  }
});

export default store;
