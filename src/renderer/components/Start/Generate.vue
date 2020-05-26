<template>
  <div>
    <!-- <button @click="generate" :disabled="getSitemap.length < 1 || getSelectedDevices.length < 1">Generate</button> -->
    <button @click="generateScreenshots">Generate</button>
    <button @click="thisDoesSomething">thisDoesSomething</button>
  </div>
</template>

<script>
// // const { spawn } = require("child_process");
// // const { ipcMain } = require("electron");
// // const { remote } = require("electron");
// // const { ipcRenderer } = require("electron");
// const electron = require("electron");
// const ipc = electron.ipcRenderer;
// const { puppeteerScript } = require("../../plugins/puppeteer.js");
const { ipc } = require("electron");

const path = require("path");
const { spawn, fork } = require("child_process");

export default {
  methods: {
    generateScreenshots() {
      let child = spawn(
        "node",
        [path.join(__dirname, "../../plugins/puppeteer.js")],
        { stdio: ["pipe", "inherit", "inherit"] },
      );
      child.on("error", function(err) {
        console.log("err on spawn ", err);
      });
      child.stdin.write("console.log('Hello from your parent')");
      child.stdin.end();
    },
    // TODO: run `../../plugins/puppeteer.js` from there
    thisDoesSomething() {
      // TODO: send the following parameters with it
      console.warn(
        spawn("node", [path.join(__dirname, "../../plugins/puppeteer.js")]),
      );
      const child = spawn("node", [
        path.join(__dirname, "../../plugins/puppeteer.js"),
      ]);

      // const child = spawn("node", ["-v"]);

      // I don't know what this does
      child.stdout.on("data", function(data) {
        console.log(data);
      });

      // I don't know what this does
      child.stderr.on("data", function(data) {
        console.log(data);
      });

      console.warn(child);
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