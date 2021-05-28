import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fb: 16,
    ratio: 1.14,      
  },
  modules: {},
  mutations: {
    // SET_SCHEDULE(state, schedule) {
    //     state.schedule = schedule;
    //   },      
      SET_SETTINGS(state, { fb, ratio } ) {
          state.fb = fb
          state.ratio = ratio


      }
  },
  actions: {

    // fetchSchedule({ commit }) {
    //     ScheduleServices.getSchedule().then((response) => {
    //       commit("SET_SCHEDULE", response.data);
    //       console.log("Schedule has been fetched:", response); // <--- here
    //     });

    setSettings( {commit}, { fb, ratio } ) {
        commit("SET_SETTINGS", { fb, ratio });

    //   commit("DELETE_FROM_SCHEDULE_CHANGES", {
    //     dateComponents,
    //     hour,
    //   });        
    }
  },
});
