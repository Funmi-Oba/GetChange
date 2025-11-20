<template lang="">
  <div class="flex space-x-8 justify-center  mt-20 mr-20 pb-20">
    <div
      class="w-30 h-30 text-xs flex items-center justify-center text-white/50 overflow-hidden rounded-full bg-[#6A7E8A]"
    >
      <img src="/images/funmi.png" alt="" class="w-full h-full object-cover">
    </div> 
    <div class="flex flex-col space-y-8">
      <div class="flex flex-col space-y-4">
        <label for="" class="text-[#6A7E8A] text-base">First Name</label>
        <input
          type="text"
          name=""
          value="Funmilayo"
          class="border-b border-[#E6E7EB] text-[#013C61] pb-2 outline-none w-100"
        />
      </div>

      <div class="flex flex-col space-y-4">
        <label for="" class="text-[#6A7E8A] text-base">Last Name</label>
        <input
          type="text"
          name=""
          value="Oba"
          class="border-b border-[#E6E7EB] text-[#013C61] pb-2 outline-none w-100"
        />
      </div>
      <div class="flex flex-col space-y-4">
        <label for="" class="text-[#6A7E8A] text-base">Email</label>
        <input
          type="email"
          name=""
          value="funmi.bakery@gmail.com"
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
<style lang=""></style>
