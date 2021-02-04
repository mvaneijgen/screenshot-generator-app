<template>
  <aside id="advanced">
    <ChromePath />
    <CustomCSS />
    <Quality />
    <LimitAmount />
  </aside>
</template>

<script>
import ChromePath from "@/components/Start/Advanced/ChromePath";
import CustomCSS from "@/components/Start/Advanced/CustomCSS";
import Quality from "@/components/Start/Advanced/Quality";
import LimitAmount from "@/components/Start/Advanced/LimitAmount";

export default {
  components: {
    ChromePath,
    CustomCSS,
    Quality,
    LimitAmount,
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/_variables.scss";
#advanced {
  background-color: $brand-three;
  // margin-left: 400px;
  z-index: 900;
  .input {
    .description,
    label {
      color: $brand-dark-lighten;
    }
  }
}
</style>