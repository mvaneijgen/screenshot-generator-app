<template>
  <div class="content">
    <div class="input">
      <label for="amount">Limit Amount</label>
      <input type="range" id="amount" name="amount" :value="getState" min="0" max="100" @input="setState">
      <div class=" description">Reduce the total amount (<strong>{{getSitemap.length * getSelectedDevices.length}}</strong>) of pages to <strong>{{getSitemapLenght * getSelectedDevices.length}}</strong> and randomize its order.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      key: "amount",
    };
  },
  computed: {
    ...mapGetters({
      getSitemapLenght: "getSitemapLenght",
      getSitemap: "getSitemap",
      getSelectedDevices: "getSelectedDevices",
    }),
    getState() {
      return this.$store.getters.getState(this.key);
    },
  },
  methods: {
    setState(e) {
      this.$store.commit("SET_STATE", {
        key: this.key,
        value: e.target.value,
      });
    },
  },
};
</script>
