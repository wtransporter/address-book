<template>
  <button
    class="px-2 py-1 border hover:text-white font-semibold"
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
  @apply border-red-900 text-xs hover:bg-red-600;
}

.primary {
  @apply border-blue-900 text-xs hover:bg-blue-600;
}
</style>
