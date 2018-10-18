<template>
    <div class="footerbar">
        <el-row>
            <el-col :span="6"><router-link to="/"><div class="grid-content bg-purple"><i class="fa fa-home"></i><p>首页</p></div></router-link></el-col>
            <el-col :span="6"><router-link to="/information"><div class="grid-content bg-purple-light"><i class="fa fa-bell-o"></i><p>市场行情</p></div></router-link></el-col>
            <el-col :span="6"><router-link to="/news"> <div class="grid-content bg-purple"><i class="fa fa-telegram"></i><p>新闻中心</p></div></router-link></el-col>
            <el-col :span="6"><router-link to="/people"><div class="grid-content bg-purple"><i class="fa fa-user-circle"></i><p>个人中心</p></div></router-link></el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "footerbar"
});
</script>
