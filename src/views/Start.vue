<template>
  <div>
    <Sidebar />
    <main>
      <Progress />
      <Devices />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Start/Sidebar";
import Devices from "@/components/Devices/Devices";
import Progress from "@/components/Main/Progress";

const homedir = require("os").homedir();

export default {
  name: "Start",
  components: {
    Devices,
    Sidebar,
    Progress,
  },
  mounted() {
    if (process.env.NODE_ENV === "development") {
      this.$store.commit(
        "SET_URL",
        "https://decodedbags.com/sitemap_pages_1.xml",
      );
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
@include media-breakpoint-up(md) {
  body {
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

  // @include media-breakpoint-up(lg) {
  //   font-size: 30px;
  // }
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

$offset: 400px;
aside {
  padding: 40px;
  background-color: $brand-dark;
  color: #fff;
}
@include media-breakpoint-up(lg) {
  aside {
    width: $offset;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    height: 100%;
  }
  main {
    // #component-Devices {
    margin-left: $offset;
  }
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
  // font-size: 16px;
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
  .description {
    font-size: 16px;
    width: 100%;
    color: $brand-three;
  }
}
.content {
  margin-top: 40px;
  width: 100%;
}
</style>
