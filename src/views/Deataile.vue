<template>
    <div class="detaile">
        <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple">
                <h3>新闻中心</h3>
            </div>
        </el-col>
        <el-col :span="24">
            <div class="grid-content bg-purple-light">
               <div class="pro"><span>2018-12-03</span><span>&nbsp; &nbsp;来源：百度</span></div>
            </div>
        </el-col>
        <el-col :span="24">
            <div class="grid-content bg-purple">
                <div class="new_detaile">
                    顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶
                </div>
            </div>
        </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'detaile',
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.$store.state.back=true;
        this.$store.state.title=this.$route.params.title;
        console.log(this.$route.params.id);
    }
})
</script>

