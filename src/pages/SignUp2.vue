<template lang="">
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md space-y-6">
      <div>
        <h2 class="font-bold text-2xl text-[#013C61]">Create your free account</h2>
        <p class="font-xs text-[#013C61]">
          Already registered?
          <router-link to="/login" class="text-green-600 hover:underline font-medium"
            >Sign in</router-link
          >
        </p>
      </div>
      <div class="bg-white rounded-xl max-w-md shadow-lg shadow-[#EAEEE9] p-8 space-y-4">
        <div>
          <label class="text-xs text-gray-600">Business Name</label>
          <div class="relative">
            <input
              type="text"
              name=""
              value=""
              class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
            />
            <img src="/icons/office.svg" alt="Email Icon" class="absolute right-0 bottom-1" />
          </div>
        </div>
        <div>
          <label class="text-xs text-gray-600">Business Address</label>
          <div class="relative">
            <input
              type="text"
              name=""
              value=""
              class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
            />
            <img src="/icons/map-pin.svg" alt="Eye Icon" class="absolute right-0 bottom-1" />
          </div>
        </div>
        <div>
          <label class="text-xs text-gray-600">Phone Number</label>
          <div class="relative">
            <input
              type="Phone"
              name=""
              value=""
              class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
            />
            <img src="/icons/phone.svg" alt="Email Icon" class="absolute right-0 bottom-1" />
          </div>
        </div>
        <div class="flex justify-between">
          <router-link
            :to="{name: 'signup1'}"
            class="rounded-md bg-green-600 hover:bg-green-800 text-white px-6 py-2">
            Back
          </router-link>
          <router-link
            :to="{name:'complete'}"
            class="rounded-md bg-green-600 hover:bg-green-800 text-white px-6 py-2"
            >Finish</router-link
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
