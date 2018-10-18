<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerbar></headerbar>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <footerbar></footerbar>        
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import headerbar from '@/components/headerbar.vue'
import footerbar from '@/components/footerbar.vue'
export default Vue.extend({
  name:'app',
  components:{
    headerbar,
    footerbar
  }
})
</script>
