<template>
  <div id="app" class="bg-gray-900">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Navbar";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  height: 100vh;
  widows: 100vw;
}
</style>
