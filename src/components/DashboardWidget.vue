<template lang="">
  <div class="h-full w-full flex flex-col">
    <div class="h-1/3 w-full bg-[#013C61] p-6 rounded-md flex flex-col">
      <h2 class="text-sm text-white">GETCHANGE WIDGET</h2>
      <div class="flex justify-between items-center mt-8 space-x-4">
        <p class="text-white/50">Amount</p>
        <input
          type="number"
          name="amount"
          value=""
          v-model="amount"
          :disabled="!type"
          class="focus:outline-none focus:border-white disabled:text-white/20 disabled:border-white/20 border-b pr-2 text-white border-white"
        />
      </div>
      <div class="flex justify-end items-center mt-4 space-x-4">
        <div class="flex items-center space-x-2">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input type="radio" v-model="type" value="Airtime" class="hidden" />
            <span
              :class="type === 'Airtime' ? 'bg-green-500' : 'bg-white/50'"
              class="w-3 h-3 rounded-full border border-white"
            ></span>
            <span class="text-white">Airtime</span>
          </label>

          <label class="flex items-center space-x-2 cursor-pointer">
            <input type="radio" v-model="type" value="IOU Voucher" class="hidden" />
            <span
              :class="type === 'IOU Voucher' ? 'bg-green-500' : 'bg-white/50'"
              class="w-3 h-3 rounded-full border border-white"
            ></span>
            <span class="text-white">IOU Voucher</span>
          </label>
        </div>
      </div>
      <p v-if="phoneNumber === ''" class="text-base text-white/50 mt-10 text-center">
        Enter number <span class="block text-sm"><i>(use the keypad below)</i></span>
      </p>
      <div class="font-semibold text-white text-2xl text-center leading-[100%] tracking-wide mt-10">
        {{ phoneNumber }}
      </div>
    </div>

    <div class="grid grid-cols-4">
      <button
        v-for="key in keys"
        :key="key"
        @click="pressKey(key)"
        class="text-[#013C61] py-3 text-xl font-medium active:bg-green-200 hover:bg-[#6A7E8A]/10 cursor-pointer"
        :class="isNaN(key) || key === '0' ? 'bg-[#2BDA53]/20' : ''"
      >
        <img v-if="key === 'x'" src="/icons/delete.svg" class="w-5 h-5 mx-auto" alt="Delete" />
        <span v-else>{{ key }}</span>
      </button>
    </div>

    <OutlineButton class="mt-10 mx-10" @click="showCustomerQuery = true">
      <template #button-name> Query </template>
    </OutlineButton>
    <CustomerQuery
      v-if="showCustomerQuery"
      @close="showCustomerQuery = false"
      :phone="phoneNumber"
    />

    <GreenButton class="mt-10 mx-10" @click="handleGenerate">
      <template #button-name> Generate </template>
    </GreenButton>

   <RedeemVoucher 
      v-if="showRedeemVoucher" 
      @close="showRedeemVoucher = false"
      :phone="phoneNumber"
      :amount="amount"
    />
    <RechargeSuccessful
      v-if="showRechargeSuccessful"
      @close="showRechargeSuccessful = false"
      :phone="phoneNumber"
      :amount="amount"
    />
  </div>
</template>
<script>
import OutlineButton from './OutlineButton.vue'
import GreenButton from './GreenButton.vue'
import CustomerQuery from './CustomerQuery.vue'
import RechargeSuccessful from './RechargeSuccessful.vue'
import RedeemVoucher from './RedeemVoucher.vue'

export default {
  components: {
    OutlineButton,
    GreenButton,
    CustomerQuery,
    RechargeSuccessful,
    RedeemVoucher,
  },
  data() {
    return {
      type: '',
      phoneNumber: '',
      amount: '',
      keys: ['c', '<', '>', 'x', '1', '2', '3', '*', '4', '5', '6', '#', '7', '8', '9', '0'],
      showCustomerQuery: false,
      showRechargeSuccessful: false,
      showRedeemVoucher: false,
    }
  },

  methods: {
    pressKey(key) {
      if (key === 'c') {
        this.phoneNumber = ''
      } else if (key === 'x') {
        this.phoneNumber = this.phoneNumber.slice(0, -1)
      } else if (!isNaN(key) || key === '*' || key === '#') {
        if (this.phoneNumber.length < 11) {
          this.phoneNumber += key
        }
      }
    },

    handleGenerate() {
      if (!this.type) {
        alert('You can only generate Airtime or IOU Voucher')
        return
      }
      if (!this.amount || !this.phoneNumber) {
        alert('Amount or Phone number cannot be empty')
        return
      }
      if (this.type === 'Airtime') {
        this.showRechargeSuccessful = true
      }
      else if(this.type==='IOU Voucher'){
        this.showRedeemVoucher = true
      }
    },
  },
}
</script>
<style lang=""></style>
