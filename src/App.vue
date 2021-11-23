<template>
 <div class="map">
   <Banner/>
 </div>
</template>

<script>
import Addblog from './components/Addblog.vue'
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    Addblog,
    Banner
  }
}
</script>

<style>
  html{
    background-color: rgb(226, 221, 221);
  }
  a{
    text-decoration: none;
  }
</style>
