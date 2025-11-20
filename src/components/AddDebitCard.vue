<template lang="">
  <DialogBox>
    <template #dialog-box>

        <div v-if="!showCardAddedSuccessfully">
            <h2 class="text-[#013C61] text-lg font-bold text-center pb-5">
       Add a debit card
      </h2>
      <div class="space-y-8">
        <div class="relative">
          <label class="text-xs text-gray-600 absolute">Card Number</label>
          <input
            type="number"
            name=""
            value=""
            class="w-full border-b pl-30 focus:outline-none text-left border-[#6A7E8A66] focus:border-[#013C61] text-[#013C61]"
          />
        </div>
        <div class="relative">
          <label class="text-xs text-gray-600 absolute">Expiry Date (MM/YY)</label>
          <input
            type="text"
            name=""
            value=""
            class="w-full pl-30 border-b focus:outline-none border-[#6A7E8A66] focus:border-[#013C61] text-[#013C61]"
          />
        </div>

        <div class="relative">
          <label class="text-xs text-gray-600 absolute">CVV</label>
         <input
            type="number"
            name=""
            value=""
            class="w-full pl-30 border-b focus:outline-none border-[#6A7E8A66] focus:border-[#013C61] text-[#013C61]"
          />
        </div>
        <div class="flex justify-end">
          <GreenButton @click="showCardAddedSuccessfully = true"><template #button-name>Add Card</template> </GreenButton>
        </div>
      </div>
        </div>
      

      <div v-if="showCardAddedSuccessfully" class="max-w-2xs mx-auto">
        <div class="flex flex-col items-center">
          <h2 class="text-[#013C61] text-lg font-bold text-center pt-15">
           Card added successfully
          </h2>

          <img src="/icons/verify.svg" alt="verify icon" class="w-15 h-15 mt-6" />
        </div>
      </div>
    </template>
  </DialogBox>
</template>
<script>
import DialogBox from './DialogBox.vue'
import GreenButton from './GreenButton.vue'

export default {
  components: {
    DialogBox,
    GreenButton,
  },
  data(){
    return{
        showCardAddedSuccessfully: false
    }
  }
}
</script>
<style lang=""></style>
