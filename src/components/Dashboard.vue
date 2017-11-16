<template>
  <div id="dashboard">
    <div class="row">
    </div>
    <div class="row">
    <data-table></data-table>
    </div>
  </div>
</template>

<script>
import DataTable from './DataTable.vue'
import { EventBus } from '../eventBus'

export default {
  name: 'Dashboard',
  components: {
    DataTable
  },
  data () {
    return {
    }
  },
  methods: {
    emitTitle (e) {
      EventBus.$emit('pageChange', e.target.name)
      console.log(e.target.name)
      e.preventDefault()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
