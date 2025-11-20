<template lang="">
  <div>
    <div class="flex flex-col space-y-6 w-full">
      <div class="flex items-center justify-between w-full h-15 py-2">
        <p class="text-[#013C61] font-semibold text-lg">Employees</p>
        <GreenButton @click="showAddNewEmployee = true">
          <template #button-name>Add New</template>
        </GreenButton>
      </div>
      <AddNewEmployee
        v-if="showAddNewEmployee"
        @close="showAddNewEmployee = false"
        @add-employee="employees.push($event)"
      />
      <div
        class="flex items-center justify-between w-full h-15 px-6 py-2 rounded-md shadow-md bg-white"
      >
        <p class="text-[#013C61] font-semibold text-2xl">Funmilayo Oba's Ventures</p>
        <p class="text-[#013C61] text-base">62, Bode Thomas, Surulere, Lagos.</p>
      </div>

      <div>
        <CustomTableHeader>
          <template #recent-activities>
            <div class="flex items-start justify-center space-x-2">
              <div>
                <select class="border rounded-md p-2 border-[#6A7E8A66] text-base outline-none">
                  <option value="" disabled selected class="text-[#6A7E8A66]">Change role</option>
                  <option value="Admin">Admin</option>
                  <option value="Staff">Staff</option>
                </select>
              </div>
              <GreenButton customClass="p-2 rounded-md text-base">
                <template #button-name> Change </template>
              </GreenButton>
              <div class="relative w-80">
                <input
                  type="text"
                  name="employee"
                  v-model="searchText"
                  value=""
                  placeholder="Enter staff name here..."
                  class="focus:outline-none border border-[#6A7E8A66] pr-10 rounded-md w-full text-sm focus:border-[#013C61] p-2"
                />
                <img
                  src="/icons/search.svg"
                  alt=""
                  class="absolute right-2 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </template>
          <template #table-page>1 of 2</template>
        </CustomTableHeader>
      </div>
      <EmployeesTable :search="searchText" :employees="employees" />
    </div>
  </div>
</template>
<script>
import GreenButton from '@/components/GreenButton.vue'
import OutlineButton from '@/components/OutlineButton.vue'
import CustomTableHeader from '@/components/CustomTableHeader.vue'
import DialogBox from '@/components/DialogBox.vue'
import EmployeesTable from '@/components/EmployeesTable.vue'
import AddNewEmployee from '@/components/AddNewEmployee.vue'
export default {
  components: {
    GreenButton,
    OutlineButton,
    CustomTableHeader,
    DialogBox,
    EmployeesTable,
    AddNewEmployee,
  },
  data() {
    return {
      showAddNewEmployee: false,
      searchText: '',
      employees: [
        {
          selected: false,
          firstName: 'Funmilayo',
          lastName: 'Oba',
          email: 'funmi.bakery@gmail.com',
          phone: '+2348012345678',
          role: 'Admin',
        },
        {
          selected: false,
          firstName: 'Jane',
          lastName: 'Clement',
          email: 'josh.bakery@gmail.com',
          phone: '+2348012345678',
          role: 'Staff',
        },
        {
          selected: false,
          firstName: 'Hannah',
          lastName: 'Johnson',
          email: 'josh.bakery@gmail.com',
          phone: '+2348012345678',
          role: 'Staff',
        },
        {
          selected: false,
          firstName: 'John',
          lastName: 'Ngoka',
          email: 'josh.bakery@gmail.com',
          phone: '+2348012345678',
          role: 'Admin',
        },
        {
          selected: false,
          firstName: 'Omotayo',
          lastName: 'Adeleke',
          email: 'josh.bakery@gmail.com',
          phone: '+2348012345678',
          role: 'Staff',
        },
        {
          selected: false,
          firstName: 'Gloria',
          lastName: 'Amadi',
          email: 'josh.bakery@gmail.com',
          phone: '+2348012345678',
          role: 'Staff',
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
