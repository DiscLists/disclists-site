<template>
  <div v-scrollanimation>
    <div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ data.name }}</div>
        <p class="text-gray-600 text-base">
          {{ data.description }}
        </p>
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
