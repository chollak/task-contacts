<template>
  <div class="home mt-5">
    <Modal />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 m-auto">
          <div class="header d-flex align-items-center justify-content-center">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" v-model="search" />
              <div class="input-group-prepend">
                <router-link to="/add" class="btn btn-outline-secondary">Add contact</router-link>
              </div>
            </div>
          </div>
          <hr />
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              v-for="(contact, index) in contacts"
              :key="index"
            >
              <span>{{contact.name}}</span>
              <span>
                <router-link
                  :to="{ name: 'get', params: { id: contact.id }}"
                  class="badge badge-primary badge-pill mr-1"
                >View</router-link>
                <router-link
                  :to="{ name: 'edit', params: { id: contact.id }}"
                  class="badge badge-warning badge-pill mr-1"
                >Edit</router-link>
                <a
                  href="#"
                  class="badge badge-danger badge-pill mr-1"
                  @click="deleteContact(contact.id)"
                >Delete</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal.vue";
export default {
  name: "home",
  components: {
    Modal
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    deleteContact(id) {
      this.$store.dispatch("deleteContact", id);
    }
  },
  computed: {
    contacts() {
      return this.getContacts.filter((c)=>{
        return c.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
    getContacts() {
      return this.$store.getters.filteredByName;
    }
  }
};
</script>