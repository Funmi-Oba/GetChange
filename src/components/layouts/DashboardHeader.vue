<template lang="">
  <div class="flex items-center justify-between relative bg-[#FFFFFF] h-20 w-full pl-4 pr-10">
    <img src="/logos/logo.png" alt="" class="" />

    <div class="flex items-center space-x-6">
      <div class="rounded-full bg-[#6A7E8A] size-6 overflow-hidden">
          <img src="/images/funmi.png" alt="" class="w-full h-full object-cover">
      </div>
      <p class="text-sm text-[#013C61]">Hi, Funmilayo</p>
      <button @click="toggleDropdown">
        <img src="/icons/arrow-down.svg" alt="" class="cursor-pointer"/>
      </button>
    </div>
  </div>

  <div
    v-if="showOptions"
   
    class="bg-white p-6 mt-20 flex flex-col absolute justify-center space-y-4 top-0 right-5 rounded-lg shadow-lg z-50"
  >
    <router-link class="flex space-x-2 cursor-pointer" :to="{name:'walletHistory'}">
      <img src="/icons/clock.svg" alt="" />
      <p class="text-xs text-[#013C61]">Wallet History</p>
    </router-link>
    <router-link :to="{name:'settings'}" class="flex space-x-2 cursor-pointer">
      <img src="/icons/settings.svg" alt="" />
      <p class="text-xs text-[#013C61]">Settings</p>
    </router-link>
    <div @click="logout" class="flex space-x-2 cursor-pointer">
      <img src="/icons/log-out.svg" alt="" />
      <p class="text-xs text-[#013C61]">Logout</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardHeader',
  data() {
    return {
      showOptions: false,
    }
  },
  methods: {
      toggleDropdown() {
      this.showOptions = !this.showOptions
    },
    logout() {
      try {
        localStorage.removeItem('user')
        this.$router.push({ name: 'login' })
      } catch (e) {
        console.log('Error logging out', e)
      }
    },
    // openAndClose() {
    //   if (this.showOptions) {
    //     return !this.showOptions
    //   }
    //   if (!this.showOptions) {
    //     return this.showOptions
    //   }
    // },
  },
}
</script>
<style lang=""></style>
