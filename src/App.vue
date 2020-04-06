<template>
  <div id="app" class="bg">
    <NavBar class="relative"/>
    <vue-particles
      class="absolute ab-zero"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <router-view class="relative"/>
    <div class="text-center mt-8 py-4 text-white">&#169; 2020. DiscLists</div>
  </div>
</template>

<script>
import NavBar from './components/Navbar'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
.ab-zero {
  left: 0;
  top: 10vh;
  height: 100vh;
  width: 97vw;
}
.bg {
  background-color: #34393f;
}
</style>
