<template>
  <!-- <button @click="generate" :disabled="getSitemap.length < 1 || getSelectedDevices.length < 1">Generate</button> -->
  <button @click="generateScreenshots">Generate</button>
</template>

<script>
// ! Tests to get Puppeteer running
// import path from "path";
// import { remote } from "electron";
// const { spawn } = require("child_process");
// var childProcess = require("child_process");
// const { fork, spawn } = require("child_process");
// // const { fork, spawn } = require("child_process");
// const path = require("path");
// const { ipcRenderer } = require("electron");

const { spawn } = require("child_process");
const path = require("path");

export default {
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
  methods: {
    // TODO: run `../../plugins/puppeteer.js` from there
    generateScreenshots() {
      // TODO: send the following parameters with it
      const devices = this.getSelectedDevices;
      const sitemap = this.getSitemap;
      const path = this.getPath;

      const ls = spawn(process.execPath, [
        path.join(__dirname, "../../plugins/puppeteer.js"),
      ]);

      ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on("data", data => {
        console.error(`stderr: ${data}`);
      });

      ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
      });
    },
    // ! Not working
    // generateFork() {
    //   const p = fork(
    //     path.join(__dirname, "../../plugins/puppeteer.js"),
    //     ["hello"],
    //     {
    //       stdio: ["pipe", "pipe", "pipe", "ipc"],
    //     },
    //   );
    //   p.stdout.on("data", d => {
    //     writeData("[stdout-renderer-fork] " + d.toString());
    //   });
    //   p.stderr.on("data", d => {
    //     writeData("[stderr-renderer-fork] " + d.toString());
    //   });
    //   p.send("hello");
    //   p.on("message", m => {
    //     writeData("[ipc-main-fork] " + m);
    //   });
    //   function writeData(data) {
    //     console.warn(data);
    //   }
    // },
    // ! Not working
    // generateSpawn() {
    //   let sp = childProcess.spawn(
    //     process.execPath,
    //     ["../../plugins/puppeteer.js"],
    //     {
    //       stdio: "pipe",
    //     },
    //   );
    //   sp.unref();
    //   sp.on("error", err => {
    //     console.log("failed to start process", err);
    //   });
    //   sp.on("exit", (code, signal) => {
    //     console.log(`child process exited with code ${code}`);
    //     // createProc();
    //   });
    //   //       spawn(process.execPath, ["./go.js"], { stdio: "ignore" });
    //   // console.warn("test");
    //   // spawn(
    //   //   process.execPath,
    //   //   [path.join(__dirname, "plugins/puppeteer.js"), "args"],
    //   //   {
    //   //     stdio: "pipe",
    //   //   },
    //   // );
    // },
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