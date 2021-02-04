<template>
  <div class="progress">
    <transition name="custom" mode="out-in" appear>
      <div class="inner" v-if="!done" key="generating">
        <h1>Taking screenshots...</h1>
        <div class="counter">{{count}}/{{getSitemapLength * getSelectedDevices.length}} pages</div>
        <h3>{{device}}</h3>
        <transition-group name="custom" tag="ul">
          <li v-for="(item) in log" :key="item.id">{{item.url}}</li>
        </transition-group>
      </div>
      <div class="inner" v-if="done" key="done">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 20">
          <path d="M23.4383932,4.94689378 L20.6463932,2.14689378 C20.552589,2.05285208 20.4252205,2 20.2923932,2 C20.159566,2 20.0321975,2.05285208 19.9383932,2.14689378 L8.14639323,13.9468938 C8.05258896,14.0409355 7.92522049,14.0937876 7.79239323,14.0937876 C7.65956597,14.0937876 7.53219749,14.0409355 7.43839323,13.9468938 L4.64639323,11.1468938 C4.55258896,11.0528521 4.42522049,11 4.29239323,11 C4.15956597,11 4.03219749,11.0528521 3.93839323,11.1468938 L1.14639323,13.9468938 C0.951202258,14.1421437 0.951202258,14.4586439 1.14639323,14.6538938 L7.43839323,20.9468938 C7.53219749,21.0409355 7.65956597,21.0937876 7.79239323,21.0937876 C7.92522049,21.0937876 8.05258896,21.0409355 8.14639323,20.9468938 L23.4383932,5.64689378 C23.6289647,5.45247203 23.6289647,5.14131554 23.4383932,4.94689378 Z" transform="translate(-1 -2)" />
        </svg>

        <button @click="disableGenerating">Close</button>
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
  methods: {
    disableGenerating() {
      this.done = false;
      this.$store.commit("SET_STATE", {
        key: "generating",
        value: false,
      });
    },
  },
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
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    background: $brand-one;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
}
svg {
  fill: $brand-light;
  width: 160px;
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
button {
  position: absolute;
  bottom: 30px;
  text-transform: uppercase;
  font-size: 16px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  text-decoration: underline;
  width: auto;
  &:hover {
    transform: translate(-50%);
  }
  // width: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>