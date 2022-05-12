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
      const array = [];
      var sitemapFile = url;
      this.$store.dispatch("SET_LOADING", true);

      getXMLSitemapObject(sitemapFile, function (sitemapObject) {
        // retrieve properties from the sitemap object

        // Get sitemap from the sitemap
        const sitemap = sitemapObject.getElementsByTagName("sitemap");
        sitemap.forEach((item) => {
          const i = item.getElementsByTagName("loc")[0].textContent;
          getXMLSitemapObject(i, function (sitemapObject) {
            const urls = sitemapObject.getElementsByTagName("url");
            urls.forEach((item) => {
              const url = item.getElementsByTagName("loc")[0].textContent;
              array.push(url);
              console.warn(url);
            });
          });
        });
        // Get URLs from the sitemap
        const urls = sitemapObject.getElementsByTagName("url");
        urls.forEach((item) => {
          const url = item.getElementsByTagName("loc")[0].textContent;
          array.push(url);
          console.warn(url);
        });
      });

      // get sitemap content and parse it to Document Object Model
      function getXMLSitemapObject(sitemapFile, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            var sitemapContent = this.responseText;
            var sitemapObject = parseXMLSitemap(sitemapContent);
            callback(sitemapObject);
          }
        };
        xhttp.open("GET", sitemapFile, true);
        xhttp.send();
      }

      // parse a text string into an XML DOM object
      function parseXMLSitemap(sitemapContent) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(sitemapContent, "text/xml");
        return xmlDoc;
      }
      this.$store.dispatch("SET_URL", url);
      this.$store.dispatch("SET_SITEMAP", array);
      this.$store.dispatch("SET_LOADING", false);
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