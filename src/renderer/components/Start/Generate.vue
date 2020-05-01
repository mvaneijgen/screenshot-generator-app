<template>
  <button @click="generate" :disabled="getSitemap.length < 1 || getSelectedDevices.length < 1">Generate</button>
</template>

<script>
import path from "path";
import fs from "fs";
// import puppeteer from "puppeteer";
// import { generateScreenshots } from "@/plugins/puppeteer";

export default {
  computed: {
    getSelectedDevices() {
      return this.$store.getters["Devices/getSelectedDevices"];
    },
    getSitemap() {
      return this.$store.getters["Devices/getSitemap"];
    },
    // getChromiumExecPath() {
    //   return puppeteer
    //     .executablePath()
    //     .replace("app.asar", "app.asar.unpacked");
    // },
  },
  methods: {
    generate() {
      console.warn("generate");
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