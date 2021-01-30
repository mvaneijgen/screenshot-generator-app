<template>
  <div class="progress">
    <transition name="custom" mode="out-in">
      <div class="inner" v-if="!done" key="generating">
        <h1>Taking screenshots...</h1>
        <div class="counter">{{count}}/{{getSitemapLength * getSelectedDevices.length}} pages</div>
        <h3>Device: {{device}}</h3>
        <transition-group name="custom" tag="ul">
          <li v-for="(item) in log" :key="item.id">{{item.url}}</li>
        </transition-group>
        {{'status ' + done}}
      </div>
      <div class="inner" v-if="done" key="done">
        ✅
        <button>Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import { mapGetters } from "vuex";

export default {
  name: "Progress",
  data() {
    return {
      count: 0,
      device: "",
      log: [],
      done: false,
    };
  },
  computed: {
    ...mapGetters({
      getSitemapLength: "getSitemapLength",
      getSelectedDevices: "getSelectedDevices",
    }),
  },
  methods: {},
  mounted() {
    catcher = setMessage.bind(this);
    // catcher2 = setMessage.bind(this);
  },
};

//------------------------------------------------------//
// Logic to get data from ipCRenderer
//------------------------------------------------------//
let catcher = 0;

function setMessage(args) {
  this.count++;
  this.device = args[0];
  this.log.unshift({ url: args[1], id: Date.now() });
  this.done = args[2];
}

ipcRenderer.on("process", function (event, args) {
  catcher(args);
});
// ipcRenderer.on("process", function (event, args) {
//   catcher2(args);
// });
// END Logic to get data from ipCRenderer  -------------------------------------//
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  > .inner {
    padding: $base-margin * 2;
    margin-top: 100px;
    width: 40vmax;
    height: 40vmax;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    background: $brand-one;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
h1 {
  font-size: 20px;
}
.counter {
  font-size: 30px;
  font-weight: 700;
}
ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  height: 4em;
  font-size: 14px;
  li {
    list-style: none;
    opacity: 0;
    &:nth-child(1) {
      opacity: 1;
    }
    &:nth-child(2) {
      opacity: 0.6;
    }
    &:nth-child(3) {
      opacity: 0.3;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>