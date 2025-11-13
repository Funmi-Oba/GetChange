<script>
export default {
 data() {
    return {
      activities: [
        {
          id: 1,
          description: 'Wallet top up',
          date: '06 Aug, 2019',
          time: '12:24PM',
          staff: 'Admin',
          amount: 'NGN2000.00'
        },
        {
          id: 2,
          description: 'Top for 081359491**',
          date: '06 Aug, 2019',
          time: '10:44AM',
          staff: 'Jane',
          amount: 'NGN55.00'
        },
        {
          id: 3,
          description: 'Top for 080234578**',
          date: '06 Aug, 2019',
          time: '09:14AM',
          staff: 'Hannah',
          amount: 'NGN400.00'
        },
        {
          id: 4,
          description: 'IOU for 081478491**',
          date: '05 Aug, 2019',
          time: '01:30PM',
          staff: 'John',
          amount: 'BRM***K'
        },
        {
          id: 5,
          description: 'IOU for 081359491**',
          date: '05 Aug, 2019',
          time: '11:24AM',
          staff: 'Admin',
          amount: 'SAM***G'
        },
        {
          id: 6,
          description: 'Top for 081359491**',
          date: '04 Aug, 2019',
          time: '12:45PM',
          staff: 'Jane',
          amount: 'NGN105.00'
        },
      ],
    };
  }, 

  
}
</script>
<template lang="">
  <div class="overflow-x-hidden">
  <table class="w-full border-separate border-spacing-y-2">
    <thead>
      <tr >
        <th class="text-sm text-[#013C61] font-semibold px- py-">#</th>
        <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">Date</th>
        <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">Description</th>
        <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">Time</th>
        <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">Staff</th>
        <th class="text-right text-sm text-[#013C61] font-medium px-4 py-3">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="activity in activities" :key="activity.id" class="bg-white rounded-lg shadow-md hover:bg-[#2BDA53]/40 transition-colors">
        <td class="px-4 py-3 text-sm text-[#6A7E8A] ">{{ activity.id }}</td>
        <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ activity.description }}</td>
        <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ activity.date }}</td>
        <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ activity.time }}</td>
        <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ activity.staff }}</td>
        <td class="px-4 py-3 text-sm text-[#6A7E8A] text-right">{{ activity.amount }}</td>
      </tr>
    </tbody>
    
  </table>
  </div>
</template>