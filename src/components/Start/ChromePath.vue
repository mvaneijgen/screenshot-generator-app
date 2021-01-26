<template>
  <div class="content">
    <div class="input">
      <label for="filePath">Path to Chrome</label>
      <input id="filePath" ref="input" :value="getPathChrome" @input="updatePathChrome">
      <div class=" description">You must have Google Chrome installed. To find your "Executable Path", launch Chrome and browse to "chrome://version/", copy and past the path here.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ getPathChrome: "getPathChrome" }),
  },
  methods: {
    updatePathChrome(e) {
      this.$store.commit("SET_PATH_CHROME", e.target.value);
    },
  },
};
</script>

<style lang="scss">
// @import "@/assets/scss/_variables.scss";

// input:disabled {
//   background-color: $brand-dark-lighten;
//   color: $brand-three;
// }
</style>