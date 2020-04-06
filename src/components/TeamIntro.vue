<template>
      <div class="lg:grid grid-cols-3 gap-4 flex justify-center mt-4">
    <div
      class="max-w-sm rounded overflow-hidden shadow-xl darkBG"
      v-scrollanimation
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{$t('jia')}}</div>
        <p class="text-gray-600 text-base">
          {{$t('jiaInt')}}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('ceotag')}}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('botdevtag')}}</span
        >
      </div>
    </div>
    <div
      class="max-w-sm rounded overflow-hidden shadow-xl darkBG"
      v-scrollanimation
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{$t('pmh')}}</div>
        <p class="text-gray-600 text-base">
        {{$t('pmhInt')}}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('ctotag')}}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('botdevtag')}}</span
        >
      </div>
    </div>
    <div
      class="max-w-sm rounded overflow-hidden shadow-xl darkBG"
      v-scrollanimation
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{$t('gangjun')}}</div>
        <p class="text-gray-600 text-base">
          {{$t('gangjunInt')}}
          <a href="https://gangjun.dev/" class="hover:text-gray-300"> Visit My Website</a>
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('stafftag')}}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('webdevtag')}}</span
        >
      </div>
    </div>
    <div
      class="max-w-sm rounded overflow-hidden shadow-xl darkBG"
      v-scrollanimation
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{$t('dissolve')}}</div>
        <p class="text-gray-600 text-base">
        {{$t('dissolveInt')}}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('stafftag')}}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('trantag')}}</span
        >
      </div>
    </div>
    <div
      class="max-w-sm rounded overflow-hidden shadow-xl darkBG"
      v-scrollanimation
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{$t('comjun')}}</div>
        <p class="text-gray-600 text-base">
        {{$t('comjunInt')}}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('csotag')}}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{$t('botdevtag')}}</span
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
