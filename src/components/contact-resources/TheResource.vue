<template>
  <base-card>
    <div v-if="contacts.length > 0">
      <single-contact
        v-for="contact in contacts"
        :key="contact.id"
        :id="contact.id"
        :name="contact.name"
        :phone="contact.phone"
        :address="contact.address"
      >
      </single-contact>
    </div>
    <div v-else>No contacts yet !</div>
  </base-card>
</template>

<script>
import SingleContact from './SingleContact'

export default {
  name: 'TheResource',
  components: {
    SingleContact
  },

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
          name: 'Contact 4',
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
  },
  methods: {
    removeResource(id) {
      const item = this.contacts.findIndex((contact) => contact.id === id)

      this.contacts.splice(item, 1)
    }
  },
  provide() {
    return {
      contacts: this.contacts,
      deleteItem: this.removeResource
    }
  }
}
</script>
