<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <user-form></user-form>
    <h2>Listado</h2>
    <ul>
      <li v-for="user in usersList" :key="user.id">
        {{ user.data.name }} | {{ user.data.email }}
      </li>
      <a href="#">Eliminar</a>
      |
      <a href="#">Editar</a>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from "@/components/UserForm";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    UserForm,
  },
  computed: {
    ...mapState(["usersList"]),
  },
  methods: {
    ...mapActions(["getUsersList"]),
  },
  created() {
    this.getUsersList();
  },
};
</script>
