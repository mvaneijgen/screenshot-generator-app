<template>
  <li class="item" @click="addSelected" :data-selected="selected">
    <h3>{{item.deviceName}}</h3>
    <ul class=" meta">
      <li>w x h: {{item.width}} x {{item.height}}</li>
    </ul>
  </li>

</template>

<script>
import DeviceTypes from "./DeviceTypes";
export default {
  props: ["item"],
  name: "Devices",
  data() {
    return {
      selected: false,
    };
  }, // End data
  components: {
    DeviceTypes,
  },
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  computed: {
    getTypeDevices(type) {
      return this.$store.getters.getTypeDevices;
      // return this.$store.getters["items/getItems"](tis.$route.params.type);
    },
  },
  methods: {
    addSelected() {
      this.selected = !this.selected;
      if (this.selected) {
        this.$store.dispatch("Devices/ADD_SELECTED_DEVICES", this.item);
      } else {
        this.$store.dispatch("Devices/REMOVE_SELECTED_DEVICES", this.item);
      }
      console.warn(this.$store.getters["Devices/getSelectedDevices"]);
    },
  },
  mounted() {
    const index = this.$store.getters["Devices/getSelectedDevices"].findIndex(
      x => x.deviceName == this.item.deviceName,
    );

    if (index > -1) {
      this.selected = true;
    }
  },
};
</script>
<style lang="scss" scoped>
.item {
  // width: 250px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(#000, 0.1);
  padding: 30px;
  margin: 15px;
  overflow: hidden;
  cursor: pointer;
  &[data-selected="true"] {
    background-color: #0ba;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>