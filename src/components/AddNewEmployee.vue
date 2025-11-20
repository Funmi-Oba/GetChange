<template lang="">
  <DialogBox>
    <template #dialog-box>
      <div v-if="!addedSuccessfully">
        <h2 class="text-[#013C61] text-lg font-bold text-center pb-5">
          Add a new member of your team
        </h2>
        <div class="space-y-8">
          <div class="relative">
            <label class="text-xs text-gray-600 absolute">First Name</label>
            <input
              type="text"
              v-model="firstName"
              name=""
              value=""
              class="w-full border-b pl-25 focus:outline-none text-left border-[#6A7E8A66] focus:border-[#013C61] text-[#013C61]"
            />
          </div>
          <div class="relative">
            <label class="text-xs text-gray-600 absolute">Last Name</label>
            <input
              type="text"
              v-model="lastName"
              name=""
              value=""
              class="w-full border-b pl-25 focus:outline-none text-left border-[#6A7E8A66] focus:border-[#013C61] text-[#013C61]"
            />
          </div>
          <div class="relative">
            <label class="text-xs text-gray-600 absolute">Email</label>
            <input
              type="email"
              v-model="email"
              name=""
              value=""
              class="w-full border-b pl-25 focus:outline-none text-left border-[#6A7E8A66] focus:border-[#013C61] text-[#013C61]"
            />
          </div>
          <div class="relative">
            <label class="text-xs text-gray-600 absolute">Phone Number</label>
            <input
              type="number"
              v-model="phone"
              name=""
              value=""
              class="w-full pl-25 border-b focus:outline-none border-[#6A7E8A66] focus:border-[#013C61] text-[#013C61]"
            />
          </div>

          <div class="relative">
            <label class="text-xs text-gray-600 absolute">Assign Role</label>
            <select
              v-model="role"
              class="border-b pl-25 outline-none w-full border-[#6A7E8A66] focus:border-[#013C61] text-[#013C61] text-base"
            >
              <option value="" disabled selected hidden></option>
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <div class="flex justify-end">
            <GreenButton @click="addMember"
              ><template #button-name> Add Member </template>
            </GreenButton>
          </div>
        </div>
      </div>

      <div v-if="addedSuccessfully" class="max-w-2xs mx-auto">
        <div class="flex flex-col items-center">
          <h2 class="text-[#013C61] text-lg font-bold text-center pt-15">
            Member added successfully
          </h2>

          <img src="/icons/verify.svg" alt="verify icon" class="w-15 h-15 mt-6" />
        </div>
      </div>
    </template>
  </DialogBox>
</template>
<script>
import DialogBox from './DialogBox.vue'
import GreenButton from './GreenButton.vue'

export default {
  components: {
    DialogBox,
    GreenButton,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: '',
      addedSuccessfully: false,
    }
  },
  methods: {
    addMember() {
      if (!this.firstName || !this.lastName || !this.email || !this.phone || !this.role) {
        alert('Please fill all fields')
      }
      const newEmployee = {
        selected: false,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        role: this.role,
      }
      this.$emit('add-employee', newEmployee)
      this.addedSuccessfully = true
    },
  },
}
</script>
<style lang=""></style>
