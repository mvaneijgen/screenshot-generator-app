<template>
  <div class="content">

    <div class="input">
      <label for="">Sitemap URL</label>
      <input id="url" type="url" v-model="url" placeholder="Add sitemap">
      <div class="description">Example: https://domain.com/link/sitemap.xml</div>
    </div>
    <!-- <div id="or">OR</div>
    <div class="input">
      <label for="file">Upload .xml</label>
      <input id="file" type="file">
    </div> -->
    <!-- <input type="submit" value="check"> -->
    <SidebarResult />

    <pre>{{error}}</pre>
  </div>
</template>

<script>
const Sitemapper = require("sitemapper");

import SidebarResult from "@/components/Start/SidebarResult";

export default {
  data() {
    return {
      url: "",
      error: "",
    };
  },
  components: {
    SidebarResult,
  },
  methods: {
    getSitemap() {
      const sitemap = new Sitemapper({
        url: this.url,
        timeout: 15000, // 15 seconds
      });
      this.$store.dispatch("Devices/SET_LOADING", true);
      sitemap
        .fetch()
        .then(data => {
          this.$store.dispatch("Devices/SET_URL", data.url);
          this.$store.dispatch("Devices/SET_SITEMAP", data.sites);
          this.$store.dispatch("Devices/SET_LOADING", false);
        })
        .catch(error => {
          this.error = error;
          console.log(error);
        });
    },
  },
  watch: {
    url(val) {
      this.getSitemap();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.content {
  margin-top: 40px;
  width: 100%;
}
select,
input {
  width: 100%;
  padding: 7px 0 7px 10px;
  font-size: 16px;
  line-height: 1em;
}
[type="button"],
[type="submit"],
button,
.btn {
  padding: $base-margin;
  border-color: $brand-one;
  background-color: $brand-one;
  color: $brand-light;
  font-weight: 600;
  font-size: 24px;
  transition: transform;
  transition-duration: 300ms;
  transition-timing-function: ease;
  &:hover {
    transform: scale(1.05);
  }
}
.input {
  margin-bottom: $base-margin * 2;
  label {
    font-size: 34px;
    font-weight: 900;
    color: $brand-three;
    margin-bottom: -0.35em;
  }
  input,
  label {
    display: block;
  }
  input {
    position: relative;
    z-index: 900;
    margin-bottom: 10px;
    border: 2px solid;
    border-color: $brand-three;
    &:focus {
      outline: none;
      border-color: $brand-one;
    }
  }
  .description {
    font-size: 16px;
    width: 100%;
    color: $brand-three;
  }
}
[type="file"]::-webkit-file-upload-button {
  visibility: hidden;
}
[type="file"]::before {
  content: "Select some files";
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
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
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>