<template lang="">
  <div class="relative flex space-x-14">
    <div class="flex flex-col space-y-6 w-3/4">
      <div
        class="flex items-center justify-between w-full h-15 px-6 py-2 rounded-md shadow-md bg-white"
      >
        <p class="text-[#013C61] font-semibold text-lg">Store Wallet</p>
        <p class="text-[#013C61] font-semibold text-3xl">
          <span class="align-super text-xl">₦</span>2,500
        </p>
        <GreenButton @click="showTopupWallet = true">
          <template #button-name>Top up wallet</template>
        </GreenButton>
        <DialogBox v-if="showTopupWallet" @close="showTopupWallet = false">
          <template #dialog-box>
            <TopupWallet  />
          </template>
        </DialogBox>
      </div>
      <div
        class="flex items-center justify-between w-full h-15 px-6 py-2 rounded-md shadow-md bg-white"
      >
        <p class="text-[#013C61] font-semibold text-lg">Total Disbursed</p>
        <p class="text-[#013C61] font-semibold text-3xl">
          <span class="align-super text-xl">₦</span>12,000
        </p>
        <OutlineButton>
          <template #button-name>View History</template>
        </OutlineButton>
      </div>

      <div>
        <CustomTableHeader>
          <template #recent-activities>Recent Activities</template>
          <template #table-page>1 of 8</template>
        </CustomTableHeader>
        <DashboardTable />
      </div>
    </div>
    <div class="w-1/4 h-auto -my-14 -mr-14 bg-white">
      <DashboardWidget />
    </div>
  </div>
</template>
<script>
import GreenButton from '@/components/GreenButton.vue'
import OutlineButton from '@/components/OutlineButton.vue'
import CustomTableHeader from '@/components/CustomTableHeader.vue'
import DashboardTable from '@/components/DashboardTable.vue'
import DashboardWidget from '@/components/DashboardWidget.vue'
import DialogBox from '@/components/DialogBox.vue'
import TopupWallet from '@/components/TopupWallet.vue'

export default {
  components: {
    GreenButton,
    OutlineButton,
    CustomTableHeader,
    DashboardTable,
    DashboardWidget,
    DialogBox, TopupWallet,
  },
  data() {
    return {
      showTopupWallet: false,
    }
  },
}
</script>
<style lang=""></style>
