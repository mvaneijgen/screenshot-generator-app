<template>
  <ul id="device-list">
    <Device v-for="(item, index) in type" :key="index" :item="item" />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Device from "./Device";

export default {
  props: ["type"],
  name: "DeviceTypes",
  data() {
    return {
      title: "DeviceTypes",
    };
  }, // End data
  components: {
    Device,
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#device-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}
</style>