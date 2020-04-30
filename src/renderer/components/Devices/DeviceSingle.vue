<template>
  <li class="item" @click="addSelected" :data-selected="selected">
    <div class="inner">
      <h3>{{item.deviceName}}</h3>
      <ul class=" meta">
        <li>{{item.width}} x {{item.height}}</li>
        <li><span>Scale factor:</span> {{item.deviceScaleFactor}}</li>
        <li><span>Touch:</span> <template v-if="item.touch">YES</template><template v-else>NO</template></li>
      </ul>
    </div>
    <IconBase width="30" height="30" icon-name="tablet">
      <IconPhone v-if="item.type === 'phone'" />
      <IconPhoneAlt v-if="item.type === 'phoneAlt'" />
      <IconTablet v-if="item.type === 'tablet'" />
      <IconLaptop v-if="item.type === 'laptop'" />
      <IconDesktop v-if="item.type === 'desktop'" />
    </IconBase>
  </li>
</template>

<script>
import IconBase from "@/components/Icons/IconBase";
import IconPhone from "@/components/Icons/IconPhone";
import IconPhoneAlt from "@/components/Icons/IconPhoneAlt";
import IconTablet from "@/components/Icons/IconTablet";
import IconLaptop from "@/components/Icons/IconLaptop";
import IconDesktop from "@/components/Icons/IconDesktop";

export default {
  props: ["item"],
  name: "Devices",
  components: {
    IconBase,
    IconPhone,
    IconPhoneAlt,
    IconTablet,
    IconLaptop,
    IconDesktop,
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
  color: $brand-three;
  background-color: $brand-dark;
  box-shadow: 0 0 40px 0 rgba(#000, 0.2);
  padding: $base-margin;
  @include media-breakpoint-up(lg) {
    padding: $base-margin * 2;
  }
  overflow: hidden;
  min-height: 110px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: transform;
  transition-duration: 300ms;
  transition-timing-function: ease;
  svg {
    * {
      fill: $brand-three;
    }
  }
  &[data-selected="true"] {
    background-color: $brand-one;
    color: $brand-light;
    transform: scale(1) !important;
    svg {
      * {
        fill: $brand-light;
      }
    }
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