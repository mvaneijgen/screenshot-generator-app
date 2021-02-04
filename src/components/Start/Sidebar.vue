<template>
  <aside>
    <div id="logo">
      <span>Screenshot</span>
      <span>Generator</span>
    </div>
    <!-- <div class="tabs">
      <button @click="toggleAdvanced">Advanced</button>
    </div> -->
    <fieldset :disabled="getGenerating">
      <Sitemap />
      <FileStorage />
      <SidebarResult />
      <Generate />
    </fieldset>
    <div class="tabs">
      <button @click="toggleAdvanced" :class="{active: getState}">Advanced</button>
    </div>
  </aside>
</template>

<script>
import Sitemap from "@/components/Start/Sitemap";
import Generate from "@/components/Start/Generate";
import FileStorage from "@/components/Start/FileStorage";
import SidebarResult from "@/components/Start/SidebarResult";

export default {
  components: {
    Sitemap,
    Generate,
    FileStorage,
    SidebarResult,
  },
  data() {
    return {
      key: "advanced",
    };
  },
  computed: {
    getGenerating() {
      return this.$store.getters.getState("generating");
    },
    getState: {
      get() {
        return this.$store.getters.getState(this.key);
      },
      set(val) {
        return val;
      },
    },
  },
  methods: {
    toggleAdvanced() {
      this.$store.commit("SET_STATE", {
        key: this.key,
        value: (this.getState = !this.getState),
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
aside {
  position: relative;
  -webkit-app-region: drag;
}
.tabs {
  position: absolute;
  top: 50px;
  right: -30px;
  @include media-breakpoint-up(lg) {
    top: 50px;
    right: 35px;
    // right: 15px;
    transform-origin: top right;
  }
  transform: rotate(-90deg);
  z-index: 1100;
  display: flex;
  flex-direction: row-reverse;

  button {
    background-color: $brand-one;
    color: $brand-light;
    width: auto;
    padding: 10px;
    font-size: 16px;
    height: 35px;
    &.active,
    &:hover {
      transform: scale(1);
      background-color: $brand-dark-lighten;
      color: $brand-three;
    }
  }
}
#logo {
  margin-bottom: 40px;
  span {
    font-size: 60px;
    color: $brand-three;
    line-height: 1em;
    font-weight: 900;

    &:last-of-type {
      color: $brand-light;
      font-size: 20px;
      // font-weight: 400;
      text-transform: uppercase;
      background-color: $brand-one;
      z-index: 900;
      position: relative;
      display: inline-block;
      padding: 5px 10px;
      text-align: right;
      transform: translateY(-0.7em);
      margin-left: 10px;
    }
  }
}
fieldset {
  border: 0;
  padding: 0;
  width: 100%;
}
[disabled="disabled"] {
  color: rgba($brand-light, 0.3);
  cursor: not-allowed;
}
</style>