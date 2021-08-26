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
    payoutMethod: "percentages",
    widgets: []
  },
  mutations: {}
});

export default store;
