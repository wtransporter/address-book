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
      <base-button type="danger">
        Delete
      </base-button>
    </div>
  </span>
</template>

<script>
export default {
  name: 'SingleContact',
  props: ['id', 'name', 'phone', 'address']
}
</script>
