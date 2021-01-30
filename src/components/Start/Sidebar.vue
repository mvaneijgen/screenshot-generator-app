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
  computed: {
    getGenerating() {
      return this.$store.getters.getState("generating");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
aside {
  -webkit-app-region: drag;
  // position: relative;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: flex-start;
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