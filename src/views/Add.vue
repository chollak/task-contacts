<template>
  <div class="add mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto">
          <h3>
            New contact
            <small class="float-right">
              <button class="btn btn-sm btn-success" @click="submit">Submit</button>
            </small>
          </h3>
          <hr />

          <input type="text" class="form-control mb-2" placeholder="Name" v-model="newContact.name" />
          <hr />
          <div class="row">
            <div class="col-md-12" v-for="(field, index) in newContact.fields" :key="index">
              <button
                class="btn btn-danger mb-1 btn-sm"
                @click="deleteField(index)"
              >Delete field {{index}}</button>
              <input
                type="text"
                class="form-control mb-2"
                :placeholder="'Phone - '+index"
                v-model="field.phone"
              />
              <input
                type="text"
                class="form-control mb-2"
                :placeholder="'Address - '+index"
                v-model="field.address"
              />
              <input
                type="text"
                class="form-control mb-2"
                :placeholder="'Email - '+index"
                v-model="field.email"
              />
              <hr />
            </div>
          </div>
          <button class="btn btn-primary btn-block" @click="newFields">Add new fields</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      newContact: {
        id: null,
        name: "",
        fields: [{ phone: "", address: "", email: "" }]
      }
    };
  },
  methods: {
    newFields() {
      this.newContact.fields.push({ phone: "", address: "", email: "" });
    },
    deleteField: function(index) {
      this.newContact.fields.splice(index, 1);
      if (this.newContact.fields.length === 0) this.newFields();
    },
    submit() {
      this.$store.dispatch("addContact", this.newContact);
      this.clearData();
    },
    clearData() {
      this.newContact = {
        id: null,
        name: "",
        fields: [{ phone: "", address: "", email: "" }]
      };
    }
  },
};
</script>