<template lang="">
  <div class="flex flex-col space-y-6">
    <p class="text-[#013C61] font-semibold text-lg">Wallet History</p>
    <CustomTableHeader>
      <template #recent-activities> All Transactions </template>
      <template #table-page> 1 of 8 </template>
    </CustomTableHeader>
    <DashboardTable/>
  </div>
</template>
<script>
import CustomTableHeader from '@/components/CustomTableHeader.vue'
import DashboardTable from '@/components/DashboardTable.vue';

export default {
  components: {
    CustomTableHeader, DashboardTable
  },
}
</script>
<style lang=""></style>
