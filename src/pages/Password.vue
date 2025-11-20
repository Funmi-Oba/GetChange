<template lang="">
   <div class="flex space-x-8 justify-center items-center mt-20 mr-20 pb-20">
    <div class="flex flex-col space-y-12">
      <div class="flex flex-col space-y-4 relative">
        <label for="" class="text-[#6A7E8A] text-base absolute">Old Password</label>
        <input
          type="password"
          name=""
          value=""
          class="border-b border-[#E6E7EB] text-[#013C61] pb-2 outline-none w-100"
        />
      </div>

      <div class="flex flex-col space-y-4 relative">
        <label for="" class="text-[#6A7E8A] text-base absolute">New Password</label>
        <input
          type="password"
          name=""
          value=""
          class="border-b border-[#E6E7EB] text-[#013C61] pb-2 outline-none w-100"
        />
      </div>
      <div class="flex flex-col space-y-4 relative">
        <label for="" class="text-[#6A7E8A] text-base absolute">Confirm Password</label>
        <input
          type="password"
          name=""
          value=""
          class="border-b border-[#E6E7EB] text-[#013C61] pb-2 outline-none w-100"
        />
      </div>
      <div class="flex justify-end">
        <GreenButton>
            <template #button-name>
               Save Changes
            </template>
        </GreenButton>
      </div>
    </div>
  </div>
</template>
<script>
import GreenButton from '@/components/GreenButton.vue';

export default {
    components:{
        GreenButton
    }
}
</script>
<style lang="">
    
</style>