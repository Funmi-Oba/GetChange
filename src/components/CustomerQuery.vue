<template lang="">
  <DialogBox>
    <template #dialog-box>
      <div>
        <h2 class="tracking-wider bg-[#2BDA53] text-white text-2xl px-8 py-2 text-center">
          {{ phone }}
        </h2>
        <table class="w-full border-separate border-spacing-y-2">
          <thead>
            <tr class="uppercase">
              <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">Description</th>
              <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">Date</th>
              <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="query in customerQuery"
              :key="query.id"
              class="bg-white rounded-lg shadow-md hover:bg-[#2BDA53]/40 transition-colors"
            >
              <td class="px-4 py-3 text-sm text-[#6A7E8A] ">{{ query.description }}</td>
              <td class="px-4 py-3 text-sm text-[#6A7E8A] ">{{ query.date }}</td>
              <td class="px-4 py-3 text-sm text-[#FC001F] ">{{ query.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </DialogBox>
</template>
<script>
import DialogBox from '@/components/DialogBox.vue'
export default {
  components: { DialogBox },
  data() {
    return {
      customerQuery: [
        {
          id: 1,
          description: 'NGN55 Airtime',
          date: '06 Aug, 2019',
          status: 'Reedemed as airtime',
        },
        {
          id: 2,
          description: 'SAM***G (NGN500)',
          date: '06 Aug, 2019',
          status: 'Reedemed as airtime',
        },
        {
          id: 3,
          description: 'BRM***K (NGN100)',
          date: '06 Aug, 2019',
          status: 'Reedemed as vouncher',
        },
        {
          id: 4,
          description: 'NGN70 Airtime',
          date: '06 Aug, 2019',
          status: 'Reedemed as airtime',
        },
        {
          id: 5,
          description: 'NGN30 Airtime',
          date: '06 Aug, 2019',
          status: 'Reedemed as airtime',
        },
      ],
    }
  },
  props: {
    phone: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang=""></style>
