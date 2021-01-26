<template>
  <div class="content">
    <div class="input">
      <label for="customCSS">Custom CSS</label>
      <textarea id="customCSS" name="customCSS" cols="30" rows="5" :value="getCustomCSS" @input="updateCustomCSS"></textarea>
      <div class=" description">Elements with a height of 100vh will results in 100% high elements. Adding "max-height: 1000px" to these selectors will fix this issue.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ getCustomCSS: "getCustomCSS" }),
  },
  methods: {
    updateCustomCSS(e) {
      this.$store.commit("SET_CUSTOM_CSS", e.target.value);
    },
  },
};
</script>
