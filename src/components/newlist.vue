<template>
    <div class="newlist">
       <div class="headnav">
          <h3 v-if="btitle =='热点新闻'">
              <span>
                  {{btitle}}
              </span>
          </h3>
          <ul>
              <li>
                  <el-row>
                    <el-col :span="24">
                        <router-link :to="{name:'detaile',params:{id:123,title:'新闻中心'}}">
                        <el-card v-if="btitle =='新闻中心' || btitle =='热点新闻'">
                            <el-col :span='10'>
                                <img :src="fullimg" class="image"/>
                            </el-col>
                            <el-col :span="14">
                                <div style="padding: 0 0 14px 14px;">
                                    <span>好吃的汉堡顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    </div>
                                </div>
                            </el-col>
                        </el-card>
                        <el-card v-if="btitle =='市场行情'">
                            <el-col :span="24">
                                <div style="padding: 0 0 14px 14px;">
                                    <span>好吃的汉堡顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    </div>
                                </div>
                            </el-col>
                        </el-card>
                        </router-link>
                    </el-col>
                </el-row>
              </li>
             <li>
                  <el-row>
                    <el-col :span="24">
                        <router-link :to="{name:'detaile',params:{id:123,title:'新闻中心'}}">
                        <el-card v-if="btitle =='新闻中心' || btitle =='热点新闻'">
                            <el-col :span='10'>
                                <img :src="fullimg" class="image"/>
                            </el-col>
                            <el-col :span="14">
                                <div style="padding: 0 0 14px 14px;">
                                    <span>好吃的汉堡顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    </div>
                                </div>
                            </el-col>
                        </el-card>
                        <el-card v-if="btitle =='市场行情'">
                            <el-col :span="24">
                                <div style="padding: 0 0 14px 14px;">
                                    <span>好吃的汉堡顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    </div>
                                </div>
                            </el-col>
                        </el-card>
                        </router-link>
                    </el-col>
                </el-row>
              </li>
              <li>
                  <el-row>
                    <el-col :span="24">
                        <router-link :to="{name:'detaile',params:{id:123,title:'新闻中心'}}">
                        <el-card v-if="btitle =='新闻中心' || btitle =='热点新闻'">
                            <el-col :span='10'>
                                <img :src="fullimg" class="image"/>
                            </el-col>
                            <el-col :span="14">
                                <div style="padding: 0 0 14px 14px;">
                                    <span>好吃的汉堡顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    </div>
                                </div>
                            </el-col>
                        </el-card>
                        <el-card v-if="btitle =='市场行情'">
                            <el-col :span="24">
                                <div style="padding: 0 0 14px 14px;">
                                    <span>好吃的汉堡顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
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
      currentDate: new Date(),
      fullimg:
        "http://www.17sucai.com/preview/952947/2017-12-09/webarchv3/assets/img/others/9.jpg"
    };
  },
  created() {
    this.btitle = this.ftitle;
  },
  mounted() {
    this.currentDate = new Date();
  }
});
</script>