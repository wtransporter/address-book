<template>
  <section>
    <div class="max-w-xl mx-auto border p-4 mt-4 rounded-md shadow-md">
      <span
        :key="contact.id"
        v-for="contact in contacts"
        class="flex justify-between border-b mb-1"
      >
        <div>
          <h3 class="text-xl">{{ contact.name }}</h3>
          <p class="py-2 text-sm">
            {{ contact.phone }}<br />
            {{ contact.address }}
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheResource',

  data() {
    return {
      contacts: [
        {
          id: 1,
          name: 'Contact 1',
          phone: '123456789',
          address: 'Street address 10'
        },
        {
          id: 2,
          name: 'Contact 2',
          phone: '123456789',
          address: 'Street address 10'
        },
        {
          id: 3,
          name: 'Contact 3',
          phone: '123456789',
          address: 'Street address 10'
        },
        {
          id: 4,
          name: 'Contact 5',
          phone: '123456789',
          address: 'Street address 10'
        },
        {
          id: 5,
          name: 'Contact 5',
          phone: '123456789',
          address: 'Street address 10'
        }
      ]
    }
  }
}
</script>
