<template lang="">
  <DialogBox @close="$emit('no')">
    <template #dialog-box>
      <h2 class="text-[#013C61] text-lg font-bold text-center pb-5">Delete Employee</h2>
      <p class="text-[#6A7E8A] text-sm text-center mb-5">
        Are you sure you want to delete {{employee.firstName}} {{employee.lastName}}?
      </p>
      <div class="flex justify-between space-x-4 mt-5">
        <OutlineButton @click="$emit('no')">
          <template #button-name>No, Cancel</template>
        </OutlineButton>
        <GreenButton @click="$emit('confirm-delete')">
          <template #button-name>Yes, Delete</template>
        </GreenButton>
      </div>
    </template>
  </DialogBox>
</template>
<script>
import DialogBox from './DialogBox.vue';
import GreenButton from './GreenButton.vue';
import OutlineButton from './OutlineButton.vue';
export default {
  components:{
    GreenButton, OutlineButton, DialogBox,
  },
  emits:["no", "confirm-delete"],
  props: {
    employee: {
      type: Object,
      required: true, 
    },
}
}
</script>
<style lang=""></style>
