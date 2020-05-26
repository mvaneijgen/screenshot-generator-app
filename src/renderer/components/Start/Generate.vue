<template>
  <div>
    <!-- <button @click="generate" :disabled="getSitemap.length < 1 || getSelectedDevices.length < 1">Generate</button> -->
    <button @click="generateScreenshots">Generate</button>
    <button @click="thisDoesSomething">thisDoesSomething</button>
  </div>
</template>

<script>
const path = require("path");
const { spawn, fork } = require("child_process");

export default {
  methods: {
    // TODO: run `../../plugins/puppeteer.js` from here
    generateScreenshots() {
      // TODO: send the following parameters with it
      let child = spawn(
        "node",
        [path.join(__dirname, "../../plugins/puppeteer-testing.js")],
        { stdio: ["pipe", "inherit", "inherit"] },
      );
      child.on("error", function(err) {
        console.log("err on spawn ", err);
      });
      child.stdin.write("console.log('Hello from your parent')");
      child.stdin.end();
    },
    // ! Delete this block just for testing
    thisDoesSomething() {
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
    // ! END Delete this block just for testing
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