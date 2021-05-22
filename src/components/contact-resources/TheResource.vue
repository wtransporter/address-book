<template>
  <base-card>
    <div class="flex gap-2">
      <base-button @click="setActiveTab('stored-contacts')"
        >All contacts</base-button
      >
      <base-button @click="setActiveTab('new-resource')"
        >New contact</base-button
      >
    </div>
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
  </base-card>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'
import NewResource from './NewResource'
import StoredContacts from './StoredContacts'

export default {
  name: 'TheResource',
  components: {
    NewResource,
    BaseButton,
    StoredContacts
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
      ],
      activeTab: 'stored-contacts'
    }
  },

  methods: {
    removeResource(id) {
      const item = this.contacts.findIndex((contact) => contact.id === id)

      this.contacts.splice(item, 1)
    },
    setActiveTab(name) {
      this.activeTab = name
    },
    addResource(name, phone, address) {
      const newContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        address: address
      }
      this.contacts.unshift(newContact)
    }
  },

  provide() {
    return {
      contacts: this.contacts,
      deleteItem: this.removeResource,
      addContact: this.addResource
    }
  }
}
</script>
