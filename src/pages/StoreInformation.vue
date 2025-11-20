<template lang="">
  <div class="flex flex-col space-x-8 justify-center items-center mt-20 mr-20 pb-20">
    <div class="flex flex-col space-y-8">
      <div class="flex flex-col space-y-4">
        <label for="" class="text-[#6A7E8A] text-base">Business Name</label>
        <input
          type="text"
          name=""
          value="Funmilayo Oba Ventures"
          class="border-b border-[#E6E7EB] text-[#013C61] pb-2 outline-none w-100"
        />
      </div>

      <div class="flex flex-col space-y-4">
        <label for="" class="text-[#6A7E8A] text-base">Business Address</label>
        <input
          type="text"
          name=""
          value="62, Bode Thomas, Surulere, Lagos"
          class="border-b border-[#E6E7EB] text-[#013C61] pb-2 outline-none w-100"
        />
      </div>
      <div class="flex flex-col space-y-4">
        <label for="" class="text-[#6A7E8A] text-base">Phone Number</label>
        <input
          type="phone"
          name=""
          value="+2348012345678"
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
