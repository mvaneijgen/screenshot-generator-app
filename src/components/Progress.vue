<template>
  <div class="progress">
    <h1>{{count}}/{{getSitemapLenght}}</h1>
    <pre>{{log}}</pre>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import { mapGetters } from "vuex";

export default {
  name: "Progress",
  data() {
    return {
      count: 0,
      log: "",
    };
  },
  computed: {
    ...mapGetters({ getSitemapLenght: "getSitemapLenght" }),
  },
  methods: {
    // updateCount() {
    //   return this.count++;
    // },
  },
  mounted() {
    // this.updateCount();
    catcher = setMessage.bind(this);
  },
};

var catcher = 0;
function setMessage(msg) {
  this.log = msg;
}

ipcRenderer.on("process", function (event, args) {
  catcher(args);
  // console.log(args);
  // console.log("banaan");
  // this.log = args;
  // this.count++;
  // console.warn(this.count);
});
</script>
<style lang="scss">
.progress {
  margin-top: 100px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  background: coral;
  text-align: center;
}
</style>