<template>
  <div class="content">
    <div class="input">
      <label for="">Sitemap URL</label>
      <input id="url" type="url" :value="getURL" placeholder="Add sitemap" @input="getSitemap">
      <div class="description">Example: https://domain.com/link/sitemap.xml</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const Sitemapper = require("sitemapper");

export default {
  data() {
    return {
      url: "",
      error: "",
    };
  },
  computed: {
    ...mapGetters({ getURL: "getURL" }),
  },
  methods: {
    getSitemap(e) {
      const url = e.target.value;

      const sitemap = new Sitemapper({
        url: url,
        timeout: 15000, // 15 seconds
      });
      this.$store.dispatch("SET_LOADING", true);

      sitemap
        .fetch()
        .then((data) => {
          this.$store.dispatch("SET_URL", data.url);
          this.$store.dispatch("SET_SITEMAP", data.sites);
          this.$store.dispatch("SET_LOADING", false);
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
[type="file"]::-webkit-file-upload-button {
  visibility: hidden;
}
[type="file"]::before {
  content: "Select some files";
  display: inline-block;
  // background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
[type="file"]:hover::before {
  border-color: black;
}
[type="file"]:active::before {
  // background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>