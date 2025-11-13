<template lang="">
  <div
    class="flex justify-center items-center bg-black/30 fixed inset-0 z-50 transition-all duration-300"
  >
    <div class="relative bg-white rounded-xl shadow-2xl w-96 p-8">
      <button
        type="button"
        class="shadow-lg absolute bg-[#6A7E8A] text-white text-sm flex items-center justify-center top-0 right-0 -mt-3 -mr-3 w-8 h-8 cursor-pointer rounded-full"
        @click="$emit('close')"
      >
        x
      </button>

      <slot name="dialog-box"></slot>
    </div>
  </div>
</template>
<script>
export default {
  emits: ['close'],
}
</script>
<style lang=""></style>
