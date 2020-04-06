<template>
      <div class="lg:grid grid-cols-3 gap-4 flex justify-center mt-4">
    <div
      class="max-w-sm rounded overflow-hidden shadow-xl darkBG"
      v-scrollanimation
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Jia</div>
        <p class="text-gray-600 text-base">
          대충 소개글
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#CEO</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#BOT</span
        >
      </div>
    </div>
    <div
      class="max-w-sm rounded overflow-hidden shadow-xl darkBG"
      v-scrollanimation
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">PMH</div>
        <p class="text-gray-600 text-base">
          소개가 필요없음 걍 변태임
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#CTO</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#BOT</span
        >
      </div>
    </div>
    <div
      class="max-w-sm rounded overflow-hidden shadow-xl darkBG"
      v-scrollanimation
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Gangjun</div>
        <p class="text-gray-600 text-base">
          ㅇㅁㅇ
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#STAFF</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#WEB</span
        >
      </div>
    </div>
  </div>
</template>

<style>
.before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1.3s ease-out;
}

.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>
