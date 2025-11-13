<template lang="">
  <button
    type="button"
    class="rounded-sm cursor-pointer bg-[#2BDA53] hover:bg-[#1ca83d] text-white px-8 py-2 font-semibold"
     @click="$emit('click')"
  >
    <slot name="button-name"></slot>
    <slot name="button-icon"></slot>
  </button>
</template>
<script>
export default {
    emits: ['click'],
}
</script>
<style lang=""></style>
