<template>
  <span class="text-white text-center">
    <div id="header">
      <div class="mt-40">
        <div class="text-5xl">DiscLists</div>
        <div class="text-xl">
          {{ $t('intro') }}
        </div>
      </div>
      <span class="guide hidden lg:inline">
        <span>지금바로 가입하세요!</span>
        <font-awesome-icon icon="arrow-up" class="ml-4 w-4 h-4" />
      </span>
    </div>
    <div id="aboutUs" class="mx-4 lg:mx-64 mt-24">
      <div class="text-center text-4xl">
        about us
      </div>
      <div>
        {{ $t('aboutus') }}
      </div>
    </div>
    <div id="aboutUs" class="mx-4 lg:mx-64 mt-24">
      <div class="text-center text-4xl">
        Service Introduction
      </div>
      <div class="lg:grid grid-cols-3 gap-4 flex justify-center mt-4">
        <div v-for="(item, index) in serviceInfo" :key="index">
          <ServiceInfoCard :data="item" />
        </div>
      </div>
    </div>
    <div id="aboutUs" class="mx-4 lg:mx-64 mt-24">
      <div class="text-center text-4xl">
        OurTeam
      </div>
      <div>
        (여기도 아마 pmh 가 적어줄거임.. )
      </div>
    </div>
  </span>
</template>

<script>
import ServiceInfoCard from './../components/ServiceInfoCard'
export default {
  name: 'Home',
  data: function() {
    return {
      serviceInfo: [
        { name: 'Bronze', description: 'lorem ipsum asdf', color: '' },
        { name: 'Gold', description: 'lorem ipsum asdf', color: '' },
        { name: 'Silver', description: 'lorem ipsum asdf', color: '' },
        { name: 'Platinum', description: 'lorem ipsum asdf', color: '' },
        { name: 'Diamonds', description: 'lorem ipsum asdf', color: '' },
        { name: 'SsppHire', description: 'lorem ipsum asdf', color: '' }
      ]
    }
  },
  components: {
    ServiceInfoCard
  },
  mounted() {}
}
</script>

<style>
.guide {
  position: absolute;
  top: 13%;
  right: 3%;
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

.before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1.6s ease-out;
}

.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>
