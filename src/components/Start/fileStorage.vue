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
import path from "path";
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
      dialog.showOpenDialog(
        {
          properties: ["openDirectory"],
        },
        (folder) => {
          if (folder === undefined) return;
          folder = folder[0];
          this.path = folder;
          this.hasPath = true;
          this.$refs.input.value = folder;
          this.$store.dispatch("SET_PATH", folder);
        },
      );
    },
  },
};
</script>
