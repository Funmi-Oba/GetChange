<template lang="">
  <div class="h-full w-full flex flex-col">
    <div class="h-1/3 w-full bg-[#013C61] p-6 rounded-md flex flex-col">
      <h2 class="text-sm text-white">GETCHANGE WIDGET</h2>
      <div class="flex justify-between items-center mt-8 space-x-4">
        <p class="text-white/50">Amount</p>
        <div class="bg-white/50 w-full h-0.5 border-1 -mb-2"></div>
      </div>
      <div class="flex justify-end items-center mt-4 space-x-4">
        <div class="flex items-center space-x-2">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input type="radio" v-model="type" value="Airtime" class="hidden" />
            <span
              :class="type === 'Airtime' ? 'bg-green-500' : 'bg-white/50'"
              class="w-3 h-3 rounded-full border-1 border-white"
            ></span>
            <span class="text-white">Airtime</span>
          </label>

          <label class="flex items-center space-x-2 cursor-pointer">
            <input type="radio" v-model="type" value="IOU" class="hidden" />
            <span
              :class="type === 'IOU' ? 'bg-green-500' : 'bg-white/50'"
              class="w-3 h-3 rounded-full border-1 border-white"
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
        class=" text-[#013C61] py-3 text-xl font-medium active:bg-green-200 hover:bg-[#6A7E8A]/10 cursor-pointer"
       :class="isNaN(key) || key === '0' ? 'bg-[#2BDA53]/20' : ''"
      >
        <img v-if="key === 'x'" src="/icons/delete.svg" class="w-5 h-5 mx-auto" alt="Delete" />
        <span v-else>{{ key }}</span>
      </button>
    </div>
    
         <OutlineButton class="mt-10 mx-10">
        <template #button-name>
            Query
        </template>
    </OutlineButton>
    <GreenButton class="mt-10 mx-10">
        <template #button-name>
          Generate
        </template>
    </GreenButton>
    
   
  </div>
</template>
<script>
import OutlineButton from './OutlineButton.vue';
import GreenButton from './GreenButton.vue';
export default {
    components:{
        OutlineButton, GreenButton,
    },
  data() {
    return {
      type: 'Airtime',
      phoneNumber: '',
      keys: ['c', '<', '>', 'x', '1', '2', '3', '*', '4', '5', '6', '#', '7', '8', '9', '0'],
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
  },
}
</script>
<style lang=""></style>
