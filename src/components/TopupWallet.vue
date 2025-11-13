<template lang="">
    <div>
        <h2 class="text-[#013C61] text-lg font-bold text-left pb-5">
              Top up your store wallet
            </h2>

            <div class="space-y-8">
              <div class="relative">
                <label class="text-xs text-gray-600 absolute">Enter Amount</label>
                <input
                  type="number"
                  name=""
                  value=""
                  class="w-full border-b pt-5 focus:outline-none text-left focus:border-green-800 text-[#013C61]"
                />
              </div>
              <div class="relative">
                <label class="text-xs text-gray-600 absolute">Card Number</label>
                <input
                  type="number"
                  name=""
                  value=""
                  class="w-full pt-5 border-b focus:outline-none focus:border-green-800 text-[#013C61]"
                />
              </div>
              <div class="flex justify-between space-x-5">
                <div class="relative">
                  <label class="text-xs text-gray-600 absolute">Expiry Date (MM/YY)</label>
                  <input
                    type="number"
                    name=""
                    value=""
                    class="w-full pt-5 border-b focus:outline-none focus:border-green-800 text-[#013C61]"
                  />
                </div>
                <div class="relative">
                  <label class="text-xs text-gray-600 absolute">CVV</label>
                  <input
                    type="number"
                    name=""
                    value=""
                    class="w-full pt-5 border-b focus:outline-none focus:border-green-800 text-[#013C61]"
                  />
                </div>
              </div>
              <div class="flex justify-between">
                <div class="flex space-x-2 items-center">
                  <div class="h-2 w-2 bg-green-500"></div>
                  <p class="text-sm text-[#6A7E8A]">Use saved debit card</p>
                </div>
                <button type="button" class="bg-[#2BDA53] text-white rounded-md px-4 py-2 text-base">
                  Credit Wallet
                </button>
              </div>
            </div>

            
          
    </div>
</template>
<script>
export default {
    emits: ['close'],
}
</script>
<style lang="">
    
</style>