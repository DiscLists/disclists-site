<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-scrollanimation>
      <div class="w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ $t('bronz') }}</div>
          <p class="text-gray-600 text-base">
            {{ $t('bronzInt') }}
          </p>
        </div>
      </div>
    </div>
    <div v-scrollanimation>
      <div class="w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ $t('silver') }}</div>
          <p class="text-gray-600 text-base">
            {{ $t('silverInt') }}
          </p>
        </div>
      </div>
    </div>
    <div v-scrollanimation>
      <div class="w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ $t('gold') }}</div>
          <p class="text-gray-600 text-base">
            {{ $t('goldInt') }}
          </p>
        </div>
      </div>
    </div>
    <div v-scrollanimation>
      <div class="w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ $t('platinum') }}</div>
          <p class="text-gray-600 text-base">
            {{ $t('platinumInt') }}
          </p>
        </div>
      </div>
    </div>
    <div v-scrollanimation>
      <div class="w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ $t('diamond') }}</div>
          <p class="text-gray-600 text-base">
            {{ $t('diamondInt') }}
          </p>
        </div>
      </div>
    </div>
    <div v-scrollanimation>
      <div class="w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ $t('sapphire') }}</div>
          <p class="text-gray-600 text-base">
            {{ $t('sapphireInt') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

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
