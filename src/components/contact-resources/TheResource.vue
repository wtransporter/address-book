<template>
  <base-card>
    <single-contact
      v-for="contact in contacts"
      :key="contact.id"
      :id="contact.id"
      :name="contact.name"
      :phone="contact.phone"
      :address="contact.address"
    >
    </single-contact>
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
