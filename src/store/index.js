import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: [],
    },
    getters: {
        getContact: state => id => {
            return state.contacts.find(contact => contact.id == id);
        },
        filteredByName: state => {
            return state.contacts.sort((a, b) => {
                let n1 = a.name;
                let n2 = b.name;
                if (n1 < n2)
                    return -1
                if (n1 > n2)
                    return 1
                return 0
            });
        }
    },
    mutations: {
        SET_CONTACTS: (state, contacts) => {
            state.contacts = contacts;
        },
        SAVE_CONTACTS: (state) => {
            const parsed = JSON.stringify(state.contacts);
            localStorage.setItem("contacts", parsed);
        },
        ADD_CONTACT: (state, contact) => {
            contact.id = state.contacts.length;
            let obj = {
                id: contact.id,
                name: contact.name,
                fields: contact.fields
            }
            state.contacts.push(obj);
        },
        UPDATE_CONTACT: (state, contact) => {
            state.contacts[state.contacts.findIndex(obj => obj.id == contact.id)] = contact;
        },
        DELETE_CONTACT: (state, id) => {
            state.contacts.splice(state.contacts.findIndex(obj => obj.id == id), 1);
        }
    },
    actions: {
        addContact: (context, contact) => {
            context.commit('ADD_CONTACT', contact);
            context.commit('SAVE_CONTACTS');
        },
        updateContact: (context, contact) => {
            context.commit('UPDATE_CONTACT', contact);
            context.commit('SAVE_CONTACTS');
        },
        deleteContact: (context, id) => {
            context.commit('DELETE_CONTACT', id);
            context.commit('SAVE_CONTACTS');
        },
        setContacts: (context) => {
            let contacts;
            if (localStorage.getItem("contacts")) {
                contacts = JSON.parse(localStorage.getItem("contacts"));
                context.commit('SET_CONTACTS', contacts);
            }
        }
    },
    modules: {
    }
})
