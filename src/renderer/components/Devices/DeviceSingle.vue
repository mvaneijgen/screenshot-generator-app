<template>
  <li class="item" @click="addSelected" :data-selected="selected">
    <div class="inner">
      <h3>{{item.deviceName}}</h3>
      <ul class=" meta">
        <li><span>w x h:</span> {{item.width}} x {{item.height}}</li>
      </ul>
    </div>
    <IconBase width="30" height="30" icon-name="tablet">
      <IconMobile3 />
    </IconBase>
  </li>
</template>

<script>
import IconBase from "@/components/Icons/IconBase";
import IconMobile3 from "@/components/Icons/IconMobile3";
export default {
  props: ["item"],
  name: "Devices",
  components: {
    IconBase,
    IconMobile3,
  },
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    getTypeDevices(type) {
      return this.$store.getters.getTypeDevices;
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
@import "@/assets/scss/_variables.scss";
.item {
  color: $brand-dark;
  background-color: #adbad9;
  box-shadow: 0 0 40px 0 rgba(#000, 0.1);
  padding: $base-margin;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: transform;
  transition-duration: 300ms;
  transition-timing-function: ease;

  &[data-selected="true"] {
    background-color: $brand-one;
    color: $brand-light;
  }
  &:hover {
    transform: scale(1.05);
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h3 {
  margin-bottom: 0;
  font-size: 19px;
}
.meta {
  font-size: 16px;
  li {
    span {
      text-transform: uppercase;
      font-size: 0.8em;
    }
  }
}
</style>