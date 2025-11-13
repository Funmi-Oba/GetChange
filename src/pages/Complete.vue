<template lang="">
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md space-y-6">
      <div class="bg-white rounded-xl max-w-md shadow-lg shadow-[#EAEEE9] p-8 space-y-4">
        
          <h2 class="font-bold text-2xl text-[#013C61]">Great to have you onboard</h2>
          <p class="font-xs text-[#6A7E8A]">
            We just mailed you a confirmation link to josh.bakery@gmail.com. Complete registration
            by following the link.
          </p>
        
        <div class="flex justify-center">
          <router-link
            :to="{name:'dashboard'}"
            class="flex items-center justify-center px-6 py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-800"
          >
            <span>Dashboard</span>
            <img src="/icons/arrow-right.svg" alt="arrow" class="ml-2" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
