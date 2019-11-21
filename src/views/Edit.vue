<template>
  <div class="edit mt-5">
    <div class="container">      
      <div class="row">
        <div class="col-md-6 m-auto">
          <h3>
            Edit contact
            <small class="float-right">
              <button class="btn btn-sm btn-success" @click="submit">Save</button>
            </small>
          </h3>
          <hr />

          <input type="text" class="form-control mb-2" placeholder="Name" v-model="contact.name" />
          <hr />
          <div class="row">
            <div class="col-md-12" v-for="(field, index) in contact.fields" :key="index">
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
  name: "edit",
  data() {
    return {
      contact: {
        id: null,
        name: "",
        fields: [{ phone: "", address: "", email: "" }]
      }
    };
  },
  mounted() {
    this.setContact();
  },
  methods: {
    newFields() {
      this.contact.fields.push({ phone: "", address: "", email: "" });
    },
    deleteField: function(index) {
      this.contact.fields.splice(index, 1);
      if (this.contact.fields.length === 0) this.newFields();
    },
    submit() {
        this.$store.dispatch('updateContact',this.contact);
        this.$router.push({name:'get',params:{id:this.$route.params.id}});
    },
    setContact() {
      this.contact.id = this.contactN.id;
      this.contact.name = this.contactN.name;
      this.contact.fields = this.contactN.fields;
    }
  },
  computed: {
    contactN() {
      return this.$store.getters.getContact(this.$route.params.id);
    }
  }
};
</script>