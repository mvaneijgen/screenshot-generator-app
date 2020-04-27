<template>
  <main>
    <form action="" @submit.prevent="">
      <div class="input">
        <label for="">Sitemap URL website</label>
        <input id="url" type="url">
        <div class="decription">http://domain.com/link/to/sitemap.xml</div>
      </div>
      <button @click="">Upload a file</button>
      <div class="input">
        <label for=""></label>
        <input id="url" type="file">
      </div>

    </form>
    <Devices />
  </main>
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";
import Devices from "./Devices";

export default {
  name: "landing-page",
  components: {
    SystemInformation,
    Devices,
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
  },
  mounted() {
    // console.warn(this.$electron);
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
</style>
