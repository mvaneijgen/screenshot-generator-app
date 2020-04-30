<template>
  <ul id="device-list">
    <DeviceSingle v-for="(item, index) in type" :key="index" :item="item" />
  </ul>
</template>

<script>
import { mapState } from "vuex";
// import DeviceSingle from "./Devices/DeviceSingle";
import DeviceSingle from "@/components/Devices/DeviceSingle";

export default {
  props: ["type"],
  name: "DeviceTypes",
  components: {
    DeviceSingle,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

$base-margin: 15px;
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#device-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  grid-column-gap: $base-margin * 2;
  grid-row-gap: $base-margin * 2;
  padding: $base-margin * 2;
  margin-bottom: $base-margin * 2;
}
</style>