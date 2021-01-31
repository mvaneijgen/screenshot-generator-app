<template>
  <button @click="generateScreenshots" :disabled="getSitemap.length < 1 || getSelectedDevices.length < 1 || !getPath">Generate</button>
</template>

<script>
import { mapGetters } from "vuex";
import { ipcRenderer } from "electron";

export default {
  methods: {
    generateScreenshots() {
      this.$store.commit("SET_STATE", {
        key: "generating",
        value: true,
      });
      this.$store.commit("SET_STATE", {
        key: "advanced",
        value: false,
      });
      ipcRenderer.send("puppeteer", [
        JSON.stringify(this.getSitemap),
        JSON.stringify(this.getSelectedDevices),
        JSON.stringify(this.getPath),
        JSON.stringify(this.getPathChrome),
        JSON.stringify(this.getCustomCSS),
        JSON.stringify(this.getQuality),
      ]);
    },
  },
  computed: {
    ...mapGetters({
      getSelectedDevices: "getSelectedDevices",
      getSitemap: "getSitemap",
      getPath: "getPath",
      getPathChrome: "getPathChrome",
      getCustomCSS: "getCustomCSS",
    }),
    getQuality() {
      return this.$store.getters.getState("quality");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

button:disabled {
  background-color: $brand-dark-lighten;
  color: rgba($brand-light, 0.3);
  cursor: not-allowed;
  &:hover {
    transform: scale(1);
  }
}
</style>