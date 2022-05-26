<template>
  <div class="wrap">
    <RouterView name="default"></RouterView>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: rgb(0, 0, 238);
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

.float-clear::after {
  content: "";
  display: block;
  width: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
}

.container {
  max-width: 1190px;
  margin: 0 auto;
}
</style>
