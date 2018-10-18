<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <slide></slide>
    <fastnotice></fastnotice>
    <newlist ftitle="热点新闻"></newlist>
  </div>
</template>

<script>
// @ is an alias to /src
import slide from '@/components/slide.vue'
import newlist from '@/components/newlist.vue'
import fastnotice from '@/components/fastnotice.vue'
export default {
  name: 'home',
  components: {
    slide,
    newlist,
    fastnotice,
  },
  created(){
    this.$store.state.back = false;
    this.$store.state.title= '外汇新闻网';
  }
}
</script>
