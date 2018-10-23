<template>
    <div class="slide">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in list" :key="item.id">
         <img :src="item.thumb" class="image"/>
         <h3></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "slide",
  data() {
    return {
      list: []
    };
  },
  created() {
    var that = this;
    that.$axios.get(that.$store.state.api + "slide", {}).then(function(data) {
      that.list = data.data;
    });
  }
});
</script>
