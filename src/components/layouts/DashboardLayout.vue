<template lang="">
  <DashboardHeader />
  <div class="flex">
    <DashboardSidebar class="mt-1" />
    <router-view class="w-full h-auto p-14" />
  </div>
</template>
<script>
import DashboardHeader from './DashboardHeader.vue'
import DashboardSidebar from './DashboardSidebar.vue'
export default {
  components: {
    DashboardHeader,

    DashboardSidebar,
  },
}
</script>
<style lang=""></style>
