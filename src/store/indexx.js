import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    newContact: {
      id: null,
      name: "",
      fields: [{ phone: "", address: "", email: "" }]
    },
  },
  getters: {
    getContact: state => id => {
      return state.contacts.find(contact => contact.id === id);
    }
  },
  mutations: {
    GET_CONTACT(state, contact) {
      state.newContact = contact
    },
    ADD_CONTACT(state) {
      state.newContact.id = state.contacts.length;
      state.contacts.push(state.newContact)
    },
    EDIT_CONTACT(state, contact) {
      var contacts = state.contacts      
      contacts.splice(contacts.indexOf(contact), 1)
      state.contacts = contacts
      state.newContact = contact
    },
    REMOVE_CONTACT(state, contact) {
      var contacts = state.contacts
      contacts.splice(contacts.indexOf(contact), 1)
    },
    CLEAR_CONTACT(state) {
      state.newContact = {
        name: "",
        fields: [{ phone: "", address: "", email: "" }]
      }
    }
  },
  actions: {
    getContact({ commit }, contact) {
      commit('GET_CONTACT', contact)
    },
    addContact({ commit }) {
      
      commit('ADD_CONTACT')
    },
    editContact({ commit }, contact) {
      commit('EDIT_CONTACT', contact)
    },
    removeContact({ commit }, contact) {
      commit('REMOVE_CONTACT', contact)
    },
    completeContact({ commit }, contact) {
      commit('COMPLETE_CONTACT', contact)
    },
    clearContact({ commit }) {
      commit('CLEAR_CONTACT')
    }
  },
  modules: {
  }
})
