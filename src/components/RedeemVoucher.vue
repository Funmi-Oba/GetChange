<template lang="">
  <DialogBox>
    <template #back> < Back </template>
    <template #dialog-box>
      <div class="max-w-xs mx-auto" v-if="!showVoucherSuccessful">
        <h2 class="text-[#013C61] text-lg font-bold text-center pt-15">
          Kindly enter customer unique IOU code to validate their voucher
        </h2>
        <div class="flex justify-center gap-3 mt-6 mb-8">
          <input
            v-for="n in 5"
            v-model="tokenArray[n - 1]"
            :key="n"
            maxlength="1"
            type="text"
            class="w-12 h-12 border text-[#013C61] border-[#6A7E8A80] rounded-md text-center text-xl focus:outline-none focus:border-[#013C61]"
            @input="handleToken"
          />
        </div>
        <p class="text-red-600 text-sm text-center mt-4" v-if="errorMessage">
          Error: code not associated with customer's phone number - {{phone}}
        </p>
      </div>
      <div v-if="showVoucherSuccessful" class="max-w-2xs mx-auto">
        <div class="flex flex-col items-center">
          <h2 class="text-[#013C61] text-lg font-bold text-center pt-15">
            IOU Voucher of {{amount}} point(s) redeemed successfully for {{phone}}
          </h2>

          <img src="/icons/verify.svg" alt="verify icon" class="w-15 h-15 mt-6" />
        </div>
      </div>
    </template>
  </DialogBox>
</template>
<script>
import DialogBox from './DialogBox.vue'
export default {
  components: {
    DialogBox,
  },
  data() {
    return {
      tokenArray: ['', '', '', '', ''],
      showVoucherSuccessful: false,
      errorMessage: false,
    }
  },
  methods: {
    handleToken() {
      const token = this.tokenArray.join('')
      if (token.length === 5) {
        if (token === '44444') {
          this.showVoucherSuccessful = true
          this.errorMessage = false
        } else {
          this.errorMessage = true
        }
      }
    },
  },
   props: {
    phone: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang=""></style>
