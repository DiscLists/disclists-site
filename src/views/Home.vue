<template>
  <span>
    <div id="header" class="block bg-fixed">
      <NavBar />
      <div class="text-center absolute centerMainText">
        <div class="text-5xl">DiscLists</div>
        <div class="text-xl">(대충 pmh가 좋은소개글 생각해낼꺼임)</div>
      </div>
      <a class="arrowBox block">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div id="aboutUs" class="mx-4 lg:ml-64 mr-0">
      about us
    </div>
  </span>
</template>

<script>
import NavBar from './../components/Navbar'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style>
#header {
  background-image: url('https://picsum.photos/1920/1080');
  background-size: cover;
  height: 100vh;
}

.fullWidth {
  width: 100vw;
}

.centerMainText {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.arrowBox {
  position: absolute;
  top: 80%;
  left: 50%;
}

.arrowBox span {
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 1.3px solid #121212;
  border-right: 1.3px solid #121212;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}

.arrowBox span:nth-child(2) {
  animation-delay: -0.2s;
}

.arrowBox span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>
