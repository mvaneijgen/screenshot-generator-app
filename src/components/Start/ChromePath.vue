<template>
  <div class="content">
    <div class="input">
      <label for="filePath">Path to Chrome</label>
      <input id="filePath" ref="input" :value="getPathChrome" disabled>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const { dialog } = require("electron").remote;

export default {
  data() {
    return {
      hasPath: false,
      path: "",
    };
  },
  computed: {
    ...mapGetters({ getPathChrome: "getPathChrome" }),
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
          properties: ["openFile"],
        })
        .then((result) => {
          const file = result.filePaths[0];
          console.warn(file);
          this.$refs.input.value = file;
          this.$store.dispatch("SET_PATH", file);
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

input:disabled {
  background-color: $brand-dark-lighten;
  color: $brand-three;
}
</style>