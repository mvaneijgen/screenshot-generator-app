<template>
  <div>
    <section>
      <Sidebar />
      <AdvancedSidebar v-if="getState" />
      <div class="tabs">
        <button @click="toggleAdvanced" :class="{active: getState}">Advanced</button>
      </div>
    </section>
    <main>
      <Progress v-if="getGenerating" />
      <Devices v-if="!getGenerating" />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Start/Sidebar";
import AdvancedSidebar from "@/components/Start/Advanced/Sidebar";
import Devices from "@/components/Devices/Devices";
import Progress from "@/components/Main/Progress";

const homedir = require("os").homedir();

export default {
  name: "Start",
  components: {
    Sidebar,
    AdvancedSidebar,
    Devices,
    Progress,
  },
  data() {
    return {
      key: "advanced",
    };
  },
  computed: {
    getGenerating() {
      return this.$store.getters.getState("generating");
    },
    getState: {
      get() {
        return this.$store.getters.getState(this.key);
      },
      set(val) {
        return val;
      },
    },
  },
  methods: {
    toggleAdvanced() {
      this.$store.commit("SET_STATE", {
        key: this.key,
        value: (this.getState = !this.getState),
      });
    },
  },
  mounted() {
    if (process.env.NODE_ENV === "development") {
      this.$store.commit(
        "SET_URL",
        "https://decodedbags.com/sitemap_pages_1.xml",
      );
      this.$store.commit("SET_SITEMAP", [
        "https://decodedbags.com/pages/about",
      ]);
      this.$store.commit("SET_CUSTOM_CSS", ["* {background: yellow; }"]);
    }
    //------------------------------------------------------//
    // ⌘ macOS
    //------------------------------------------------------//
    if (process.platform === "darwin") {
      this.$store.commit(
        "SET_PATH_CHROME",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      );
      this.$store.dispatch("SET_PATH", `${homedir}/Downloads/`);
    }
    // END ⌘ macOS -------------------------------------//
    //------------------------------------------------------//
    // 🖼️ Windows
    //------------------------------------------------------//
    if (process.platform === "win32") {
      this.$store.commit(
        "SET_PATH_CHROME",
        "%ProgramFiles(x86)%GoogleChromeApplicationchrome.exe",
      );
      this.$store.dispatch("SET_PATH", `${homedir}/Downloads/`);
    }
    // END 🖼️ Windows -------------------------------------//
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;900&display=swap");
@import "@/assets/scss/_variables.scss";
* {
  box-sizing: border-box;
}
::-moz-selection {
  background: $brand-three;
}
::selection {
  background: $brand-three;
}
body {
  background-color: $brand-dark-lighten;
  margin: 0;
  font-family: $font-base;
  color: $brand-light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  @include media-breakpoint-up(md) {
    font-size: 18px;
  }
  @include media-breakpoint-up(lg) {
    font-size: 22px;
  }
}
.alloy-cards {
  font-size: 16px;
  @include media-breakpoint-up(lg) {
    font-size: 18px;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $font-header;
  line-height: 1.4em;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: $base-margin;
}
p {
  line-height: 1.7em;
}
h1 {
  font-size: 34px;

  @include media-breakpoint-up(lg) {
    font-size: 52px;
  }
  text-align: center;
}
h2 {
  font-size: 24px;

  @include media-breakpoint-up(lg) {
    font-size: 34px;
  }
  margin-bottom: $base-margin;
  @include media-breakpoint-up(lg) {
    margin-bottom: $base-margin * 3;
  }
}
h3 {
  font-size: 22px;
}
h4 {
  font-size: 20px;

  @include media-breakpoint-up(lg) {
    font-size: 24px;
  }
}
.alloy-title--large {
  font-size: 85px;
  transform: translateY(30px);
  line-height: 1em;
  text-align: center;
  text-transform: lowercase;
  @include media-breakpoint-up(lg) {
    font-size: 185px;
    transform: translateY(60px);
  }
}
.alloy-intro {
  font-size: 20px;

  @include media-breakpoint-up(lg) {
    font-size: 24px;
  }
}
.intro {
  .alloy-title {
    font-weight: 400;
  }
  a {
    text-decoration: none;
  }
}
footer,
header {
  h1,
  h2 {
  }
  h1 {
  }
  h2 {
  }
}
.centered {
  text-align: center;
}

h1 {
}
h2 {
}
h3 {
}
h4 {
}
h5 {
}
h6 {
}
p {
}
a {
  color: $brand-light;
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
  width: 100%;
  border: 0;
  &:hover {
    transform: scale(1.05);
  }
}
textarea,
select,
input {
  width: 100%;
  padding: 7px 0 7px 10px;
  font-size: 16px;
  line-height: 1em;
}
[type="range"] {
  padding: 0;
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
.btn-small {
  font-size: 16px;
  padding: 5px;
}
.btn-none {
  background-color: transparent;
  padding: 0;
  display: inline;
  font-size: inherit;
  color: inherit;
  width: auto;
  font-weight: 400;
  text-decoration: underline;
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
}
.description {
  font-size: 16px;
  width: 100%;
  color: $brand-three;
}
.content {
  width: 100%;
}
$offset: 400px;
aside {
  padding: 40px;
  background-color: $brand-dark;
  color: #fff;
  z-index: 1000;
}
aside {
  width: 100%;
  @include media-breakpoint-up(lg) {
    width: $offset;
  }
  overflow-y: auto;
  height: 100%;
}
main {
  @include media-breakpoint-up(lg) {
    margin-left: $offset;
  }
}
section {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000;
  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }
  @include media-breakpoint-up(lg) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
  }
}

.tabs {
  position: absolute;
  top: 50px;
  right: -30px;
  @include media-breakpoint-up(lg) {
    top: 50px;
    right: 1px;
    transform-origin: top right;
  }
  transform: rotate(-90deg);
  z-index: 1100;
  display: flex;
  flex-direction: row-reverse;

  button {
    background-color: $brand-one;
    color: $brand-light;
    width: auto;
    padding: 10px;
    font-size: 16px;
    height: 35px;
    &.active,
    &:hover {
      transform: scale(1);
      background-color: $brand-dark-lighten;
      color: $brand-three;
    }
  }
}
.custom-leave,
.custom-leave-to {
  // opacity: 0;
  transform: scale(0);
}
/* Item NOT in view starts in this postion */
.custom-enter {
  // opacity: 0;
  transform: scale(0);
}
/* Item NOT goes to this postion */
.custom-enter-to {
  // opacity: 1;
  transform: scale(1);
}
/* Properties active during the whole duration */
.custom-enter-active,
.custom-leave-active {
  transition: transform, opacity;
  transition-duration: 600ms;
  transition-timing-function: ease;
  // transition-delay: 300ms;
}
</style>
