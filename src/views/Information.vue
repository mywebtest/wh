<template>
    <div class="Information">
      <newlist ftitle="市场行情"></newlist>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import newlist from "@/components/newlist.vue";
export default Vue.extend({
  name: "Information",
  components: {
    newlist
  },
  created() {
    this.$store.state.back = true;
    this.$store.state.title = "市场行情";
  }
});
</script>
