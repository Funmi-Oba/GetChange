<template lang="">
  <div class="flex flex-col justify-center items-center space-x-8 mt-20 mr-20 pb-20">
    <div class="flex justify-end">
      <CustomTableHeader>
        <template #table-page> 1 of 8 </template>
      </CustomTableHeader>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full">
        <tbody>
          <tr
            v-for="history in histories"
            :key="history.id"
            class="bg-white rounded-lg shadow-md hover:bg-[#2BDA53]/40 transition-colors"
          >
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ history.id }}</td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ history.description }}</td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ history.date }}</td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A] text-right">{{ history.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import CustomTableHeader from '@/components/CustomTableHeader.vue'
import DashboardTable from '@/components/DashboardTable.vue'

export default {
  components: {
    CustomTableHeader,
    DashboardTable,
  },
  data() {
    return {
      histories: [
        {
          id: 1,
          description: 'Wallet top up',
          date: '06 Aug, 2019',
          amount: 'NGN2000.00',
        },
        {
          id: 2,
          description: 'Wallet top up',
          date: '06 Aug, 2019',
          amount: 'NGN5500.00',
        },
        {
          id: 3,
          description: 'Wallet top up',
          date: '06 Aug, 2019',
          amount: 'NGN4000.00',
        },
        {
          id: 4,
          description: 'Wallet top up',
          date: '05 Aug, 2019',
          amount: 'NGN2000.00',
        },
        {
          id: 5,
          description: 'Wallet top up',
          date: '05 Aug, 2019',
          amount: 'NGN2000.00',
        },
        {
          id: 6,
          description: 'Wallet top up',
          date: '04 Aug, 2019',
          amount: 'NGN1050.00',
        },
        {
          id: 7,
          description: 'Wallet top up',
          date: '04 Aug, 2019',
          amount: 'NGN1050.00',
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
