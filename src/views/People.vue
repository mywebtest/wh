<template>
    <div class="People">
        
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "People",
  created() {
    this.$store.state.back = true;
    this.$store.state.title = "个人中心";
  }
});
</script>
