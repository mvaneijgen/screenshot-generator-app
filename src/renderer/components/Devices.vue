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
import DeviceTypes from "./DeviceTypes";

export default {
  props: ["type"],
  name: "Devices",
  data() {
    return {
      title: "Devices",
    };
  }, // End data
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