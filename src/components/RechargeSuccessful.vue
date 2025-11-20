<template lang="">

    <DialogBox>
       
      <template #dialog-box>
        <h2 class="text-[#013C61] text-lg font-bold text-center pb-5">Recharge Successful</h2>
        <p class="text-sm text-[#6A7E8A] text-center max-w-sm">
          The transfer of NGN{{ amount }} to {{ phone }} was successful
        </p>
      </template>
    </DialogBox>

</template>
<script>
import DialogBox from './DialogBox.vue'
export default {
  components: {
    DialogBox,
  },
  props: {
    phone: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang=""></style>
