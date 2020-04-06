<template>
  <div id="app" class="bg-gray-800">
    <NavBar />
    <router-view />
    <div class="text-center mt-8 py-4 text-white">&#169; 2020. DiscLists</div>
  </div>
</template>

<script>
import NavBar from "./components/Navbar"
export default {
  components:{
    NavBar
  }
}
</script>

<style></style>
