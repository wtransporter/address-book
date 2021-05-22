<template>
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
</template>

<script>
import SingleContact from './SingleContact'

export default {
  components: {
    SingleContact
  },
  name: 'StoredContacts',
  inject: ['contacts']
}
</script>
