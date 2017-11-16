<template>
  <div class="topnav">
    <ul class="navlist">
      <li>
        <router-link id="navbar-brand" :to="{name: 'Dashboard'}" name="Dashboard" @click.native="emitTitle">[piggy] bank</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Users'}" name="Users" @click.native="emitTitle">Users</router-link>
      </li>
      <!--<li>
        <router-link :to="{name: 'Dashboard'}" name="Records" @click.native="emitTitle">Records</router-link>
      </li>-->
    </ul>
  </div>
</template>

<script>
import { EventBus } from '../../eventBus'

export default {
  methods: {
    emitTitle (e) {
      EventBus.$emit('pageChange', e.target.name)
      console.log(e.target.name)
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
/* Add a black background color to the top navigation */

.topnav {
  overflow: hidden;
  width: inherit;
  /*max-width: 200px;*/
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #333;
  text-align:left;
  padding: 15px 0 15px 15px;
  text-decoration: none;
  font-size: 16px;
  background-color: #ddd;
  font-weight:bold;
}

#navbar-brand {
  font-weight:bold;
  letter-spacing:4px;
  font-size:18px;
  background-color: white;
  padding-bottom: 19px;
  padding-right:0;
  background-color: black;
  color: white
}
#navbar-brand:hover{
  color:lightgrey;
  
}
.navlist {
  margin: 0;
}

li a {
  display: block;
  width: 100%;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color:gray;
  color: white;
  font-weight:bold;
}
/* Add a color to the active/current link */

.topnav a.active {
  color: white;
}
ul a:nth-child(n+1) {
  /*border-bottom: 1px solid #333;*/
}
</style>
