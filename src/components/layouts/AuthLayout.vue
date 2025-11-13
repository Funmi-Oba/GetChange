<script>
export default {
  name: 'App',
}
</script>

<template>
  <div class="h-screen overflow-hidden flex items-center">
    <div class="w-1/2 relative h-full flex">
      <img src="/images/Object-male.png" class="z-0 inset-0 absolute w-full h-full" />
      <div class="relative z-10 h-full flex-col flex justify-end pb-10 w-full items-center text-center text-white px-6">
        <h2 class="text-lg font-semibold mb-2">No Hazzles</h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
        </p>
        <div class="flex justify-center mt-4 space-x-2">
          
          <div class="h-2 w-2 rounded-full bg-white/50"></div>
          <div class="h-2 w-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
    <div class="">
      <router-view />
      <div class="flex justify-between gap-8 mt-20 ml-10">
        <p class="text-xs text-gray-500 text-center">
          By siging up, you agree to our
          <a href="#" class="text-green-600 hover:underline">Terms</a> and
          <a href="#" class="text-green-600 hover:underline">Privacy Policy</a>
        </p>
        <p class="text-xs text-gray-500 text-center">© 2019 Tinylabs. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style></style>
