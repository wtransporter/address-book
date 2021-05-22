<template>
  <button
    class="px-2 py-1 border hover:text-white focus:outline-none font-semibold"
    :class="type ?? 'primary'"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style lang="postcss">
.danger {
  @apply border-red-900 text-xs hover:bg-red-600 active:bg-red-700 active:text-white;
}

.primary {
  @apply border-blue-900 text-xs hover:bg-blue-600 active:bg-blue-700 active:text-white;
}
</style>
