import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  state: {
    selectedDevices: [],
    //------------------------------------------------------//
    // 📱 Phones
    //------------------------------------------------------//
    phones: [
      {
        deviceName: "iPhone 4",
        width: 320,
        height: 480,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        touch: true,
        mobile: true,
        type: "phone"
      },
      {
        deviceName: "iPhone 5/SE",
        width: 320,
        height: 568,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        touch: true,
        mobile: true,
        type: "phone"
      },
      {
        deviceName: "iPhone 6/7/8/SE",
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
        touch: true,
        mobile: true,
        type: "phone"
      },
      {
        deviceName: "iPhone 6/7/8 Plus",
        width: 414,
        height: 736,
        deviceScaleFactor: 3,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
        touch: true,
        mobile: true,
        type: "phone"
      },
      // {
      //   deviceName: "iPhone SE 2020",
      //   width: 375,
      //   height: 667,
      //   deviceScaleFactor: 2,
      //   userAgent:
      //     "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
      //   touch: true,
      //   mobile: true,
      //   type: "phone"
      // },
      {
        deviceName: "iPhone X/11",
        width: 375,
        height: 812,
        deviceScaleFactor: 3,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
        touch: true,
        mobile: true,
        type: "phone"
      },
      {
        deviceName: "Samsung Galaxy S8/S9",
        width: 360,
        height: 740,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
        touch: true,
        mobile: true,
        type: "phone"
      },
      {
        deviceName: "Samsung Galaxy S10/S10+",
        width: 412,
        height: 869,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
        touch: true,
        mobile: true,
        type: "phone"
      },
    ],
    //------------------------------------------------------//
    // Tablets
    //------------------------------------------------------//
    tablets: [
      {
        deviceName: "iPad Mini",
        width: 1536,
        height: 2048,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        touch: true,
        mobile: true,
        type: "tablet"
      },
      {
        deviceName: "iPad",
        width: 1620,
        height: 2160,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        touch: true,
        mobile: true,
        type: "tablet",
      },
      {
        deviceName: "iPad Pro 11",
        width: 1668,
        height: 2388,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        touch: true,
        mobile: true,
        type: "tablet"
      },
      {
        deviceName: "iPad Pro 12.9",
        width: 2048,
        height: 2732,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        touch: true,
        mobile: true,
        type: "tablet"
      },
      {
        deviceName: "Blackberry PlayBook",
        width: 600,
        height: 1024,
        deviceScaleFactor: 1,
        userAgent:
          "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+",
        touch: true,
        mobile: true,
        type: "tablet"
      },
      {
        deviceName: "Kindle Fire HDX",
        width: 800,
        height: 1280,
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
        touch: true,
        mobile: true,
        type: "tablet"
      },
    ],
    //------------------------------------------------------//
    // 💻 Laptop
    //------------------------------------------------------//
    laptops: [
      {
        deviceName: "Laptop with touch",
        width: 1280,
        height: 950,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "laptop"
      },
      {
        deviceName: "Laptop with HiDPI screen",
        width: 1440,
        height: 900,
        deviceScaleFactor: 2,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "laptop"
      },
      {
        deviceName: "Laptop with MDPI screen",
        width: 1280,
        height: 800,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "laptop"
      }
    ],
    //------------------------------------------------------//
    // 🖥 Desktop
    //------------------------------------------------------//
    desktops: [
      {
        deviceName: "Wide screen",
        width: 1280,
        height: 950,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "desktop"
      },
      {
        deviceName: "27 iMac",
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "desktop",
      },
      {
        deviceName: "Moderate desktop",
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "desktop"
      }
    ],
    //------------------------------------------------------//
    // 🖥 Computers
    //------------------------------------------------------//
    computers: [
      {
        deviceName: "Wide screen",
        width: 1280,
        height: 950,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "desktop"
      },
      {
        deviceName: "27 iMac",
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "desktop",
      },
      {
        deviceName: "Moderate desktop",
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "desktop"
      },
      {
        deviceName: "Laptop with touch",
        width: 1280,
        height: 950,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "laptop"
      },
      {
        deviceName: "Laptop with HiDPI screen",
        width: 1440,
        height: 900,
        deviceScaleFactor: 2,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "laptop"
      },
      {
        deviceName: "Laptop with MDPI screen",
        width: 1280,
        height: 800,
        deviceScaleFactor: 1,
        userAgent: "",
        touch: false,
        mobile: true,
        type: "laptop"
      }
    ],
    url: "",
    sitemap: [],
    loading: false,
    path: '',
    pathChrome: '',
    customCSS: '* {background: yellow; }',
    generating: false,
    amount: 100,
    quality: 60,
    advanced: false,
  },
  actions: {
    RESET_SELECTED_DEVICES({ commit }) {
      commit('RESET_SELECTED_DEVICES');
    },
    ADD_SELECTED_DEVICES({ commit }, payload) {
      commit('ADD_SELECTED_DEVICES', payload);
    },
    REMOVE_SELECTED_DEVICES({ commit }, payload) {
      commit('REMOVE_SELECTED_DEVICES', payload);
    },
    SET_URL({ commit }, payload) {
      commit('SET_URL', payload);
    },
    SET_SITEMAP({ commit }, payload) {
      commit('SET_SITEMAP', payload);
    },
    SET_LOADING({ commit }, payload) {
      commit('SET_LOADING', payload);
    },
    SET_PATH({ commit }, payload) {
      commit('SET_PATH', payload);
    },
    SET_PATH_CHROME({ commit }, payload) {
      commit('SET_PATH_CHROME', payload);
    },
    SET_CUSTOM_CSS({ commit }, payload) {
      commit('SET_CUSTOM_CSS', payload);
    },
    SET_STATE({ commit }, payload) {
      commit('SET_STATE', payload);
    },
  },
  mutations: {
    SET_STATE(state, payload) {
      state[payload['key']] = payload['value'];
    },
    RESET_SELECTED_DEVICES(state) {
      state.selectedDevices = [];
    },
    ADD_SELECTED_DEVICES(state, payload) {
      state.selectedDevices = [...state.selectedDevices, payload];
    },
    REMOVE_SELECTED_DEVICES(state, payload) {
      // const index = state.selectedDevices.indexOf(payload);
      const index = state.selectedDevices.findIndex(
        x => x.deviceName == payload.deviceName,
      );
      state.selectedDevices.splice(index, 1);
    },
    SET_URL(state, payload) {
      state.url = payload;
    },
    SET_SITEMAP(state, payload) {
      state.sitemap = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_PATH(state, payload) {
      state.path = payload;
    },
    SET_PATH_CHROME(state, payload) {
      state.pathChrome = payload;
    },
    SET_CUSTOM_CSS(state, payload) {
      state.customCSS = payload;
    },
  },
  getters: {
    getAllDevices: state => {
      return [].concat(state.phones, state.tablets, state.laptops, state.desktops);
    },
    getTypeDevices: state => type => {
      return state[type];
    },
    getSelectedDevices: state => {
      return state.selectedDevices;
    },
    getSitemap: state => {
      return state.sitemap;
    },
    getLimitSitemap: (state, getters) => {
      // const array = [...state.sitemap];
      const array = state.sitemap;
      // function shuffleArray(array) {
      // 🃏 Shuffle 🔗 URLs
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      // }
      // ❌ Remove 🔗 URLs 
      return array.slice(0, getters.getSitemapLength);
    },
    getSitemapLength: state => {
      // return state.sitemap.length;
      return Math.round((state.sitemap.length / 100) * state.amount);
    },
    getURL: state => {
      return state.url;
    },
    getLoading: state => {
      return state.loading;
    },
    getPath: state => {
      return state.path;
    },
    getPathChrome: state => {
      return state.pathChrome;
    },
    getCustomCSS: state => {
      return state.customCSS;
    },
    getState: (state) => (payload) => {
      return state[payload];
    },
    getTotalMB: (state, getters) => {
      return ((getters.getSitemapLength * getters.getSelectedDevices.length) * (0.001 * state.quality)).toFixed(1);
    },
  }
})
