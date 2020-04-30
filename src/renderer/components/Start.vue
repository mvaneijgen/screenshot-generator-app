<template>
  <main>
    <Sidebar />
    <Devices />
  </main>
</template>

<script>
import Sidebar from "@/components/Start/Sidebar";
import Devices from "@/components/Devices/Devices";

export default {
  name: "Start",
  components: {
    Devices,
    Sidebar,
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
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
main {
  aside {
    padding: 40px;
    width: $offset;
    background-color: $brand-dark;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
  }
  #component-Devices {
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
</style>
