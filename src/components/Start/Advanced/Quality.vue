<template>
  <div class="content">
    <div class="input">
      <label for="quality">Image quality</label>
      <input type="range" id="quality" name="quality" :value="getState" min="0" max="100" @input="setState">
      <div class=" description">Taking <strong>{{ getSitemapLength * getSelectedDevices.length}}</strong> screenshots will take up arround <strong>~{{getTotalMB}}MB</strong> of storage.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      key: "quality",
    };
  },
  computed: {
    ...mapGetters({
      getSitemapLength: "getSitemapLength",
      getSelectedDevices: "getSelectedDevices",
      getTotalMB: "getTotalMB",
    }),
  },
  methods: {
    setState(e) {
      this.$store.commit("SET_STATE", {
        key: this.key,
        value: e.target.value,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

/* The slider itself */
[type="range"] {
  margin-top: 10px;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 15px; /* Specified height */
  background: $brand-light; /* Grey background */
  outline: none; /* Remove outline */
  // opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
[type="range"]:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  border-radius: 50%;
  background: $brand-one; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

[type="range"]::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: $brand-one; /* Green background */
  border-radius: 50%;
  cursor: pointer; /* Cursor on hover */
}
</style>
