<template>
  <div>
    <transition name="custom" mode="out-in">
      <div id="resutls" v-if="getSitemap.length < 1 && !getLoading" key="noSitemap">
        <p>First step</p>
        <h3>Add the url to your sitemap</h3>
      </div>
      <div id="resutls" v-else-if="getPath == ''">
        <p>Next step</p>
        <h3>Select the path of where you want the screenshots to be saved</h3>
      </div>
      <div id="resutls" v-else-if="getSelectedDevices.length < 1" key="noDevices">
        <p>Last step</p>
        <h3>Select at least one device from the list</h3>
      </div>
      <div id="resutls" v-else-if="getLoading" key="loading">
        <p>Loading</p>
        <h3>Fetching your sitemap</h3>
      </div>
      <div id="resutls" v-else-if="getSitemap.length >= 1 && getSelectedDevices.length >= 1" key="result">
        <p>Going to generate</p>
        <h3>📱 {{getSelectedDevices.length}} <span> devices</span> x 📃 {{getSitemap.length}} <span>pages</span></h3>
        <p>This will result in</p>
        <h3>🖼 {{calcScreenshots}} <span>screenshots</span> (~{{getTotalMB}}MB)</h3>
      </div>
    </transition>

  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getSitemapLenght: "getSitemapLenght",
      getSelectedDevices: "getSelectedDevices",
      getTotalMB: "getTotalMB",
    }),
    getSelectedDevices() {
      return this.$store.getters["getSelectedDevices"];
    },
    getLoading() {
      return this.$store.getters["getLoading"];
    },
    getPath() {
      return this.$store.getters["getPath"];
    },
    getSitemap() {
      return this.$store.getters["getSitemap"];
    },
    getQuality() {
      return this.$store.getters.getState("quality");
    },
    getURL() {
      return this.$store.getters["getURL"]
        .replace("https://", "")
        .replace("http://", "")
        .replace("//", "")
        .split("/")
        .join("/<br>");
    },
    calcScreenshots() {
      return this.getSelectedDevices.length * this.getSitemap.length;
    },
    total() {
      return (
        this.getSitemapLenght *
        this.getSelectedDevices.length *
        (0.01 * this.getQuality)
      ).toFixed(1);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
#resutls {
  width: 100%;
  background-color: $brand-three;
  padding: $base-margin;
  font-size: 16px;
  margin-bottom: $base-margin * 3;
  p {
    margin-bottom: 0;
  }
  h3 {
    hyphens: auto;
  }
}
/* Item in view leave to this postion */
.custom-leave,
.custom-leave-to {
  // opacity: 0;
  transform: scale(0);
}
/* Item NOT in view starts in this postion */
.custom-enter {
  // opacity: 0;
  transform: scale(0);
}
/* Item NOT goes to this postion */
.custom-enter-to {
  // opacity: 1;
  transform: scale(1);
}
/* Properties active during the whole duration */
.custom-enter-active,
.custom-leave-active {
  transition: transform, opacity;
  transition-duration: 600ms;
  transition-timing-function: ease;
  // transition-delay: 300ms;
}
</style>