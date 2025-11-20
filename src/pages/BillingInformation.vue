<template lang="">
  <div class="flex flex-col space-x-8 justify-center items-center mt-20 mr-20 pb-20">
    <div class="flex flex-col space-y-8">
      <p class="text-[#6A7E8A]">Payment Method</p>
      <div class="flex flex-col space-y-5">
        <div class="flex justify-between space-x-14">
          <p class="text-[#013C61]">MASTERCARD</p>
          <p class="text-[#013C61]">**** 3745</p>
          <div class="flex justify-center items-center">
            <label for="" class="mr-2 text-[#6A7E8A] text-xs">Make Primary</label>
            <input type="radio" name="" value="" class="accent-[#2BDA53] p-1" />
          </div>
        </div>
        <div class="flex space-x-14 justify-between">
          <p class="text-[#013C61]">VISA CARD</p>
          <p class="text-[#013C61]">**** 4254</p>
          <div class="flex justify-center items-center">
            <input type="radio" name="" value="" class="accent-[#2BDA53] p-1" />
          </div>
        </div>
        <div class="flex justify-between space-x-14 text-xs mt-15">
          <p class="text-[#6A7E8A] ">Recurring Billing</p>

          <div class="flex justify-center items-center">
            <label for="" class="mr-2 text-[#6A7E8A] text-xs">Enable</label>
            <input type="radio" name="" value="" class="accent-[#2BDA53] p-1" />
          </div>
          <div class="flex justify-center items-center">
            <label for="" class="mr-2 text-[#6A7E8A] text-xs">Disable</label>
            <input type="radio" name="" value="" class="accent-[#2BDA53] p-1" />
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-15">
        <GreenButton>
          <template #button-name> Save Changes </template>
        </GreenButton>
      </div>
    </div>
  </div>
</template>
<script>
import GreenButton from '@/components/GreenButton.vue'

export default {
  components: {
    GreenButton,
  },
}
</script>
<style lang=""></style>
