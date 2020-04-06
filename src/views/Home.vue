<template>
  <span class="text-white text-center">
    <div id="header" class="hFull">
      <div class="introSection">
        <div class="mainText">DiscLists</div>
        <div class="text-xl">
          <div>{{ $t('intro1') }}</div>
          <div>{{ $t('intro2') }}</div>
          <div>{{ $t('intro3') }}</div>
        </div>
      </div>
      <span class="guide hidden lg:inline">
        <font-awesome-icon icon="arrow-up" class="ml-4 w-4 h-4" />
      </span>
      <div class="arrowBox">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="arrowBox">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div id="aboutUs" class="mx-4 lg:mx-64 mt-18">
      <div class="text-center text-5xl tekoFont tracking-wide">
        {{$t('aboutusTitle')}}
      </div>
      <div>
        {{ $t('aboutus') }}
      </div>
    </div>
    <div id="serviceIntro" class="mx-4 lg:mx-64 mt-24">
      <div class="text-center text-5xl tekoFont tracking-wide">
        {{$t('serviceIntroTitle')}}
      </div>
      <div class="lg:grid grid-cols-3 gap-4 flex justify-cen임er mt-4">
        <!-- 이거는 저기 밑에 script->data->serverinfo 임 -->
        <div v-for="(item, index) in serviceInfo" :key="index">
          <ServiceInfoCard :data="item" />
        </div>
      </div>
    </div>
    <div id="ourTeam" class="mx-4 lg:mx-64 mt-24">
      <div class="text-center text-5xl tekoFont tracking-wide">
        {{$t('ourTeamTitle')}}
      </div>
      <TeamIntro />
    </div>
  </span>
</template>

<script>
import ServiceInfoCard from './../components/ServiceInfoCard'
import TeamIntro from './../components/TeamIntro'
export default {
  name: 'Home',
  data: function() {
    return {
      serviceInfo: [
        { name: $t('bronze'), description: $t('bronzeInt'), color: '' },
        { name: $t('silver'), description: $t('silverInt'), color: '' },
        { name: $t('gold'), description: $t('goldInt'), color: '' },
        { name: $t('platinum'), description: $t('platinumeInt'), color: '' },
        { name: $t('diamond'), description: $t('diamondInt'), color: '' },
        { name: $t('sapphire'), description: $t('sapphireInt'), color: '' }
      ]
    }
  },
  components: {
    ServiceInfoCard,
    TeamIntro
  },
  mounted() {}
}
</script>

<style>
.introSection {
  margin-top: 26vh;
}

.mainText {
  font-size: 7em;
  font-family: 'Teko', sans-serif;
  text-shadow: 8px 8px #000;
  text-transform: uppercase;
}

.tekoFont {
  font-family: 'Teko', sans-serif;
}

.hFull {
  height: 90vh;
}
.darkBG {
  background-color: #292929;
}
.guide {
  position: absolute;
  top: 13%;
  right: 4%;
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
  top: 70vh;
  left: 49vw;
}

.arrowBox span {
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 1.3px solid #fff;
  border-right: 1.3px solid #fff;
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
