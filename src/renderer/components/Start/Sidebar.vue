<template>
  <aside>
    <div id="logo">
      <span>Screenshot</span>
      <span>Generator</span>
    </div>
    <Sitemap />
    <FileStorage />
    <SidebarResult />
    <ChromePath />
    <Generate />
  </aside>
</template>

<script>
import Sitemap from "@/components/Start/Sitemap";
import Generate from "@/components/Start/Generate";
import FileStorage from "@/components/Start/FileStorage";
import ChromePath from "@/components/Start/ChromePath";
import SidebarResult from "@/components/Start/SidebarResult";

export default {
  components: {
    Sitemap,
    Generate,
    FileStorage,
    ChromePath,
    SidebarResult,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
aside {
  -webkit-app-region: drag;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: flex-start;
}
#logo {
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
  i {
    transform: translateY(1px);
    display: inline-block;
    font-style: normal;
  }
}
</style>