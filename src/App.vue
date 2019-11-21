<template>
  <div id="app">
    <div class="sticky-top">
      <ul class="nav justify-content-center bg-white mb-3" id="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <span>Home</span>
          </router-link>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("setContacts");
  },
}
</script>>