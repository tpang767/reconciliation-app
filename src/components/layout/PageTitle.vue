<template>
  <div id="page-title" class="row">
        <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: ['title']
}
</script>

<style>
#page-title{
  /*background-color: #333;
  border-bottom:1px solid black;*/
  color:#333;
  font-family: sans-serif;
  font-size:20px;
  letter-spacing:2px;
  padding-top:15px;
  padding-left:30px;
  padding-right:15px;
}
</style>
