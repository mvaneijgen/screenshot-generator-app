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
    <div class=" description">Looking to add a custom Chrome path, add custom CSS, decrease screenshot quality or limit the amount of screeshots. <button @click="toggleAdvanced" class="btn-none">Take a look at the advacned settings</button>. </div>
  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    toggleAdvanced() {
      this.$store.commit("SET_STATE", {
        key: "advanced",
        value: (this.getAdvanced = !this.getAdvanced),
      });
    },
  },
  computed: {
    ...mapGetters({
      getSitemapLength: "getSitemapLength",
      getSelectedDevices: "getSelectedDevices",
      getTotalMB: "getTotalMB",
    }),
    // getSelectedDevices() {
    //   return this.$store.getters["getSelectedDevices"];
    // },
    getAdvanced() {
      return this.$store.getters.getState("advanced");
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
      return this.getSelectedDevices.length * this.getSitemapLength;
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
  margin-bottom: $base-margin;
  p {
    margin-bottom: 0;
  }
  h3 {
    hyphens: auto;
  }
}
.description {
  margin-bottom: $base-margin * 2;
}
/* Item in view leave to this postion */
</style>