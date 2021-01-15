<template>
  <div class="content">
    <div class="input">
      <label for="folderPath">Path to Chrome</label>
      <input id="folderPath" ref="input" @focus="getFileStorage" placeholder="Add save location" :value="getPathChrome">
      <div class="description">Select the path where you've installed Google Chrome <button class="btn-none" @click="openDialog">Open location dialog</button>.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { remote } from "electron";
const dialog = remote.dialog;
import path from "path";

export default {
  data() {
    return {
      hasPath: false,
      path: "",
    };
  },
  computed: {
    ...mapGetters({ getPathChrome: "Devices/getPathChrome" }),
  },
  methods: {
    getFileStorage() {
      if (!this.hasPath) {
        this.openDialog();
      }
    },
    openDialog() {
      dialog.showOpenDialog(
        {
          properties: ["openFile"],
        },
        (item) => {
          if (item === undefined) return;
          console.warn(item);
          item = item[0];
          this.path = item;
          this.hasPath = true;
          this.$refs.input.value = item;
          this.$store.dispatch("Devices/SET_PATH_CHROME", item);
        },
      );
    },
  },
};
</script>
