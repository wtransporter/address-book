<template>
  <div>
    <form @submit.prevent="submitData">
      <p class="text-xs italic text-red-600" v-if="error">{{ error }}</p>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-600 font-semibold" for="name"
          >*Name</label
        >
        <input
          class="border rounded mb-2 outline-none focus:ring-1 focus:ring-blue-300 pl-1 text-sm"
          type="text"
          name="name"
          id="name"
          v-model="name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-600 font-semibold" for="phone"
          >*Phone number</label
        >
        <input
          class="border rounded mb-2 outline-none focus:ring-1 focus:ring-blue-300 pl-1 text-sm"
          type="tel"
          name="phone"
          id="phone"
          v-model="phone"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-600 font-semibold" for="address"
          >*Street Address</label
        >
        <input
          class="border rounded mb-2 outline-none focus:ring-1 focus:ring-blue-300 pl-1 text-sm"
          type="text"
          name="address"
          id="address"
          v-model="address"
        />
      </div>
      <base-button>Save</base-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewResource',
  inject: ['addContact'],

  data() {
    return {
      name: '',
      phone: '',
      address: '',
      error: ''
    }
  },

  methods: {
    submitData() {
      if (this.name.trim() === '' || this.phone === '' || this.address === '') {
        this.error = 'All fields are required'
        return
      }
      this.addContact(this.name, this.phone, this.address)
      this.resetFields()
    },
    resetFields() {
      this.name = ''
      this.phone = ''
      this.address = ''
      this.error = ''
    }
  }
}
</script>
