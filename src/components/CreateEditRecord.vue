<template>
  <div class="create-edit-record">
    <form v-on:submit="addUser">
      <input type='text' placeholder="Enter First Name" v-model="user.firstName"></input>
      <br>
      <input type='text' placeholder="Enter Last Name" v-model="user.lastName"></input>
      <br>
      <input type='text' placeholder="Enter Email" v-model="user.email"></input>
      <br>
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateEditRecord',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  },
  methods: {
    addUser: () => {

    }
  }
}
</script>

<style>
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
}
input[type=text]:focus {
    border: 3px solid #555;
}
</style>
