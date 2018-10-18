<template>
    <div class="slide">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
         <img :src="fullimg" class="image"/>
         <h3></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'slide',
    data(){
        return {
            fullimg:'http://www.17sucai.com/preview/952947/2017-12-09/webarchv3/assets/img/others/9.jpg',
        }
    }
})
</script>
