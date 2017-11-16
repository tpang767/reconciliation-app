<template>
  <div id="app" class="content-wrapper" style="min-height:100%">

    <div class="columns-wrapper">
      <aside class="column left" id="sidebar-nav">
        <nav-bar></nav-bar>
      </aside>
      <!--<header class="top-header">
        <h2 class="title-brand">PiggyBank</h2>
      </header>-->
      <main class="column right" id='main-content'>
        <page-title :title="title"></page-title>
        <div class="container">
          <router-view></router-view>
        </div>
      </main>
    </div>

  </div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue'
import PageTitle from './components/layout/PageTitle.vue'
import { EventBus } from './eventBus'

export default {
  name: 'app',
  components: {
    NavBar,
    PageTitle
  },
  mounted () {
    EventBus.$on('pageChange', currentTitle => {
      this.changeTitle(currentTitle)
    })
  },
  data () {
    return {
      title: 'DASHBOARD'
    }
  },
  methods: {
    changeTitle (pageTitle) {
      this.title = pageTitle.toUpperCase()
    }
  }
}
</script>

<style>
html,
body,
.contentwrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid black;
}

html {
  width: 100%;
}

body {
  display: table;
  min-height: 100vh;
  min-width: 100%;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


/* main content - right column */

#main-content {
  background-color: white;
  margin: 0;
}

div.container {
  padding-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
}

.router-view {
  padding: 15px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

.content-wrapper header>* {
  -webkit-flex: 1 100%;
  flex: 1 100%;
}
/* header - topdiv */

header {
  color: white;
  background-color: slateblue;
  border-bottom: black solid 1px;
}

.title-brand {
  padding: 15px;
  margin: 0;
}
/* navbar - side */

#sidebar-nav {
  background-color:whitesmoke;
  text-align: left;
  margin: 0;
}

aside ul {
  list-style-type: none;
  padding: 0;
}

aside ul a {
  /*border:1px solid black;*/
  text-decoration: none;
}


.columns-wrapper {
  flex: 2;
  display: flex;
  padding: 0;
}

.row:before,
.row:after {
  content: "";
  display: table;
  clear: both;
}


/* Left and right column */

.column.left {
  /*border-right: 1px solid black;*/
  flex: 0 15%;
}


/* Middle column */

.column.right {
  flex: 1 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
