<template>
  <button @click="generateScreenshots" :disabled="getSitemap.length < 1 || getSelectedDevices.length < 1">Generate</button>
  <!-- <button @click="generateScreenshots">Generate</button> -->
</template>

<script>
const path = require("path");
const { spawn, fork } = require("child_process");

export default {
  methods: {
    // TODO: run `../../plugins/puppeteer.js` from here
    generateScreenshots() {
      // const dataObj = {
      //   sitemap: this.getSitemap,
      //   devices: this.getSelectedDevices,
      //   savePath: this.getPath,
      // };
      console.warn(this.getSelectedDevices);
      // TODO: send the following parameters with it
      let child = spawn(
        "node",
        [
          path.join(__dirname, "../../plugins/puppeteer-testing.js"),
          JSON.stringify(this.getSitemap),
          JSON.stringify(this.getSelectedDevices),
          JSON.stringify(this.getPath),
        ],
        { stdio: ["pipe", "inherit", "inherit"] },
      );
      child.on("error", function(err) {
        console.log("err on spawn ", err);
      });
      child.stdin.write("console.log('Hello from your parent')");
      child.stdin.end();
    },
  },
  computed: {
    getSelectedDevices() {
      return this.$store.getters["Devices/getSelectedDevices"];
    },
    getSitemap() {
      return this.$store.getters["Devices/getSitemap"];
    },
    getPath() {
      return this.$store.getters["Devices/getPath"];
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