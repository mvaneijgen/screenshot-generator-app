<template>
  <div class="content">
    <div class="input">
      <label for="folderPath">Save destination</label>
      <input id="folderPath" ref="input" @focus="getFileStorage" placeholder="Add save location">
      <div class="description">Select the path of where you want to store the screenshots. <button class="btn-none" @click="openDialog">Open location dialog</button>.</div>
    </div>
  </div>
</template>

<script>
import { remote } from "electron";
const dialog = remote.dialog;

export default {
  data() {
    return {
      hasPath: false,
      path: "",
    };
  },
  methods: {
    getFileStorage() {
      if (!this.hasPath) {
        this.openDialog();
      }
    },
    openDialog() {
      this.hasPath = true; // Prevent dialog from opening again

      dialog
        .showOpenDialog({
          properties: ["openDirectory"],
        })
        .then((result) => {
          const folder = result.filePaths[0];
          console.warn(folder);
          this.$refs.input.value = folder;
          this.$store.dispatch("SET_PATH", folder);
        });
    },
  },
};
</script>
