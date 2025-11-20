<template lang="">
  <div class="flex flex-col space-y-6 w-full">
    <div class="flex items-center justify-between w-full p-2 h-15">
      <p class="text-[#013C61] font-semibold text-lg">Debit Cards</p>
      <GreenButton @click="showDebitCard = true">
        <template #button-name>Add New</template>
      </GreenButton>
    </div>
    <div
      class="w-84 h-56 flex flex-col justify-between bg-white rounded-lg shadow-lg p-4 text-[#013C61]"
    >
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <p>****</p>
          <p>****</p>
          <p>****</p>
          <p>3745</p>
        </div>
        <button>
          <img src="/icons/trash.svg" alt="Delete" class="w-4 h-4" />
        </button>
      </div>

      <div class="flex justify-between">
        <div class="flex space-x-6">
          <div class="flex flex-col">
            <p class="text-[#6A7E8A] text-xs">Card Holder</p>
            <p>Funmilayo Oba</p>
          </div>

          <div class="flex flex-col">
            <p class="text-[#6A7E8A] text-xs">Exp. Date</p>
            <p>03/27</p>
          </div>
        </div>

        <img src="/images/Mastercard-logo.svg" alt="MasterCard" />
      </div>
    </div>
    <AddDebitCard v-if="showDebitCard" @close="showDebitCard=false"/>
  </div>
</template>
<script>
import AddDebitCard from '@/components/AddDebitCard.vue'
import DialogBox from '@/components/DialogBox.vue'
import GreenButton from '@/components/GreenButton.vue'

export default {
  components: {
    DialogBox,
    GreenButton,
    AddDebitCard,
  },
  data() {
    return {
      showDebitCard: false,
    }
  },
}
</script>
<style lang=""></style>
