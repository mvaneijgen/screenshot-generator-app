<template>
  <div id="component-Devices">
    <button @click="resetSelectedDevices">Reset selected Devices</button>
    <h2>Phones</h2>
    <DeviceTypes :type="getTypeDevices('phones')" />

    <h2>Tablets</h2>
    <DeviceTypes :type="getTypeDevices('tablets')" />

    <h2>notebooks</h2>
    <DeviceTypes :type="getTypeDevices('notebooks')" />

    <h2>desktops</h2>
    <DeviceTypes :type="getTypeDevices('desktops')" />
  </div>
</template>

<script>
import { mapState } from "vuex";
// import DeviceTypes from "./DeviceTypes";
import DeviceTypes from "@/components/Devices/DeviceTypes";

export default {
  props: ["type"],
  name: "Devices",
  components: {
    DeviceTypes,
  },
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  computed: {
    getTypeDevices(type) {
      return this.$store.getters["Devices/getTypeDevices"];
      // return this.$store.getters["items/getItems"](tis.$route.params.type);
    },
  },
  methods: {
    resetSelectedDevices() {
      this.$store.dispatch("Devices/RESET_SELECTED_DEVICES");
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/_variables.scss";
#component-Devices {
  h2 {
    text-transform: lowercase;
    color: $brand-light;
    padding-left: $base-margin * 2;
    margin: 0;
    // font-weight: normal;
  }
}
</style>