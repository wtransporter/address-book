<template>
  <span class="flex justify-between border-b mb-1">
    <div>
      <h3 class="text-xl">{{ name }}</h3>
      <p class="py-2 text-sm">
        {{ phone }}<br />
        {{ address }}
      </p>
    </div>
    <div>
      <button
        class="px-2 py-1 border border-red-900 text-xs
                hover:bg-red-600 hover:text-white font-semibold"
      >
        Delete
      </button>
    </div>
  </span>
</template>

<script>
export default {
  name: 'SingleContact',
  props: ['id', 'name', 'phone', 'address']
}
</script>
