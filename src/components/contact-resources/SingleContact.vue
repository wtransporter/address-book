<template>
  <base-alert v-if="confirmDelete" @close="cancelAction" 
    title="Confirm ?">
    <template #default>
      Are you sure you want to delete this item ?
    </template>
    <template #actions>
      <base-button @click="confirmAction" type="danger">Delete</base-button>
      <base-button @click="cancelAction">Cancel</base-button>
    </template>
  </base-alert>
  <span class="flex justify-between border-b mb-1">
    <div>
      <h3 class="text-xl">{{ name }}</h3>
      <p class="py-2 text-sm">
        {{ phone }}<br />
        {{ address }}
      </p>
    </div>
    <div>
      <base-button @click="canDeleteItem" type="danger">
        Delete
      </base-button>
    </div>
  </span>
</template>

<script>
export default {
  name: 'SingleContact',
  props: ['id', 'name', 'phone', 'address'],

  inject: ['deleteItem'],

  data() {
    return {
      confirmDelete: false
    }
  },

  methods: {
    canDeleteItem() {
      this.confirmDelete = true;
    },

    confirmAction() {
      this.confirmDelete = false;
      this.deleteItem(this.id);
    },

    cancelAction() {
      this.confirmDelete = false
    }
  }
}
</script>