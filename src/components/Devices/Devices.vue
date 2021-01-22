<template>
  <div id="component-Devices">
    <h2>Phones</h2>
    <DeviceTypes :type="getTypeDevices('phones')" />

    <h2>Tablets</h2>
    <DeviceTypes :type="getTypeDevices('tablets')" />

    <h2>Computers</h2>
    <DeviceTypes :type="getTypeDevices('computers')" />

    <!-- <h2>Laptops</h2>
    <DeviceTypes :type="getTypeDevices('laptops')" /> -->

    <!-- <h2>Desktops</h2>
    <DeviceTypes :type="getTypeDevices('desktops')" /> -->
  </div>
</template>

<script>
import DeviceTypes from "@/components/Devices/DeviceTypes";

export default {
  name: "Devices",
  components: {
    DeviceTypes,
  },
  computed: {
    getTypeDevices() {
      // return this.$store.getters["getTypeDevices"];
      return this.$store.getters["getTypeDevices"];
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/_variables.scss";
#component-Devices {
  h2 {
    // text-transform: lowercase;
    color: $brand-three;
    padding-left: $base-margin;
    margin: 0;
    // font-weight: normal;
    font-size: 110px;
    margin-bottom: -0.7em;
    pointer-events: none;
  }
}
</style>