<template>
    <div class="news">
      <newlist ftitle="新闻中心"></newlist>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import newlist from '@/components/newlist.vue'
export default Vue.extend({
    name:'news',
    components:{
      newlist
    },
    created(){
      this.$store.state.back=true;
      this.$store.state.title='新闻中心';
    }
})
</script>
