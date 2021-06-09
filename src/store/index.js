import Vue from "vue";
import Vuex from "vuex";
import Services from '@/services/services.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fb: 16,
    ratio: 1.14,      
    color: '#000000',
    fontWeight: '',
    fontFamily: '',

    fonts: {}
  },

  modules: {},

  mutations: {
    // SET_SCHEDULE(state, schedule) {
    //     state.schedule = schedule;
    //   },      
      SET_SETTINGS(state, { fb, ratio, colorHex, fontWeight, fontFamily } ) {
          state.fb = fb
          state.ratio = ratio
          state.color = colorHex,
          state.fontWeight = fontFamily,
          state.fontFamily = fontWeight

      },

      SET_FONTS(state, data) {
        state.fonts = data.items
      }
  },

  actions: {

    // fetchSchedule({ commit }) {
    //     ScheduleServices.getSchedule().then((response) => {
    //       commit("SET_SCHEDULE", response.data);
    //       console.log("Schedule has been fetched:", response); // <--- here
    //     });

    setSettings( {commit}, { fb, ratio, colorHex, fontWeight, fontFamily } ) {
        commit("SET_SETTINGS", { fb, ratio, colorHex, fontWeight, fontFamily });

    //   commit("DELETE_FROM_SCHEDULE_CHANGES", {
    //     dateComponents,
    //     hour,
    //   });        
    },


    fetchFonts({ commit } ) {
        Services.getFonts()        
        .then(response => {
            commit('SET_FONTS', response.data)
            console.log('Fonts from GoogleFonts has been fetched:', response) // <--- here
        } )
        .catch(error => {
            console.log('services.js: There was an error: ' + error.message) // <--- here
            // const notification = {
            //     type: "error",
            //     object: "There was a problem fetching data: " + error.message,
            // }
            // dispatch('notifications/add', notification, { root: true } );
        })
    }
  },

  getters: {
      getInitialFonts: state => {
        //   return state.value;

        // const allFonts = state.fonts;
        const quantity = 10;
        let fonts = []

        for (let index = 0; index < quantity; index++) {
            // const element = array[index];
            // fonts.push(allFonts[index])            
            fonts.push(state.fonts[index])     
            // console.log('Текущий шрифт');       
            // console.log(state.fonts[index]);  // +

            // console.log('Новый массив fonts');       
            // console.log(fonts);       // +
        }

        return fonts;
      },

      getSearchResults: state => (inputText) => {

        let fonts = state.fonts;
        // console.log(fonts.length);
        // let result = inputText;

        // let result = fonts.find(function(item, index, array) {
        //     // если true - возвращается текущий элемент и перебор прерывается
        //     // если все итерации оказались ложными, возвращается undefined
        // });

        // let result = fonts.filter(function(item, index, array) {
        // let result = fonts.filter(function(item) {
        //     // если true - элемент добавляется к результату, и перебор продолжается
        //     // возвращается пустой массив в случае, если ничего не найдено

        //     // if ( item.family == inputText )
        //     item.family == inputText
        // });   

        // v.3  
        // let result = fonts.filter( item => item.family == inputText ) // +;   

        // v.4
        let result = fonts.filter( 
            // item => item.family == inputText

            // return phonesItem.name.toLowerCase().includes(keyWordText.toLowerCase());
            item => item.family.toLowerCase().includes(inputText.toLowerCase())
            // item.family.toLowerCase().includes(inputText.toLowerCase())
        );
        
        // let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
        // alert(lengths); // 5,7,6

        let resultFixed = result.slice(0, 9)      

        // return 'Результат: ' + result;
        // return  result;
        return  resultFixed;
      }
  }
});
