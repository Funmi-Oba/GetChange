<template lang="">
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md space-y-6">
      <div>
        <h2 class="font-bold text-2xl text-[#013C61]">Reset Password</h2>
        <p class="font-xs text-[#013C61]">
          Don’t have an account?
          <router-link :to="{name: 'signup1'}" class="text-green-600 hover:underline font-medium"
            >Sign up</router-link
          >
        </p>
      </div>
      <div class="bg-white rounded-xl max-w-md shadow-lg shadow-[#EAEEE9] p-8 space-y-4">
        <div>
          <label class="text-xs text-gray-600">Email</label>
          <div class="relative">
            <input
              type="email"
              name=""
              value=""
              class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
            />
            <img src="/icons/@.svg" alt="Email Icon" class="absolute right-0 bottom-1" />
          </div>
        </div>

        <div class="flex justify-between mt-20">
          <router-link :to="{name: 'auth'}" class="rounded-md hover:underline text-green-600 px-6 py-2"
            >Back to login?</router-link
          >

          <router-link to="" class="rounded-md bg-green-600 hover:bg-green-800 text-white px-6 py-2"
            >Recover</router-link
          >
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>

export default {
 
}
</script>
<style lang=""></style>
