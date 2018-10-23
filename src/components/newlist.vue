<template>
    <div class="newlist">
       <div class="headnav">
          <h3 v-if="btitle =='热点新闻'">
              <span>
                  {{btitle}}
              </span>
          </h3>
          <ul>
              <li v-for="item in list" :key="item.id">
                  <el-row>
                    <el-col :span="24">
                        <router-link :to="{name:'detaile',params:{id:123,title:'新闻中心'}}">
                        <el-card v-if="btitle =='新闻中心' || btitle =='热点新闻'">
                            <el-col :span='10'>
                                <img :src="item.thumb" class="image"/>
                            </el-col>
                            <el-col :span="14">
                                <div style="padding: 0 0 14px 14px;">
                                    <span>{{item.title}}</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ item.addTime }}</time>
                                    </div>
                                </div>
                            </el-col>
                        </el-card>
                        <el-card v-if="btitle =='市场行情'">
                            <el-col :span="24">
                                <div style="padding: 0 0 14px 14px;">
                                    <span>{{item.title}}</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ item.addTime }}</time>
                                    </div>
                                </div>
                            </el-col>
                        </el-card>
                        </router-link>
                    </el-col>
                </el-row>
              </li>
          </ul>
       </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "newlist",
  props: ["ftitle"],
  data() {
    return {
      btitle: "",
      list: []
    };
  },
  created() {
    var that = this;
    that.btitle = that.ftitle;
    that.$axios.get(this.$store.state.api + "news", {}).then(function(data) {
      if (that.btitle == "热点新闻") {
        that.list = data.data.splice(1, 5);
      } else {
        that.list = data.data;
      }
    });
  },
  mounted() {}
});
</script>