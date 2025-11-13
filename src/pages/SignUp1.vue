<template lang="">
  
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md space-y-6">
      <div>
        <h2 class="font-bold text-2xl text-[#013C61]">Create your free account</h2>
        <p class="font-xs text-[#013C61]">
          Already registered?
          <router-link :to="{name:'auth'}" class="text-green-600 hover:underline font-medium"
            >Sign in</router-link
          >
        </p>
      </div>
      <div class="bg-white rounded-xl max-w-md shadow-lg shadow-[#EAEEE9] p-8 space-y-4">
        <div class="flex gap-4">
          <div class="w-1/2">
            <label class="text-xs text-gray-600">First Name</label>
            <div class="relative">
              <input
                type="text"
                name=""
                value=""
                class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
              />
              <img src="/icons/user.svg" alt="User Icon" class="absolute right-0 bottom-1" />
            </div>
          </div>
          <div class="w-1/2">
            <label class="text-xs text-gray-600">Last Name</label>
            <div class="relative">
              <input
                type="text"
                name=""
                value=""
                class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
              />
              <img src="/icons/user.svg" alt="User Icon" class="absolute right-0 bottom-1" />
            </div>
          </div>
        </div>
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
        <div>
          <label class="text-xs text-gray-600">Password</label>
          <div class="relative">
            <input
              type="password"
              name=""
              value=""
              class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
            />
            <img src="/icons/eye.svg" alt="Eye Icon" class="absolute right-0 bottom-1" />
          </div>
        </div>
        <div class="flex justify-end">
          <button
            type="Submit"
            class="w-40 rounded-md bg-green-600 hover:bg-green-800 text-white px-6 py-2"
          >
            <router-link :to="{name: 'signup2'}">Continue</router-link>
          </button>
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
