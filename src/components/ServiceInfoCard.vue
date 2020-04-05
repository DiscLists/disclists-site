<template>
  <div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
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
