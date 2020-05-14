<template>
  <!-- <button @click="generate" :disabled="getSitemap.length < 1 || getSelectedDevices.length < 1">Generate</button> -->
  <button @click="generate">Generate</button>
</template>

<script>
// import path from "path";
// import { remote } from "electron";
// const { spawn } = require("child_process");

const { fork, spawn } = require("child_process");
const path = require("path");
const { ipcRenderer } = require("electron");

export default {
  computed: {
    getSelectedDevices() {
      return this.$store.getters["Devices/getSelectedDevices"];
    },
    getSitemap() {
      return this.$store.getters["Devices/getSitemap"];
    },
  },
  methods: {
    generate() {
      // console.warn("test");
      // spawn(
      //   process.execPath,
      //   [path.join(__dirname, "plugins/puppeteer.js"), "args"],
      //   {
      //     stdio: "pipe",
      //   },
      // );

      const p = fork(
        path.join(__dirname, "../../plugins/puppeteer.js"),
        ["hello"],
        {
          stdio: ["pipe", "pipe", "pipe", "ipc"],
        },
      );
      p.stdout.on("data", d => {
        writeData("[stdout-renderer-fork] " + d.toString());
      });
      p.stderr.on("data", d => {
        writeData("[stderr-renderer-fork] " + d.toString());
      });
      p.send("hello");
      p.on("message", m => {
        writeData("[ipc-main-fork] " + m);
      });
      function writeData(data) {
        console.warn(data);
      }
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