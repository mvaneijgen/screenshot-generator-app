<template>
  <aside>
    <div id="logo">
      <span>Screenshot</span>
      <span>Generator</span>
    </div>
    <form action="" @submit.prevent="">
      <div class="input">
        <label for="">Sitemap URL website</label>
        <input id="url" type="url">
        <div class="description">http://domain.com/link/to/sitemap.xml</div>
      </div>
      <div id="or">OR</div>
      <div class="input">
        <label for="file">Upload .xml</label>
        <input id="file" type="file">
      </div>
    </form>
    <input type="submit" value="Generate">

  </aside>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
#logo {
  span {
    font-size: 40px;
    line-height: 1em;
    font-weight: 900;

    display: block;
    &:last-of-type {
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
}
form {
  margin-top: 40px;
  width: 100%;
}
select,
input {
  width: 100%;
  padding: $base-margin;
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
  input,
  label {
    display: block;
  }
  .description {
    font-size: 16px;
    width: 100%;
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