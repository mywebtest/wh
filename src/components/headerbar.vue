<template>
    <div class="headerbar">
      <el-row>
        <el-col :span="4"><div class="grid-content left"><span v-if="!this.$store.state.back">&nbsp;</span><i class="fa fa-angle-left" v-if="this.$store.state.back"></i></div></el-col>
        <el-col :span="16"><div class="grid-content title">{{this.$store.state.title}}</div></el-col>
        <el-col :span="4"><div class="grid-content right"> </div></el-col>
      </el-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'headerbar'
})
</script>
