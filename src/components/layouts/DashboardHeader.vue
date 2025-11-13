<template lang="">
  <div class="flex items-center justify-between bg-[#FFFFFF] h-20 w-full pl-4 pr-10">
    <img src="/logos/logo.png" alt="" class="" />

    <div class="flex items-center space-x-6">
      <div class="rounded-full bg-[#6A7E8A] size-6"></div>
      <p class="text-sm text-[#013C61]">Hi, Joshua</p>
       <img src="/icons/arrow-down.svg" alt="" />
      <button class="text-red-500 hover:underline cursor-pointer" @click="logout">
       Logout
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardHeader',
  methods:{
    logout(){
      try{
        localStorage.removeItem('user')
        this.$router.push({name:'login'})
      }
      catch(e){
        console.log("Error logging out", e)
      }
    }
  }
}
</script>
<style lang=""></style>
