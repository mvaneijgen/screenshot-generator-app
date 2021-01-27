<template>
  <div class="progress">
    <h1>Generating...</h1>
    <div class="counter">{{count}}/{{getSitemapLenght}}</div>
    <pre>{{log}}</pre>
    <pre>
      <span v-for="(item, index) in log" :key="index">{{item}}</span>
    </pre>

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
      log: [],
    };
  },
  computed: {
    ...mapGetters({ getSitemapLenght: "getSitemapLenght" }),
  },
  methods: {},
  mounted() {
    catcher = setMessage.bind(this);
  },
};

//------------------------------------------------------//
// Logic to get data from ipCRenderer
//------------------------------------------------------//
let catcher = 0;

function setMessage(msg) {
  this.log.push(msg);
  this.count++;
}

ipcRenderer.on("process", function (event, args) {
  catcher(args);
});
// END Logic to get data from ipCRenderer  -------------------------------------//
</script>
<style lang="scss">
@import "@/assets/scss/_variables.scss";

.progress {
  padding: $base-margin * 2;
  margin-top: 100px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  background: $brand-one;
  text-align: center;
}
h1 {
  font-size: 20px;
}
.counter {
  font-size: 30px;
  font-weight: 700;
}
pre {
  height: 6em;
  overflow: hidden;
  span {
    display: block;
    opacity: 0.6;
  }
}
</style>