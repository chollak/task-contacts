<template>
  <div class="view mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto">
          <h3>
            {{contact.name}}
            <small class="float-right btn-group">
              <router-link class="btn btn-sm btn-primary" :to="{ name: 'edit', params: { id: contact.id }}">Edit</router-link>
              <button class="btn btn-sm btn-danger" @click="deleteContact(contact.id)">Delete</button>
            </small>
          </h3>
          <ul class="list-group" v-for="(field,index) in contact.fields" :key="index">
            <li class="list-group-item">{{field.phone}}</li>
            <li class="list-group-item">{{field.address}}</li>
            <li class="list-group-item">{{field.email}}</li>
            <br />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "get",
  methods: {
    deleteContact(id) {
      this.$store.dispatch("deleteContact", id);
      this.$router.push({name:'home'});
    }
  },
  computed: {
    contact() {
        return this.$store.getters.getContact(this.$route.params.id);
    }
  }
};
</script>