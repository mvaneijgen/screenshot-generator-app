<template>
  <button @click="generateScreenshots" :disabled="getSitemap.length < 1 || getSelectedDevices.length < 1 || !getPath">Generate</button>
  <!-- <button @click="generateScreenshots">Generate</button> -->
</template>

<script>
// window.ipcRenderer = ipcRenderer;

import { ipcRenderer } from "electron";
// window.ipcRenderer = ipcRenderer;
export default {
  methods: {
    generateScreenshots() {
      ipcRenderer.send("puppeteer", [
        JSON.stringify(this.getSitemap),
        JSON.stringify(this.getSelectedDevices),
        JSON.stringify(this.getPath),
        JSON.stringify(this.getPathChrome),
      ]);
      // ipcRenderer.send("clicktest", "banaan");
      // let child = spawn(
      //   "node",
      //   [
      //     path.join(__dirname, "../../plugins/puppeteer.js"),
      //     JSON.stringify(this.getSitemap),
      //     JSON.stringify(this.getSelectedDevices),
      //     JSON.stringify(this.getPath),
      //     JSON.stringify(this.getPathChrome),
      //   ],
      //   {
      //     stdio: ["pipe", "inherit", "inherit"],
      //   },
      // );
      // console.warn(child);
      // child.on("error", function (err) {
      //   console.log("err on spawn ", err);
      // });
      // child.stdin.write("console.log('Hello from your parent')");
      // child.stdin.end();
    },
  },
  computed: {
    getSelectedDevices() {
      return this.$store.getters["getSelectedDevices"];
    },
    getSitemap() {
      return this.$store.getters["getSitemap"];
    },
    getPath() {
      return this.$store.getters["getPath"];
    },
    getPathChrome() {
      return this.$store.getters["getPathChrome"];
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